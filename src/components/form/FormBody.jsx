import { forwardRef } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "./form.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  maxWidth: "500px",
  bgcolor: "#f7f9f8",
  boxShadow:
    "5px 15px 25px rgba(255, 255, 255, 0.3), 0px -5px 25px rgba(255,255,255,0.5)",
};

const FormBody = (
  { children, title, onSubmit, open = true, handleClose },
  ref
) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={style}
        className={`h-[500px] max-h-[90vh] overflow-y-scroll white-box-shadow no-scrollbar rounded-lg`}
      >
        <h1 className="capitalize text-[30px] text-gradient font-bold px-3 pt-8 text-center">
          {title}
        </h1>
        <form
          ref={ref}
          onSubmit={onSubmit}
          className="flex flex-col gap-4 relative p-8 pt-0"
        >
          {children}
          <button
            type="submit"
            className="text-white text-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg px-5 py-2.5 text-center mb-2"
          >
            SUBMIT
          </button>
        </form>
      </Box>
    </Modal>
  );
};

export default forwardRef(FormBody);
