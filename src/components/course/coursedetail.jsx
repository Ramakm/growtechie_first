const CourseDetail = ({details}) => {
  return (
    <section className="px-4 py-8 max-w-5xl mx-auto text-gray-700 relative z-20">
      <div className="lg:flex justify-between items-center">
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-semibold mb-4">Course Details</h2>
          <p className="text-lg leading-7">
            {details}
          </p>
        </div>
      </div>
    </section>
  );
};
export default CourseDetail;