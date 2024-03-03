import CourseHeader from "../components/course/courseHeader";
import {
  ProfileSection,
  BookTrialSection,
  BookTrial,
} from "../components/teacherProfile";
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
        <div className="mt-24 max-w-[1200px] flex gap-9 justify-between mx-auto px-4">
          {teacherProfile ? (
            <>
              <div>
                <ProfileSection teacher={teacherProfile} />
                <BookTrial teacher={teacherProfile} />
              </div>
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
