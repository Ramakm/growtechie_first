import { useState, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { f1, f2, f3, f4 } from "../../public/assets/form";
import CourseHeader from "../components/course/courseHeader";
import radioData, { textData, coursesArr } from "../formData";

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
            .then(
                () => {
                    setFormData(initialData);
                    form.current.reset();
                    navigate("/?submitted=true");
                },
                (error) => {
                    console.error("Error:", error);
                },
            );
    }

    const [searchParams] = useSearchParams();
    let course = searchParams.get("course");
    course = coursesArr.includes(course) ? course.split("-").join(" ") : "Tech Career Growth";

    return (
        <>
            <CourseHeader />
            <div>
                <img src={f1} alt="design image" className="hidden lg:block fixed w-40 top-24 left-10" />
                <img src={f2} alt="design image" className="hidden lg:block fixed w-40 top-24 right-10" />
                <img src={f3} alt="design image" className="hidden lg:block bottom-design fixed w-40 bottom-0 left-10" />
                <img src={f4} alt="design image" className="hidden lg:block bottom-design fixed w-40 bottom-10 right-10" />
            </div>
            <section className="p-5 py-28 z-10">
                <div className="max-w-[90vw] mx-auto w-[700px]">
                    <h1 className="capitalize text-[38px] font-semibold">
                        {course} Registration
                    </h1>
                    <p className="max-w-[64ch]">If you are interested in GrowTechie <span className="capitalize">{course}</span> course, Please fill out this form first.</p>

                    <form ref={form} onSubmit={handleSubmit} className="mt-[5vh] flex flex-col gap-4">
                        <input className="w-0 h-0 m-0 p-0" name="course" value={course} />
                        <TextInput data={textData[0]} handleChange={handleChange} formData={formData} />
                        <TextInput data={textData[1]} handleChange={handleChange} formData={formData} />
                        <TextInput data={textData[2]} handleChange={handleChange} formData={formData} />
                        <RadioInput data={radioData[0]} handleChange={handleChange} formData={formData} />
                        <RadioInput data={radioData[1]} handleChange={handleChange} formData={formData} />
                        <TextInput data={textData[3]} handleChange={handleChange} formData={formData} />
                        <RadioInput data={radioData[2]} handleChange={handleChange} formData={formData} />
                        <TextInput data={textData[4]} handleChange={handleChange} formData={formData} />
                        <RadioInput data={radioData[3]} handleChange={handleChange} formData={formData} />

                        <button type="submit" className="text-white text-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg px-5 py-2.5 text-center mb-2">
                            SUBMIT
                        </button>
                    </form>

                </div>
            </section>
        </>
    )
}

export default Form;

const TextInput = ({ data, formData, handleChange }) => {
    return (
        <div className="form-field bg-white z-10">
            <label htmlFor={data.name}>{data.label} <span className="text-red-700">*</span></label>
            <input
                type="text"
                id={data.name}
                name={data.name}
                value={formData[data.name]}
                onChange={handleChange}
                maxLength={150}
                className="border-b-[1px] border-solid border-gray-300 focus:outline-none"
                required
            />
        </div>
    )
}

const RadioInput = ({ data, handleChange, formData }) => {
    return (
        <div className="form-field bg-white z-10">
            <p>{data.label} <span className="text-red-700">*</span></p>

            {data.values.map((item, idx) => (
                <div key={idx}>
                    <input
                        type="radio"
                        id={item}
                        name={data.name}
                        value={item}
                        checked={formData[data.name] === item}
                        onChange={handleChange}
                        className="focus:outline-none focus:bg-white"
                        required
                    />
                    <label htmlFor={item} className="ml-2">{item}</label>
                    <br />
                </div>
            ))}

        </div>
    )
}