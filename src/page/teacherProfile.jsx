import { useEffect, useState } from "react";
import CourseHeader from "../components/course/courseHeader";
import { ProfileSection, BookTrialSection } from "../components/teacherProfile";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { FullScreenLoader } from "../components/loader/Loader";
import Page404 from "./Page404";

const TeacherProfile = () => {
  const [teacher, setTeacher] = useState({});
  const [fetchingTeacher, setFetchingTeacher] = useState(true);
  const params = useParams();
  let teacherId = params.id;

  useEffect(() => {
    const unsubscribe = db
      .collection("teachers")
      .where("uid", "==", teacherId)
      .limit(1)
      .onSnapshot((snapshot) => {
        setFetchingTeacher(false);
        setTeacher(snapshot.docs[0]?.data());
      });

    return unsubscribe;
  }, []);

  return (
    <div className="text-white">
      <CourseHeader />
      {fetchingTeacher ? (
        <FullScreenLoader />
      ) : (
        <div className="mt-24 max-w-[1200px] flex gap-9 justify-between mx-auto">
          {teacher ? (
            <>
              <ProfileSection teacher={teacher} />
              <BookTrialSection teacher={teacher} />
            </>
          ) : (
            <Page404 />
          )}
        </div>
      )}
    </div>
  );
};

export default TeacherProfile;
