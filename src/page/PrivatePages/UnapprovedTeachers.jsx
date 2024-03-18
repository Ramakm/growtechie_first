import { useState, useEffect } from "react";
import { db } from "../../firebase/config";
import Avatar from "@mui/material/Avatar";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { FullScreenLoader } from "../../components/loader/Loader";
import { doc, updateDoc } from "firebase/firestore";

const UnapprovedTeachers = () => {
  const [teachers, setTeachers] = useFetchUnapprovedTeachers();
  const [approving, setApproving] = useState(false);

  async function handleApprove(id) {
    setApproving(true);

    const teacherDocRef = doc(db, "users", id);
    try {
      await updateDoc(teacherDocRef, {
        approved: true,
      });
      setTeachers([]);
      fetchTeachers(setTeachers);
    } catch {
      alert("There was an error while approving!");
    } finally {
      setApproving(false);
    }
  }

  return (
    <div className="text-white p-8">
      <h1 className="text-3xl mt-8 mb-16">
        All Unapproved Teachers ({teachers.length})
      </h1>
      <ul className="max-w-[800px] flex flex-col gap-16">
        {teachers.map((teacher) => (
          <li className="radial-shiny-gray-gradient p-3" key={teacher.id}>
            <div className="flex gap-5">
              <div className="w-48 overflow-hidden flex items-center justify-center h-48 top-1/2 left-6 rounded-3xl border-4 border-white">
                <Avatar
                  alt="Remy Sharp"
                  src={teacher.imageLink}
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "0",
                    objectPosition: "center",
                    aspectRatio: "initial",
                  }}
                />
              </div>
              <div className="flex flex-col gap-3 justify-center">
                <h3>{teacher.name}</h3>
                <h4>
                  {teacher.position}{" "}
                  <span className="text-sm text-slate-100">
                    ({teacher.experience} yrs of teaching experience)
                  </span>
                </h4>
                <p>
                  Email:{" "}
                  <a
                    href={`mailto: ${teacher.email}`}
                    className="text-blue-300 underline hover:no-underline"
                  >
                    {teacher.email}
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href={`tel: ${teacher.phone}`}
                    className="text-blue-300 underline hover:no-underline"
                  >
                    {teacher.phone}
                  </a>
                </p>

                <div className="flex gap-4 mt-2">
                  {teacher.instagram.length > 1 && (
                    <a href={teacher.instagram}>
                      <InstagramIcon />
                    </a>
                  )}
                  {teacher.ytLink.length > 1 && (
                    <a href={teacher.ytLink}>
                      <YouTubeIcon />
                    </a>
                  )}
                  {teacher.twitter.length > 1 && (
                    <a href={teacher.twitter}>
                      <XIcon />
                    </a>
                  )}
                  {teacher.linkedin.length > 1 && (
                    <a href={teacher.linkedin}>
                      <LinkedInIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <p>
                <span className="font-bold text-lg">Bio</span>: {teacher.bio}
              </p>
              <p>
                <span className="font-bold text-lg">Course</span>:{" "}
                {teacher.courseName}
              </p>
              <p>
                <span className="font-bold text-lg">Pre-requisites</span>:{" "}
                {teacher.preRequisities}
              </p>
              <div className="flex gap-8">
                <p>
                  Individual Fees:{" "}
                  <span className="font-bold text-lg text-green-100">
                    ₹ {teacher.individualFee}
                  </span>
                </p>
                <p>
                  Group Fees:{" "}
                  <span className="font-bold text-lg text-green-100">
                    {" "}
                    ₹ {teacher.groupFee}
                  </span>
                </p>
              </div>

              <div className="flex gap-8">
                <p>
                  Session:{" "}
                  <span className="font-bold text-lg text-green-100">
                    {teacher.sessionCount}/week
                  </span>
                </p>
                <p>
                  Free Demo Session:{" "}
                  <span className="font-bold text-lg text-green-100">
                    {" "}
                    {teacher.demoCount}/student
                  </span>
                </p>
              </div>
              <p>
                <span className="font-bold text-lg">Languages</span>:{" "}
                {teacher.languages}
              </p>

              <button
                className="text-white mt-5 w-full text-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg px-5 py-2.5 text-center mb-2"
                onClick={() => handleApprove(teacher.id)}
              >
                Approve
              </button>
            </div>
            {approving && <FullScreenLoader text="Approving..." />}
          </li>
        ))}
      </ul>
      {teachers.length === 0 && (
        <p className="text-center">No teacher for approving!</p>
      )}
    </div>
  );
};

const useFetchUnapprovedTeachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const tempTeachersArr = [];
    const unsubscribe = db
      .collection("users")
      .where("approved", "==", false)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) =>
          tempTeachersArr.push({ ...doc.data(), id: doc.id })
        );
        setTeachers(tempTeachersArr);
      });

    return unsubscribe;
  }, []);

  return [teachers, setTeachers];
};

async function fetchTeachers(setTeachers) {
  const tempTeachersArr = [];
  db.collection("users")
    .where("approved", "==", false)
    .onSnapshot((snapshot) => {
      snapshot.docs.map((doc) =>
        tempTeachersArr.push({ ...doc.data(), id: doc.id })
      );
      setTeachers(tempTeachersArr);
    });
}

export default UnapprovedTeachers;
