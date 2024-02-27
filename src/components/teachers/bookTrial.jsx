import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import handleFormChange from "../../utils/handleFormChange";
import emailjs from "@emailjs/browser";
import { FullScreenLoader } from "../loader/Loader";
import {
    Modal,
    Box,
    Typography,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormHelperText,
    Button,
} from "@mui/material"


const BookTrial = ({ teacher, user, open, handleClose }) => {
    const initData = {
        phoneNumber: "",
        session: ""
    }

    const navigate = useNavigate();

    const [formData, setFormData] = useState(initData);
    const [sendingMail, setSendingMail] = useState(false);

    const groupFees = teacher.groupFee;
    const individualFees = teacher.individualFee;
    const form = useRef(null);

    function handleSubmit(e) {
        setSendingMail(true)
        e.preventDefault();
        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_BOOK_TRAIL_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            )
            .then(() => {
                setFormData(initData);
                alert("Successfully send request to book trial! 🥳\nWe will contact you soon");
            },
            )
            .catch(() => {
                alert("❌ There was an error while submitting ❌\n Please try again later");
            })
            .finally(() => {
                setSendingMail(false)
                navigate("/");
            })
    }


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    maxWidth: '600px',
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                    textAlign: 'center',
                }}>
                    <Box
                        component="img"
                        sx={{
                            height: 150,
                            width: 150,
                            maxHeight: { xs: 100, md: 120 },
                            maxWidth: { xs: 100, md: 120 },
                            borderRadius: 2,
                            marginX: 'auto',
                            marginBottom: 2,
                        }}
                        alt={teacher.name}
                        src={teacher.imageLink}
                    />
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                        Continue Booking a Free Trial
                    </Typography>
                    <p></p>
                    <Typography id="modal-modal-description" sx={{ fontSize: '14px', maxWidth: '50ch' }}>
                        You're only a few steps away from booking a FREE trial session with{" "}
                        <span className="font-semibold">{teacher.name}</span>
                    </Typography>
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
                            <FormControlLabel value={`Group ₹${groupFees}`} control={<Radio required={true} />} label={`Group ₹${groupFees}`} />
                            <FormControlLabel value={`Individual ₹${individualFees}`} control={<Radio required={true} />} label={`Individual ₹${individualFees}`} />
                        </RadioGroup>
                        <Button variant="contained" disabled={sendingMail} type="submit" sx={{ minWidth: "100%" }}>Submit</Button>
                    </form>
                </Box>
            </Modal>
            {sendingMail && <FullScreenLoader />}

            {/* Form to send data to Email JS */}
            <form ref={form} className="hidden">
                <input type="text" id="name" name="name" value={user.displayName} readOnly />
                <input type="text" id="email" name="email" value={user.email} readOnly />
                <input type="text" id="phone" name="phone" value={formData.phoneNumber} readOnly />
                <input type="text" id="teacherName" name="teacherName" value={teacher.name} readOnly />
                <input type="text" id="uid" name="uid" value={teacher.uid} readOnly />
                <input type="text" id="session" name="session" value={formData.session} readOnly />
            </form>
        </div>
    )
}


export default BookTrial;