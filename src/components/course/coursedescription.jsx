const CourseDescription = ({description}) => {
  return (
    <section className="px-4 py-8 max-w-5xl mx-auto text-gray-700">
      <h2 className="text-3xl font-semibold mb-4">Description</h2>
      <p className="text-lg leading-7">
        {description}
      </p>
    </section>
  );
};

export default CourseDescription;