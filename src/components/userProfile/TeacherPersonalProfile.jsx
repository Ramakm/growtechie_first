import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import { ProfileSection } from "../teacherProfile";
import EditIcon from "@mui/icons-material/Edit";
import { logout } from "../../utils/auth";

const TeacherPersonalProfile = ({ teacher, setIsEditing }) => {
  const navigate = useNavigate();
  return (
    <div className="mb-10 mt-24">
      <div className="flex justify-around px-5 mb-3">
        <Button variant="contained" onClick={() => logout(navigate)}>
          Logout
        </Button>
        <button
          className="p-3 bg-white rounded-full text-black"
          title="Edit Profile"
          onClick={() => setIsEditing(true)}
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
