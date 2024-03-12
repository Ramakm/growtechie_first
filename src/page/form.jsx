import { useState, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import CourseHeader from "../components/course/courseHeader";
import { coursesArr, data } from "../staticData/formData";
import { FormBody, TextInput, RadioInput } from "../components/form";
import handleFormChange from "../utils/handleFormChange";
import extractInitData from "../utils/extractInitData";
import sendEmail from "../utils/sendEmail";

const Form = () => {
    const initialData = extractInitData(data, "name");
    const form = useRef(null);
    const [formData, setFormData] = useState(initialData);
    const navigate = useNavigate();
    
    const [searchParams] = useSearchParams();
    let course = searchParams.get("course");
    course = coursesArr.includes(course) ? course.split("-").join(" ") : "Tech Career Growth";

    function handleSubmit(e) {
        e.preventDefault();
        sendEmail(form.current)
        .then(() => {
            setFormData(initialData);
            form.current.reset();
            alert("Successfully submitted form! 🥳");
            navigate("/?submitted=true");
        },
        )
        .catch((err) => {
            console.log(err)
            alert("❌ There was an error while submitting ❌\n Please try again");
        })
    }


    return (
        <>
            <CourseHeader />
            <FormBody
                title={`${course} Registration`}
                intro={`If you are interested in GrowTechie ${course} course, Please fill out this form first.`}
                ref={form}
                onSubmit={handleSubmit}
            >
                <input className="w-0 h-0 m-0 p-0" name="course" value={course} readOnly />
                {data.map((input, idx) => {
                    if(input.inputType === "text") {
                        return <TextInput key={idx} data={input} handleChange={(e) => handleFormChange(e, setFormData)} formData={formData} />
                    } else {
                        return <RadioInput key={idx} data={input} handleChange={(e) => handleFormChange(e, setFormData)} formData={formData} />
                    }
                })}
            </FormBody>
        </>
    )
}

export default Form;