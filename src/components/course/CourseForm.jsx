import { useState, useRef } from "react";
import { data } from "../../staticData/formData";
import { FormBody, TextInput, RadioInput } from "../form";
import handleFormChange from "../../utils/handleFormChange";
import extractInitData from "../../utils/extractInitData";
import sendEmail from "../../utils/sendEmail";
import { FullScreenLoader } from "../loader/Loader";

const CourseForm = ({ open, handleClose, courseName }) => {
  const initialData = extractInitData(data, "name");
  const form = useRef(null);
  const [formData, setFormData] = useState(initialData);
  const [sendingMail, setSendingMail] = useState(false);

  function handleSubmit(e) {
    setSendingMail(true);
    e.preventDefault();
    sendEmail(form.current)
      .then(() => {
        setFormData(initialData);
        form.current.reset();
        alert("Successfully submitted form! 🥳");
        handleClose();
      })
      .catch((err) => {
        console.log(err);
        alert("❌ There was an error while submitting ❌\n Please try again");
      })
      .finally(() => {
        setSendingMail(false);
      })
  }

  return (
    <FormBody
      title={`${courseName} Registration`}
      ref={form}
      onSubmit={handleSubmit}
      open={open}
      handleClose={handleClose}
      sx={{
        maxWidth: "650px",
        maxHeight: "600px",
        backgroundSize: "500px",
      }}
    >
      <input
        className="w-0 h-0 m-0 p-0"
        name="course"
        value={courseName}
        readOnly
      />
      {data.map((input, idx) => {
        if (input.inputType === "text") {
          return (
            <TextInput
              key={idx}
              data={input}
              handleChange={(e) => handleFormChange(e, setFormData)}
              formData={formData}
            />
          );
        } else {
          return (
            <RadioInput
              key={idx}
              data={input}
              handleChange={(e) => handleFormChange(e, setFormData)}
              formData={formData}
            />
          );
        }
      })}
      {sendingMail && <FullScreenLoader />}
    </FormBody>
  );
};

export default CourseForm;
