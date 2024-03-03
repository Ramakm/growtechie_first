import { useState } from "react";
import CourseHeader from "../components/course/courseHeader";
import { FullScreenLoader } from "../components/loader/Loader";
import useAuth from "../hooks/useAuth";
import useFetchUserProfile from "../hooks/useFetchUserProfile";
import StudentCard from "../components/userProfile/StudentCard";
import TeacherPersonalProfile from "../components/userProfile/TeacherPersonalProfile";
import Footer from "../components/Footer/Footer";
import EditProfile from "../components/userProfile/EditProfile";

const UserProfile = () => {
  const [user] = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, isFetchingProfile] = useFetchUserProfile(user?.uid ? user.uid : "");

  return (
    <div className="text-white">
      <CourseHeader />
      <div className="mb-24">
        {userProfile?.isTeacher ? (
          isEditing ? (
            <EditProfile teacher={userProfile} setIsEditing={setIsEditing} />
          ) : (
            <TeacherPersonalProfile
              teacher={userProfile}
              setIsEditing={setIsEditing}
            />
          )
        ) : (
          <StudentCard user={user} setIsEditing={setIsEditing} />
        )}
      </div>
      {isFetchingProfile && <FullScreenLoader />}
      <Footer />
    </div>
  );
};

export default UserProfile;