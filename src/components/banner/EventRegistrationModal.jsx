import { useState, useEffect, useRef } from "react";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { FormBody, TextInput } from "../form";
import handleFormChange from "../../utils/handleFormChange";
import { FullScreenLoader } from "../loader/Loader";
import { runTransaction } from "firebase/firestore";

export default function EventRegistrationModal({ open, handleClose }) {
  const regsiteredUsers = useFetchUsers();
  const [formData, setformData] = useState({ email: "" });
  const [registringUser, setregistringUser] = useState(false);
  const form = useRef(null);

  function handleRegisterUser(e) {
    e.preventDefault();
    const alreadyRegistered = regsiteredUsers.includes(formData.email);

    if (alreadyRegistered) {
      setformData({ email: "" });
      alert("You are already registerd!");
      handleClose();
    } else {
      setregistringUser(true);
      updateAndCreateDoc();
    }
  }

  async function updateAndCreateDoc() {
    try {
      await runTransaction(db, async (transaction) => {
        const joinersDocRef = doc(
          db,
          "registrations",
          "weekly-session-all-joiners"
        );

        const joinersDoc = await transaction.get(joinersDocRef);
        if (!joinersDoc.exists()) {
          throw new Error("Document does not exist!");
        }

        const updateJoinersEmail = [
          ...joinersDoc.data().joinersEmail,
          formData.email,
        ];
        transaction.update(joinersDocRef, { joinersEmail: updateJoinersEmail });

        const newDocRef = db.collection("registrations").doc();
        transaction.set(newDocRef, {
          email: formData.email,
          isChecked: false,
        });
      });
      alert("Registration successfull!");
    } catch (e) {
      alert("There was an error while registering. \nPlease try again later");
    } finally {
      setregistringUser(false);
      handleClose();
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

function useFetchUsers() {
  const [regsiteredUsers, setRegisteredUsers] = useState([]);

  useEffect(() => {
    getRegisteredUsers();
  }, []);

  async function getRegisteredUsers() {
    const docRef = doc(db, "registrations", "weekly-session-all-joiners");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setRegisteredUsers(docSnap.data().joinersEmail);
    }
  }

  return regsiteredUsers;
}
