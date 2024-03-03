import CourseHeader from "../components/course/courseHeader";
import { FullScreenLoader } from "../components/loader/Loader";
import useAuth from "../hooks/useAuth";
import useFetchUserProfile from "../hooks/useFetchUserProfile";
import StudentCard from "../components/userProfile/StudentCard";
import TeacherPersonalProfile from "../components/userProfile/TeacherPersonalProfile";
import Footer from "../components/Footer/Footer";

const UserProfile = () => {
  // use real data and uncomment loader
  const [user] = useAuth();
  // const [userProfile, isFetchingProfile] = useFetchUserProfile(user?.uid ? user.uid : "");

  // console.log(userProfile)

  return (
    <div className="text-white">
      <CourseHeader />
      <div className="my-24">
        {userProfile?.isTeacher ? (
          <TeacherPersonalProfile teacher={userProfile} />
        ) : (
          <StudentCard user={user} />
        )}
      </div>
      {/* {isFetchingProfile && <FullScreenLoader />} */}
      <Footer />
    </div>
  );
};

export default UserProfile;

const userProfile = {
  groupFee: "10000",
  experience: "3",
  individualFee: "16000",
  position: "Frontend Developer at Infosys",
  preRequisities: "Beginner in Python Programming",
  phone: "23432 23433",
  ytLink: "",
  languages: "Hindi English",
  imageLink: "https://avatars.githubusercontent.com/u/116902573?v=4",
  twitter: "",
  "isTeacher": true,
  instagram: "",
  sessionCount: "2",
  name: "Palakgoyal",
  email: "palakgoyal0304@gmail.com",
  linkedin: "",
  bio: "Trained teacher, and expert at coding, bringing my knowledge to the students and help them in getting their first job or transition to a new job.",
  uid: "1guBYADd1DOvY2w9oilXc7BWLMI2",
  courseName: "Python Programming",
  demoCount: "1",
  approved: true,
};
