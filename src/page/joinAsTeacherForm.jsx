import { useState, useRef, useEffect } from "react";
import CourseHeader from "../components/course/courseHeader";
import {
  FormBody,
  TextInput,
  RadioInput,
  ImageInput,
} from "../components/form";
import { textData, radioData, fileData } from "../staticData/teacherFormData";
import { auth } from "../firebase/config";
import { login } from "../utils/auth";
import { useNavigate } from "react-router";
import handleFormChange from "../utils/handleFormChange";
import { db } from "../firebase/config";
import { FullScreenLoader } from "../components/loader/Loader";
import extractInitData from "../utils/extractInitData";
import { uploadImageToFirebase } from "../utils/imageFn";

const JoinAsTeacherForm = () => {
  const initialData = extractInitData(
    [...textData, ...radioData, ...fileData],
    "name"
  );
  const form = useRef(null);
  const [user, setUser] = useState(auth.currentUser);
  const [formData, setFormData] = useState(initialData);
  const [uploadForm, setUploadForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) =>
      setUser(authUser)
    );

    if (
      user &&
      uploadForm
      // uploadForm &&
      // user.metadata.creationTime === user.metadata.lastSignInTime
    ) {
      postFormToDB();
    } else if (user) {
      alert("Uh Oh! You already exist as a user.\n We can't save your data.");
      navigate("/");
    }

    return () => unsubscribe();
  }, [user]);

  async function postFormToDB() {
    await uploadImageToFirebase(formData.imageLink)
      .then(async (url) => {
        await db
          .collection("users")
          .add({
            ...formData,
            email: user.email,
            uid: user.uid,
            isTeacher: true,
            [fileData[0].name]: url,
          })
          .then(() => {
            setFormData(initialData);
            alert(
              "We will go through your application soon.\nTill then please wait!"
            );
          })
          .catch((err) => {
            alert(err.message);
          });
      })
      .catch((err) => {
        alert("Not able to uploade image. \nPlease try again later!");
      })
      .finally(() => {
        setUploadForm(false);
        navigate("/");
      });
  }

  function handleChange(event) {
    handleFormChange(event, setFormData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUploadForm(true);
    login();
  }

  return (
    <div>
      <CourseHeader />
      <div>
        <FormBody
          title="Join As Teacher"
          intro="If you are interested in joining GrowTechie as a teacher then, Please fill out this form first"
          ref={form}
          onSubmit={handleSubmit}
        >
          <ImageInput
            handleChange={handleChange}
            formData={formData}
            inputData={fileData[0]}
          />
          {textData.map((data, index) => (
            <div key={index}>
              {index === 2 && (
                <RadioInput
                  data={radioData[0]}
                  handleChange={handleChange}
                  formData={formData}
                  classes="mb-4"
                />
              )}
              <TextInput
                key={index}
                data={data}
                handleChange={handleChange}
                formData={formData}
              />
            </div>
          ))}
        </FormBody>
      </div>
      {uploadForm && <FullScreenLoader text="Don't refresh" />}
    </div>
  );
};

export default JoinAsTeacherForm;
