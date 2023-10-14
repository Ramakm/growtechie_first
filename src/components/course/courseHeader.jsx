const CourseHeader = () => {
  return (
    <header className="fixed top-0 w-full bg-white backdrop-blur-md shadow-lg z-50">
      <div className="container flex items-center justify-between max-w-6xl px-8 mx-auto sm:justify-between xl:px-0">
        <a
          href="/"
          className="relative flex items-center inline-block h-5 h-full font-black leading-none"
        >
          <img
            src="/logo.png"
            alt="GrowTechie logo"
            className="w-auto h-20 text-indigo-600 fill-current"
          />
          <span className="ml-3 text-2xl text-gray-800">GrowTechie</span>
        </a>
        <button
          onClick={() => window.history.back()}
          className="ml-auto bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
        >
          Go Back
        </button>
      </div>
    </header>
  );
};

export default CourseHeader;