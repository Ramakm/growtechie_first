import CourseHeader from "../components/course/courseHeader";
import TeachersComponent from "../components/teachers/teachers";

const Teachers = () => {
  return (
    <div className="text-[var(--primary-text)]">
      <CourseHeader />
      <div className="mt-24 max-w-[900px] mx-auto">
        <h1 className="text-4xl font-semibold mb-[10vh]">
        Book a free trial with a teacher of your choice
        </h1>
        <div className="flex flex-col gap-8">
          <TeachersComponent />
        </div>
      </div>
    </div>
  );
};

export default Teachers;
