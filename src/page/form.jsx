import { useState, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import CourseHeader from "../components/course/courseHeader";
import radioData, { textData, coursesArr } from "../staticData/formData";
import { FormBody, TextInput, RadioInput } from "../components/form";

const Form = () => {
    const initialData = {
        name: "",
        email: "",
        phone: "",
        higherEducation: "",
        courseLearningOption: "",
        fee: "",
        paymentOptions: "",
        time: "",
        findUs: "",
    }
    const form = useRef(null);
    const [formData, setFormData] = useState(initialData);
    const navigate = useNavigate();

    function handleChange(event) {
        setFormData(prevFormData => ({
            ...prevFormData,
            [event.target.name]: event.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            )
            .then(() => {
                setFormData(initialData);
                form.current.reset();
                alert("Successfully submitted form! 🥳");
                navigate("/?submitted=true");
            },
            )
            .catch(() => {
                alert("❌ There was an error while submitting ❌\n Please try again");
            })
    }

    const [searchParams] = useSearchParams();
    let course = searchParams.get("course");
    course = coursesArr.includes(course) ? course.split("-").join(" ") : "Tech Career Growth";

    return (
        <>
            <CourseHeader />
            <FormBody
                title={`${course} Registration`}
                intro={`If you are interested in GrowTechie ${course} course, Please fill out this form first.`}
                ref={form}
                handleSubmit={handleSubmit}
            >
                <input className="w-0 h-0 m-0 p-0" name="course" value={course} readOnly />
                <TextInput data={textData[0]} handleChange={handleChange} formData={formData} />
                <TextInput data={textData[1]} handleChange={handleChange} formData={formData} />
                <TextInput data={textData[2]} handleChange={handleChange} formData={formData} />
                <RadioInput data={radioData[0]} handleChange={handleChange} formData={formData} />
                <RadioInput data={radioData[1]} handleChange={handleChange} formData={formData} />
                <TextInput data={textData[3]} handleChange={handleChange} formData={formData} />
                <RadioInput data={radioData[2]} handleChange={handleChange} formData={formData} />
                <TextInput data={textData[4]} handleChange={handleChange} formData={formData} />
                <RadioInput data={radioData[3]} handleChange={handleChange} formData={formData} />
            </FormBody>
        </>
    )
}

export default Form;