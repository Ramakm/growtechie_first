/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import './Hero.css';
import { mainimage } from '../../coursedata';
const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleScrollToElement(e, elementId) {
    e.preventDefault();
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="bg-lightkblue" id="hero">
      <div
        id="home-section"
        className="min-h-screen flex justify-center items-center relative"
      >
        <span
          className={`absolute animate-bounce left-[240px] top-[102px] ${
            windowWidth < 1024 ? 'hidden' : '2xl:inline-block'
          }`}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5046 24.6797L16.8046 32.0063C16.7247 32.2216 16.5808 32.4073 16.3923 32.5384C16.2038 32.6695 15.9796 32.7398 15.75 32.7398C15.5203 32.7398 15.2962 32.6695 15.1076 32.5384C14.9191 32.4073 14.7752 32.2216 14.6953 32.0063L11.9953 24.6797C11.9383 24.5251 11.8484 24.3846 11.7319 24.2681C11.6154 24.1516 11.4749 24.0617 11.3203 24.0047L3.99371 21.3047C3.77841 21.2248 3.59273 21.0809 3.4616 20.8924C3.33048 20.7038 3.26019 20.4797 3.26019 20.25C3.26019 20.0204 3.33048 19.7962 3.4616 19.6077C3.59273 19.4191 3.77841 19.2752 3.99371 19.1953L11.3203 16.4953C11.4749 16.4384 11.6154 16.3485 11.7319 16.232C11.8484 16.1154 11.9383 15.975 11.9953 15.8203L14.6953 8.49377C14.7752 8.27847 14.9191 8.09279 15.1076 7.96166C15.2962 7.83054 15.5203 7.76025 15.75 7.76025C15.9796 7.76025 16.2038 7.83054 16.3923 7.96166C16.5808 8.09279 16.7247 8.27847 16.8046 8.49377L19.5046 15.8203C19.5616 15.975 19.6515 16.1154 19.768 16.232C19.8846 16.3485 20.025 16.4384 20.1796 16.4953L27.5062 19.1953C27.7215 19.2752 27.9072 19.4191 28.0383 19.6077C28.1694 19.7962 28.2397 20.0204 28.2397 20.25C28.2397 20.4797 28.1694 20.7038 28.0383 20.8924C27.9072 21.0809 27.7215 21.2248 27.5062 21.3047L20.1796 24.0047C20.025 24.0617 19.8846 24.1516 19.768 24.2681C19.6515 24.3846 19.5616 24.5251 19.5046 24.6797Z"
              fill="#1A906B"
            />
          </svg>
        </span>
        <span className="absolute animate-pulse left-[752px] top-[160px] hidden 2xl:inline-block">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill="#6D39E9" />
          </svg>
        </span>
        <span className="absolute animate-spin right-[926px] top-[120px] hidden 2xl:inline-block">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.991 29.4259L29.5453 40.3888C29.5087 40.6523 29.3925 40.8983 29.212 41.0937C29.0316 41.2892 28.7957 41.4248 28.5359 41.4822C28.2762 41.5396 28.0051 41.5162 27.7591 41.4151C27.5131 41.3139 27.3039 41.1399 27.1596 40.9164L21.2258 31.5856C21.1226 31.4249 20.9859 31.2886 20.8249 31.1859C20.664 31.0833 20.4827 31.0168 20.2935 30.991L9.33059 29.5453C9.06711 29.5088 8.82111 29.3925 8.62566 29.2121C8.4302 29.0316 8.29465 28.7957 8.2372 28.536C8.17976 28.2762 8.20318 28.0051 8.30432 27.7591C8.40546 27.5131 8.57948 27.3039 8.80298 27.1597L18.1338 21.2258C18.2945 21.1227 18.4308 20.9859 18.5335 20.825C18.6361 20.664 18.7026 20.4827 18.7284 20.2936L20.1741 9.33062C20.2106 9.06714 20.3269 8.82114 20.5073 8.62569C20.6878 8.43023 20.9237 8.29468 21.1834 8.23723C21.4432 8.17979 21.7143 8.20321 21.9603 8.30435C22.2063 8.40549 22.4155 8.5795 22.5597 8.80301L28.4936 18.1339C28.5967 18.2945 28.7335 18.4309 28.8944 18.5335C29.0554 18.6362 29.2367 18.7027 29.4258 18.7284L40.3888 20.1741C40.6523 20.2107 40.8983 20.3269 41.0937 20.5074C41.2892 20.6878 41.4247 20.9237 41.4822 21.1835C41.5396 21.4432 41.5162 21.7143 41.415 21.9603C41.3139 22.2063 41.1399 22.4155 40.9164 22.5598L31.5855 28.4936C31.4249 28.5968 31.2885 28.7335 31.1859 28.8945C31.0832 29.0554 31.0167 29.2367 30.991 29.4259V29.4259Z"
              fill="#FFC27A"
            />
          </svg>
        </span>
        <span className="absolute animate-ping right-[21.35%] top-[24px] hidden 2xl:inline-block">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7.5" cy="7.5" r="7.5" fill="#FFC27A" />
          </svg>
        </span>
        <span className="absolute animate-ping left-[34px] top-[548px] hidden 2xl:inline-block">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5" cy="5" r="5" fill="#ED4459" />
          </svg>
        </span>
        <span className="absolute animate-bounce bottom-[131px] right-[649px] hidden 2xl:inline-block">
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7.5" cy="8.02197" r="7.5" fill="#6D39E9" />
          </svg>
        </span>

        <div
          className={`mx-auto max-w-7xl ${
            windowWidth < 640 ? 'pt-36' : 'pt-20'
          } sm:pb-24 px-6`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
            <div className="col-span-6 flex flex-col justify-evenly">
              <h1 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0">
                Elevate Your Tech Career
              </h1>
              <span className="text-3xl text-blue-500 font-semibold mb-2">
                Prioritize Knowledge Over Certifications.
              </span>
              <h3 className="text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0">
                If you value wisdom above all else, you've come to the right
                place.
              </h3>

              <div className="relative text-white focus-within:text-white input-shadow rounded-full mt-5">
                <a
                  onClick={(e) => handleScrollToElement(e, 'courses')}
                  className="block px-8 py-4 text-base font-bold text-white bg-indigo-600 border-t border-gray-200 rounded-md shadow-xl fold-bold hover:bg-indigo-500 transform hover:scale-105 transition duration-300 text-center"
                >
                  Start Learning Today!
                </a>
              </div>

              <div className="flex items-center justify-between pt-10 lg:pt-4">
                <div className="flex gap-2">
                  <img
                    src="/assets/banner/check-circle.svg"
                    alt="check-image"
                    width={30}
                    height={30}
                    className="smallimg"
                  />
                  <p className="text-sm sm:text-lg font-normal text-black">
                    Flexible
                  </p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="/assets/banner/check-circle.svg"
                    alt="check-image"
                    width={30}
                    height={30}
                    className="smallimg"
                  />
                  <p className="text-sm sm:text-lg font-normal text-black">
                    Learning path
                  </p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="/assets/banner/check-circle.svg"
                    alt="check-image"
                    width={30}
                    height={30}
                    className="smallimg"
                  />
                  <p className="text-sm sm:text-lg font-normal text-black">
                    Community
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`col-span-6 flex justify-center ${
                windowWidth < 1024 ? 'hidden' : 'inline-block'
              }`}
            >
              <img src={mainimage} alt="nothing" width={1200} height={200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
