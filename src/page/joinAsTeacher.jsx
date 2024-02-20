import { useState, useRef } from "react";
import CourseHeader from "../components/course/courseHeader";
import { FormBody, TextInput, RadioInput } from "../components/form";
import { textData, radioData } from "../staticData/teacherFormData";

const JoinAsTeacher = () => {
    const initialData = {
        name: "",
        email: "",
        phone: "",
        groupFee: "",
        individualFee: "",
        linkedin: "",
        twitter: "",
        instagram: "",
        demoCount: "",
        preRequisities: "",
        ytLink: "",
        languages: "",
    }
    const form = useRef(null);
    const [formData, setFormData] = useState(initialData);

    function handleChange(event) {
        setFormData(prevFormData => ({
            ...prevFormData,
            [event.target.name]: event.target.value
        }))
    }


    function handleSubmit() {

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
        </div>
    )
}

export default JoinAsTeacher;