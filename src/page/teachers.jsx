import CourseHeader from "../components/course/courseHeader";

const Teachers = () => {
    return (
        <div className="text-[var(--primary-text)]">
            <CourseHeader />
            <div className="mt-24 max-w-[900px] mx-auto">
                <h1 className="text-4xl font-semibold mb-[10vh]">
                    Book a Free Trial with a Teacher of your Choice
                </h1>
                <div className="flex flex-col gap-8">
                    {/* <TeacherComponent /> */}
                </div>
            </div>
        </div>
    )
}

export default Teachers;