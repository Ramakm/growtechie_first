import { useNavigate } from "react-router";
import { login } from "../utils/auth";
import { Modal, Box, Typography, Button } from "@mui/material";

const AuthDialogBox = ({ open, handleClose }) => {
  const navigate = useNavigate();

  function handleJoin(e) {
    e.stopPropagation();
    login();
    setOpenDialogBox(false);
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Authorization Modal"
        aria-describedby="Modal to authorize as a teacher or as a student"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80vw",
            maxWidth: "500px",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
            borderRadius: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                width: 70,
                borderRadius: 2,
                marginBottom: 0,
              }}
              alt="GrowTechie"
              src="/logo.png"
            />
            <Typography sx={{ fontSize: 25, fontWeight: "bold" }}>
              GrowTechie
            </Typography>
          </Box>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            We're glad to have you here!
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              marginTop: 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              type="submit"
              sx={{ width: "300px" }}
              onClick={handleJoin}
            >
              Join as STUDENT
            </Button>
            <Typography>or</Typography>
            <Button
              variant="contained"
              type="submit"
              sx={{ width: "300px" }}
              onClick={() => {
                navigate("/join-as-teacher");
              }}
            >
              Join as TEACHER
            </Button>
          </Box>
          <p className="mt-7 text-sm text-[var(--bg-color)]">
            Already have an account?{" "}
            <button
              className="text-blue-400 underline hover:no-underline"
              onClick={handleJoin}
            >
              SignIn
            </button>
          </p>
        </Box>
      </Modal>
    </div>
  );
};

export default AuthDialogBox;