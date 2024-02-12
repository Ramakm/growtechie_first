import './Hero.css';
import {
  heroImgBoy,
  heroImgWoman,
  heroImgLearners
} from "../../assets/hero";
import handleScrollToElement from '../../commonFn';
import { useNavigate } from 'react-router';

const Hero = () => {
  const navigate = useNavigate();

  function handleNavigation(e, elementId) {
    e.preventDefault();
    handleScrollToElement(elementId, navigate);
  }

  return (
    <div id="hero" className="relative pt-24 box-border min-h-screen">
      <div className="min-w-screen relative h-full z-10 text-[var(--primary-text)] text-center">
        <div className="flex justify-around items-center py-5 min-h-[80vh]">
          <div className="flex flex-col gap-[10vh]">

            {/* Left side Images START */}
            <div className="boy-box-shadow linear-purple-green-gradient
            rounded-lg w-52 h-36 relative">
              <img
                src={heroImgBoy}
                alt="A cartoon boy working on laptop"
                className="absolute w-40 bottom-0 -right-4" />
            </div>
            <div className="radial-shiny-gray-gradient rounded-lg px-3 py-2">
              <p className="text-[var(--secondary-text)]">Classes Done</p>
              <p className="text-3xl">932 hrs+</p>
            </div>
          </div>
          {/* Left side Images END */}

          {/* Hero main content START */}
          <div className="flex flex-col gap-7">
            <h1 className="text-[40px] font-bold">
              Elevate Your Tech career.
              <span className="block text-[36px] mt-5 text-[var(--highlighted-text)]">
                Don’t Learn for Certificate</span>
            </h1>
            <p>Prioritize Knowledge Over Certifications.</p>
            <div className="mt-7">
              <button
                onClick={(e) => handleNavigation(e, "courses")}
                className="rounded-full px-7 py-2 bg-white text-black
                font-semibold hover:scale-105 transition-all">
                Start Learning</button>
              <button
                onClick={(e) => handleNavigation(e, "/form")}
                className="rounded-full px-7 py-2 ml-4 border-2 border-solid 
                border-[#7152ED] font-semibold hover:scale-105 transition-all">
                Book a Demo ▷</button>
            </div>
          </div>
          {/* Hero main content END */}

          {/* Right side images START*/}
          <div className="flex flex-col items-center gap-[10vh]">
            <div className="linear-purple-gradient rounded-lg px-8 py-6 flex 
            flex-col items-center gap-3">
              <p className="">Happy Learners</p>
              <img
                src={heroImgLearners}
                alt="GrowTechie happy learners in circular frames"
                className="w-32 -rotate-1"
              />
            </div>
            <div className="woman-box-shadow rounded-lg h-40 w-36 bg-[#01CABD] relative">
              <img src={heroImgWoman}
                alt="A girl working on laptop"
                className="absolute bottom-0 -left-6"
              />
            </div>
          </div>
          {/* Right side images END*/}
        </div>
      </div>
      <HeroBg />
    </div>
  )
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
)