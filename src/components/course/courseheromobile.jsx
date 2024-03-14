const CourseheroMobile = ({ imageurl, courseName }) => {

  // Fix the form here
  
  return (
    <div className="bg-white lg:hidden text-center p-4 mt-20">
      <img
        src={imageurl}
        alt="Course Image"
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <a href={`/form?course=${courseName}`}>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 w-full">
          Register
        </button>
      </a>
    </div>
  );
};

export default CourseheroMobile;
