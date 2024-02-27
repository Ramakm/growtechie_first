import { useState, useRef, useEffect } from "react";
import CourseHeader from "../components/course/courseHeader";
import { FormBody, TextInput, RadioInput } from "../components/form";
import { textData, radioData } from "../staticData/teacherFormData";
import { auth } from "../firebase/config";
import { login } from "../utils/auth";
import { useNavigate } from "react-router";
import handleFormChange from "../utils/handleFormChange"
import { db } from "../firebase/config";
import { FullScreenLoader } from "../components/loader/Loader";
import extractInitData from "../utils/extractInitData";

const JoinAsTeacherForm = () => {
    const initialData = extractInitData([...textData, ...radioData], "name");
    const form = useRef(null);
    const [user, setUser] = useState(auth.currentUser)
    const [formData, setFormData] = useState(initialData);
    const [uploadForm, setUploadForm] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authUser => setUser(authUser))

        if(user && user.metadata.creationTime === user.metadata.lastSignInTime) {
            postFormToDB()
        } else if (user) {
            alert("Uh Oh! You already exist as a user.\n We can't save your data.");
            navigate("/")
        }

        return () => unsubscribe();
    }, [user]);

    async function postFormToDB() {
        await db.collection("teachers").add({
            ...formData,
            email: user.email,
            uid: user.uid,
        })
            .then(() => {
                setFormData(initialData);
                alert("We will go through your application soon.\nTill then please wait!");
            })
            .catch(err => {
                alert(err.message);
            })
            .finally(() => {
                setUploadForm(false);
                navigate("/");
            })
    }

    function handleChange(event) {
        handleFormChange(event, setFormData);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setUploadForm(true);
        login();
    }

    return (
        <div>
            <CourseHeader />
            <div>
                <FormBody
                    title="Join As Teacher"
                    intro="If you are interested in joining GrowTechie as a teacher then, Please fill out this form first"
                    ref={form}
                    onSubmit={handleSubmit}
                >
                    {textData.map((data, index) => (
                        <div key={index}>
                            {index === 2 && <RadioInput data={radioData[0]} handleChange={handleChange} formData={formData} classes="mb-4" />}
                            <TextInput key={index} data={data} handleChange={handleChange} formData={formData} />
                        </div>
                    ))}
                </FormBody>
            </div>
            {uploadForm && <FullScreenLoader text="Don't refresh" />}
        </div>
    )
}

export default JoinAsTeacherForm;