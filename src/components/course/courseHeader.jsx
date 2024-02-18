const CourseHeader = () => {
  return (
    <header className="fixed top-0 w-full z-[100]">
      <div className="container flex items-center justify-between max-w-6xl px-8 mx-auto sm:justify-between xl:px-0">
        <a
          href="/"
          className="relative flex items-center h-full font-black leading-none"
        >
          <img
            src="/logo.png"
            alt="GrowTechie logo"
            className="w-auto h-20 invert fill-current"
          />
          <span className="ml-3 text-2xl text-[var(--primary-text)]">GrowTechie</span>
        </a>
        <button
          onClick={() => window.history.back()}
          className="ml-auto linear-purple-green-gradient text-white py-3 px-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
        >
          Go Back
        </button>
      </div>
    </header>
  );
};

export default CourseHeader;