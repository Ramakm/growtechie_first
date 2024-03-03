import { useState, useRef } from "react";
import { FormBody, TextInput, RadioInput } from "../form";
import { textData, radioData } from "../../staticData/teacherFormData";
import handleFormChange from "../../utils/handleFormChange";
import { db } from "../../firebase/config";
import { FullScreenLoader } from "../loader/Loader";
import { Avatar } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import CancelIcon from "@mui/icons-material/Cancel";

const EditProfile = ({ teacher, setIsEditing }) => {
  const form = useRef(null);
  const [formData, setFormData] = useState(teacher);
  const [uploadForm, setUploadForm] = useState(false);
  const [user] = useAuth();

  async function postFormToDB() {
    const doc = await db
      .collection("users")
      .where("uid", "==", user?.uid)
      .limit(1)
      .get();

    const docRef = doc.docs[0].ref;
    console.log("fetched", docRef);

    await docRef
      .update(formData)
      .catch((err) => {
        console.error(err);
        alert("Uh Oh! Not able to upload form\nPlease try again later!");
      })
      .finally(() => {
        setUploadForm(false);
        setIsEditing(false);
      });
  }

  function handleChange(event) {
    handleFormChange(event, setFormData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUploadForm(true);
    postFormToDB();
  }

  return (
    <div>
      <FormBody
        title="Edit your profile"
        intro="Let's upgrade your profile"
        ref={form}
        onSubmit={handleSubmit}
      >
        <button
          type="button"
          className="absolute right-0 -top-28"
          onClick={() => setIsEditing(false)}
        >
          <CancelIcon className="scale-150" />
        </button>
        <Avatar src={formData.imageLink} sx={{ width: 120, height: 120 }} />
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
      {uploadForm && <FullScreenLoader text="Don't refresh" />}
    </div>
  );
};

export default EditProfile;
