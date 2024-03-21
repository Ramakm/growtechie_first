import { runTransaction } from "firebase/firestore";
import { db } from "../firebase/config";
import { doc } from "firebase/firestore";

async function registerEmail(email, setregistringUser, handleClose=(() => {})) {
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

      const updateJoinersEmail = [...joinersDoc.data().joinersEmail, email];
      transaction.update(joinersDocRef, { joinersEmail: updateJoinersEmail });

      const newDocRef = db.collection("registrations").doc();
      transaction.set(newDocRef, {
        email: email,
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

export default registerEmail;
