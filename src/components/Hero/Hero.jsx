import "./Hero.css";
import { useState } from "react";
import { heroImgBoy, heroImgWoman, heroImgLearners } from "../../assets";
import handleScrollToElement from "../../utils/commonFn";
import { useNavigate } from "react-router";
import CourseForm from "../course/CourseForm";

const Hero = () => {
  const navigate = useNavigate();
  const [openForm, setOpenForm] = useState(false);

  function handleNavigation(e, elementId) {
    e.preventDefault();
    handleScrollToElement(elementId, navigate);
  }

  return (
    <div
      id="hero"
      className="relative pt-24 w-screen box-border min-h-screen mx-auto block"
    >
      <div className="relative h-full z-10 text-[var(--primary-text)] text-center">
        <div className="flex justify-around items-center py-5 min-h-[80vh]">
          <LargeScreenLeftSection />

          {/* Hero main content START */}
          <div className="flex flex-col gap-7 px-3">
            <h1 className="text-3xl md:text-[50px] font-bold">
              Elevate Your Tech career.
              <span className="block text-xl md:text-[45px] mt-5 text-[var(--highlighted-text)]">
                Don’t Learn for Certificate
              </span>
            </h1>
            <p className="text-xs md:text-base">
              Prioritize Knowledge Over Certifications.
            </p>
            <div className="mt-7 flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={(e) => handleNavigation(e, "courses")}
                className="rounded-full px-7 py-2 bg-white text-black
                font-semibold hover:scale-105 transition-all"
              >
                Start Learning
              </button>
              <button
                onClick={() => setOpenForm(true)}
                className="rounded-full px-7 py-2 border-2 border-solid 
                border-[#7152ED] font-semibold hover:scale-105 transition-all"
              >
                Book a Demo ▷
              </button>
            </div>
          </div>

          <LargeScreenRightSection />
        </div>
        <CourseForm
          open={openForm}
          handleClose={() => setOpenForm(false)}
          courseName="Demo"
        />
      </div>
      <HeroBg />
    </div>
  );
};

export default Hero;

const HeroBg = () => (
  <div className="wrapper">
    <div className="box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

const LargeScreenLeftSection = () => (
  <div className="hidden lg:flex flex-col gap-[10vh]">
    <div
      className="boy-box-shadow linear-purple-green-gradient
  rounded-lg w-52 h-36 relative"
    >
      <img
        src={heroImgBoy}
        alt="A cartoon boy working on laptop"
        className="absolute w-40 bottom-0 -right-4"
      />
    </div>
    <div className="radial-shiny-gray-gradient rounded-lg px-3 py-2">
      <p className="text-[var(--secondary-text)]">Classes Done</p>
      <p className="text-3xl">932 hrs+</p>
    </div>
  </div>
);

const LargeScreenRightSection = () => (
  <div className="hidden lg:flex flex-col items-center gap-[10vh]">
    <a href="#testimonials">
      <div
        className="linear-purple-gradient rounded-lg px-8 py-6 flex 
    flex-col items-center gap-3"
      >
        <p className="">Happy Learners</p>
        <img
          src={heroImgLearners}
          alt="GrowTechie happy learners in circular frames"
          className="w-32 -rotate-1"
        />
      </div>
    </a>
    <div className="woman-box-shadow rounded-lg h-40 w-36 bg-[#01CABD] relative">
      <img
        src={heroImgWoman}
        alt="A girl working on laptop"
        className="absolute bottom-0 -left-6"
      />
    </div>
  </div>
);
