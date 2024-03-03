import { auth } from "../../firebase/config";
import { Button } from "@mui/material";
import { ProfileSection } from "../teacherProfile";
import EditIcon from "@mui/icons-material/Edit";

const TeacherPersonalProfile = ({ teacher }) => {
  return (
    <div className="mb-10">
      <div className="flex justify-around px-5 mb-3">
        <Button variant="contained" onClick={() => auth.signOut()}>
          Logout
        </Button>
        <button
          className="p-3 bg-white rounded-full text-black"
          title="Edit Profile"
        >
          <EditIcon className="scale-125" />
        </button>
      </div>
      <div className="w-[85vw] max-w-[700px] mx-auto">
        <ProfileSection teacher={teacher} />
      </div>
    </div>
  );
};

export default TeacherPersonalProfile;
