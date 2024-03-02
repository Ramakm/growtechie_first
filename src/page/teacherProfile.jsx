import CourseHeader from "../components/course/courseHeader";
import { ProfileSection, BookTrialSection } from "../components/teacherProfile";
import { useParams } from "react-router-dom";
import { FullScreenLoader } from "../components/loader/Loader";
import Page404 from "./Page404";
import useFetchUserProfile from "../hooks/useFetchUserProfile";

const TeacherProfile = () => {
  const params = useParams();
  let teacherId = params.id;

  const [teacherProfile, isFetchingTeacher] = useFetchUserProfile(teacherId);

  return (
    <div className="text-white">
      <CourseHeader />
      {isFetchingTeacher ? (
        <FullScreenLoader />
      ) : (
        <div className="mt-24 max-w-[1200px] flex gap-9 justify-between mx-auto">
          {teacherProfile ? (
            <>
              <ProfileSection teacher={teacherProfile} />
              <BookTrialSection teacher={teacherProfile} />
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
