import { useState, useRef, useEffect } from "react";
import { FormBody, TextInput, RadioInput, ImageInput } from "../form";
import {
  textData,
  radioData,
  fileData,
} from "../../staticData/teacherFormData";
import { auth } from "../../firebase/config";
import { login } from "../../utils/auth";
import { useNavigate } from "react-router";
import handleFormChange from "../../utils/handleFormChange";
import { db } from "../../firebase/config";
import { FullScreenLoader } from "../loader/Loader";
import extractInitData from "../../utils/extractInitData";
import { uploadImageToFirebase } from "../../utils/imageFn";

const JoinAsTeacherForm = ({ open, handleClose }) => {
  const initialData = extractInitData(
    [...textData, ...radioData, ...fileData],
    "name"
  );
  const form = useRef(null);
  const [user, setUser] = useState(auth.currentUser);
  const [formData, setFormData] = useState(initialData);
  const [uploadForm, setUploadForm] = useState(false);
  const navigate = useNavigate();

  // Fix loader visibility

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) =>
      setUser(authUser)
    );

    if (
      user &&
      uploadForm &&
      user.metadata.creationTime === user.metadata.lastSignInTime
    ) {
      postFormToDB();
    } else if (user) {
      alert("Uh Oh! You already exist as a user.\n We can't save your data.");
      navigate("/");
    }

    return () => unsubscribe();
  }, [user]);

  async function postFormToDB() {
    console.log("uploading");
    await uploadImageToFirebase(formData.imageLink)
      .then(async (url) => {
        await db
          .collection("users")
          .add({
            ...formData,
            email: user.email,
            uid: user.uid,
            isTeacher: true,
            approved: false,
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
        setFormData(initialData);
        handleClose();
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
    <FormBody
      title="Join As Teacher"
      ref={form}
      onSubmit={handleSubmit}
      open={open}
      handleClose={handleClose}
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
      {uploadForm && <FullScreenLoader text="Don't refresh" />}
    </FormBody>
  );
};

export default JoinAsTeacherForm;
