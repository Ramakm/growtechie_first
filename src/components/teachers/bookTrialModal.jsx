import BookTrialForm from "./bookTrialForm";
import { Modal, Box, Typography, Avatar } from "@mui/material";

const BookTrialModal = ({ teacher, open, handleClose }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Trial booking modal"
        aria-describedby="A modal to book free trail with preferred teacher"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "600px",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={teacher.imageLink}
            sx={{
              height: 150,
              width: 150,
              maxHeight: { xs: 100, md: 120 },
              maxWidth: { xs: 100, md: 120 },
              borderRadius: 2,
              marginX: "auto",
              marginBottom: 2,
            }}
          />
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Continue Booking a Free Trial
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ fontSize: "14px", maxWidth: "50ch" }}
          >
            You're only a few steps away from booking a FREE trial session with{" "}
            <span className="font-semibold">{teacher.name}</span>
          </Typography>
          <BookTrialForm teacher={teacher} />
        </Box>
      </Modal>
    </div>
  );
};

export default BookTrialModal;
