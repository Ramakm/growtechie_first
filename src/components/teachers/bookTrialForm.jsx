import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormHelperText,
  Button,
} from "@mui/material";
import handleFormChange from "../../utils/handleFormChange";
import { FullScreenLoader } from "../loader/Loader";
import sendMail from "../../utils/sendMail";

const BookTrialForm = ({ teacher, user }) => {
  const groupFees = teacher.groupFee;
  const individualFees = teacher.individualFee;

  const initData = {
    phoneNumber: "",
    session: "",
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initData);
  const [sendingMail, setSendingMail] = useState(false);

  const form = useRef(null);

  async function handleSubmit(e) {
    setSendingMail(true);
    e.preventDefault();
    await sendMail(
      form,
      "Successfully send request to book trial! 🥳\nWe will contact you soon"
    )
      .then(() => setFormData(initData))
      .catch(() => {
        alert(
          "❌ There was an error while submitting ❌\n Please try again later"
        );
      })
      .finally(() => {
        setSendingMail(false);
        navigate("/");
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-4">
        <FormControl variant="standard" sx={{ minWidth: "100%" }}>
          <TextField
            id="outlined-controlled"
            label="Phone number"
            value={formData.phoneNumber}
            name="phoneNumber"
            onChange={(e) => handleFormChange(e, setFormData)}
            required
          />
          <FormHelperText id="component-helper-text">
            We will NEVER share your phone with anyone
          </FormHelperText>
        </FormControl>

        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="session"
          value={formData.session}
          onChange={(e) => handleFormChange(e, setFormData)}
        >
          <FormControlLabel
            value={`Group ₹${groupFees}`}
            control={<Radio required={true} />}
            label={`Group ₹${groupFees}`}
          />
          <FormControlLabel
            value={`Individual ₹${individualFees}`}
            control={<Radio required={true} />}
            label={`Individual ₹${individualFees}`}
          />
        </RadioGroup>
        <Button
          variant="contained"
          disabled={sendingMail}
          type="submit"
          sx={{ minWidth: "100%" }}
        >
          Submit
        </Button>
      </form>

      {/* Form to send data to email js */}
      <form ref={form} className="hidden">
        <input
          type="text"
          id="name"
          name="name"
          value={user.displayName}
          readOnly
        />
        <input
          type="text"
          id="email"
          name="email"
          value={user.email}
          readOnly
        />
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phoneNumber}
          readOnly
        />
        <input
          type="text"
          id="teacherName"
          name="teacherName"
          value={teacher.name}
          readOnly
        />
        <input type="text" id="uid" name="uid" value={teacher.uid} readOnly />
        <input
          type="text"
          id="session"
          name="session"
          value={formData.session}
          readOnly
        />
      </form>
      {sendingMail && <FullScreenLoader />}
    </div>
  );
};

export default BookTrialForm;
