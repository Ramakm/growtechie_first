import { useState, useRef } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import handleFormChange from "../utils/handleFormChange";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import emailjs from "@emailjs/browser";

const BookTrial = ({ teacher, user, open, handleClose }) => {
    const style = {
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
    };

    const [formData, setFormData] = useState({
        phoneNumber: "",
        session: ""
    });

    const groupFees = 10000;
    const individualFees = 15000;
    const form = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        console.log("submitted!");
        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_BOOK_TRAIL_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            )
            .then(() => {
                setFormData({
                    phoneNumber: "",
                    session: ""
                })
                alert("Successfully submitted form! 🥳");
            },
            )
            .catch((err) => {
                alert("❌ There was an error while submitting ❌\n Please try again later");
            })

        // Close form
        // navigate to home
    }


    return (
        <div>
            <form ref={form} className="hidden">
                <input type="text" id="name" name="name" value={"Palak"} readOnly />
                <input type="text" id="email" name="email" value={"example.com"} readOnly />
                <input type="text" id="phone" name="phone" value={formData.phoneNumber} readOnly />
                <input type="text" id="teacherName" name="teacherName" value={"testing"} readOnly />
                <input type="text" id="uid" name="uid" value={"dkfweurewewjdsj"} readOnly />
                <input type="text" id="session" name="session" value={formData.session} readOnly />
            </form>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
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
                        alt="Palak Goyal"
                        src="https://avatars.githubusercontent.com/u/116902573?v=4"
                    />
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                        Continue Booking a Free Trial
                    </Typography>
                    <p></p>
                    <Typography id="modal-modal-description" sx={{ fontSize: '14px', maxWidth: '50ch' }}>
                        You're only a few steps away from booking a FREE trial session with{" "}
                        <span className="font-semibold">Pranab Chaudhari</span>
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
                        <Button variant="contained" type="submit" sx={{ minWidth: "100%" }}>Submit</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    )
}


export default BookTrial;