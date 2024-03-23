import { useState, useRef } from "react";
import { FormBody, TextInput } from "../form";
import handleFormChange from "../../utils/handleFormChange";
import { FullScreenLoader } from "../loader/Loader";
import useFetchEventRegisteredUsers from "../../hooks/useFetchEventRegisteredUsers";
import registerEmail from "../../utils/registerEmail";

export default function EventRegistrationModal({ open, handleClose }) {
  const regsiteredUsers = useFetchEventRegisteredUsers();
  const [formData, setformData] = useState({ email: "" });
  const [registringUser, setregistringUser] = useState(false);
  const form = useRef(null);

  function handleRegisterUser(e) {
    e.preventDefault();
    const alreadyRegistered = regsiteredUsers?.includes(formData.email);

    if (alreadyRegistered) {
      setformData({ email: "" });
      alert("You are already registerd!");
      handleClose();
    } else {
      setregistringUser(true);
      registerEmail(formData.email, setregistringUser, handleClose);
    }
  }

  return (
    <FormBody
      title={`Weekly Session Registration`}
      ref={form}
      onSubmit={handleRegisterUser}
      open={open}
      handleClose={handleClose}
    >
      <div className="mt-8" />
      <TextInput
        data={{
          label: "Enter your email",
          name: "email",
          type: "email",
        }}
        handleChange={(e) => handleFormChange(e, setformData)}
        formData={formData}
      />
      {registringUser && <FullScreenLoader />}
    </FormBody>
  );
}