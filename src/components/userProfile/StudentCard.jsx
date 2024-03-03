import { Avatar, Card, Button } from "@mui/material";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router";

const StudentCard = ({ user }) => {
  const navigate = useNavigate();

  function logout() {
    auth.signOut();
    navigate("/");
  }

  return (
    <div className="mx-3 mt-24">
      <Card
        sx={{ maxWidth: 350, backgroundColor: "whitesmoke" }}
        className="mx-auto p-5 flex flex-col justify-center items-center mb-20"
      >
        <Avatar
          src={user?.photoURL}
          className="w-40 border-solid border-slate-500 border-2 shadow-lg"
          sx={{ width: 120, height: 120 }}
        />
        <h2 className="text-2xl mt-2 font-bold">
          Hi! <span className="text-gradient">{user?.displayName}</span>
        </h2>
        <a
          href="/teachers"
          className="mt-2 text-blue-400 underline hover:no-underline text-center"
        >
          Want to explore some helpers in your learning journey?
        </a>
        <Button
          variant="contained"
          className="mt-10"
          sx={{ marginTop: "30px" }}
          onClick={logout}
        >
          Logout
        </Button>
      </Card>
    </div>
  );
};

export default StudentCard;
