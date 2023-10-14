const CourseRequriement = ({ requirement }) => {
  return (
    <section className="px-4 py-8 max-w-5xl mx-auto text-gray-700">
      <h2 className="text-3xl font-semibold mb-4">Requirements</h2>
      <ul className="list-disc pl-6 space-y-2">
        {requirement.map((e, index) => (
          <li className="text-base">{e}</li>
        ))}
      </ul>
    </section>
  );
};

export default CourseRequriement;
