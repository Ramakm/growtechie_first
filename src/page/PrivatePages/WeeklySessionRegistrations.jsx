import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { db } from "../../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
import { FullScreenLoader } from "../../components/loader/Loader";
import Button from "@mui/material/Button";

const WeeklySessionRegistrations = () => {
  const [uncheckedEmails, checkedEmailsList, setAllDocs] = useFetchEmails();
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [deletingDocs, setDeletingDocs] = useState(false);

  function handleCheck(email) {
    if (selectedEmails.includes(email)) {
      const tempArr = [...selectedEmails];
      const idx = tempArr.indexOf(email);
      tempArr.splice(idx, 1);
      setSelectedEmails(tempArr);
    } else {
      setSelectedEmails((prev) => [...prev, email]);
    }
  }

  async function handleSubmit() {
    setDeletingDocs(true);
    selectedEmails.map(async (id) => {
      await deleteDoc(doc(db, "registrations", id));
    });

    await getDocs(setAllDocs);
    setDeletingDocs(false);
  }

  return (
    <div className="text-white p-10 w-[80vw]">
      <div>
        <h2 className="text-2xl mb-8">Unchecked Emails</h2>
        <ul>
          {uncheckedEmails.map((doc) => (
            <li
              className="bg-slate-100 mb-4 text-black rounded-lg"
              key={doc.id}
            >
              <button
                className="p-3 flex gap-4 items-center w-full"
                onClick={() => handleCheck(doc.id)}
              >
                <Checkbox checked={selectedEmails.includes(doc.id)} />
                <p>{doc.email}</p>
              </button>
            </li>
          ))}
          {uncheckedEmails.length === 0 && (
            <p className="mb-5 text-center text-slate-300 text-2xl">
              All Emails are checked!
            </p>
          )}
        </ul>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={uncheckedEmails.length === 0 || deletingDocs}
        >
          Submit
        </Button>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl mb-8">Checked Emails</h2>
        <ul className="flex flex-wrap gap-5">
          {checkedEmailsList.map((email, idx) => (
            <li
              className="bg-slate-100 mb-4 p-3 text-black rounded-lg"
              key={idx}
            >
              <p>✅ {email}</p>
            </li>
          ))}
        </ul>
        {checkedEmailsList.length === 0 && (
          <p className="mb-5 text-center text-slate-300 text-2xl">
            No checked emails!
          </p>
        )}
      </div>
      {deletingDocs && <FullScreenLoader text="Deleting..." />}
    </div>
  );
};

export default WeeklySessionRegistrations;

function useFetchEmails() {
  const [allDocs, setAllDocs] = useState([]);
  const uncheckedEmailsList = allDocs.filter(
    (doc) => doc.id !== "weekly-session-all-joiners"
  );
  const allJoinersList =
    allDocs.filter((doc) => doc.id === "weekly-session-all-joiners")[0]
      ?.joinersEmail || [];

  const checkedEmailsList = allJoinersList.filter(
    (email) => !uncheckedEmailsList.some((obj) => obj.email === email)
  );

  useEffect(() => {
    getDocs(setAllDocs);
  }, []);

  return [uncheckedEmailsList, checkedEmailsList, setAllDocs];
}

async function getDocs(setAllDocs) {
  const snapshot = await db.collection("registrations").get();
  const docs = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  setAllDocs(docs);
}
