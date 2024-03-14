const CourseOutlineSyllabus = ({ syllabus }) => {
  return (
    <section className="px-4 linear-purple-green-gradient py-8 max-w-5xl mx-auto rounded-lg shadow-lg">
      <h2 className="text-4xl text-center text-[var(--primary-text)] font-bold mb-4">
        Course Syllabus
      </h2>
      {syllabus.map((title, index) => (
        <div
          key={index}
          className="mb-6 radial-shiny-gray-gradient text-[var(--primary-text)] rounded-lg p-4 hover:shadow-md transition duration-300"
        >
          <h3 className="text-xl font-semibold mb-2">✅ {`${title}`}</h3>
          {/* Add more content here if needed */}
        </div>
      ))}
    </section>
  );
};

export default CourseOutlineSyllabus;