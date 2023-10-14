import React from 'react';

const AboutUs = () => {
  return (
    <div id="about-us" className="flex items-center justify-center w-full px-8 py-10 border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex-col items-center">
          <div className="flex flex-col items-center justify-center w-full max-w-2xl pr-8 mx-auto text-center">
            <h2 className="text-3xl font-bold leading-8 text-gray-900 mb-6 sm:text-4xl sm:leading-none md:text-5xl lg:text-4xl xl:text-5xl">
              About Us
            </h2>
          </div>
          <div className="w-full max-w-screen-xl p-4 bg-white bg-opacity-100 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105" style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}>
            <div className="mb-6 text-center">
              <img
                src="https://avatars.githubusercontent.com/u/8182816?v=4"
                alt="Person"
                className="w-40 h-40
                 mx-auto object-cover rounded-full border-4 border-white hover:shadow-xl transition-transform transform hover:scale-105 "
              />
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-black mb-2">
                Ramakrushna Mohapatra
              </h2>
              <p className="text-sm font-medium text-gray-800">
                Founder
              </p>
            </div>
            <div className="flex justify-center mt-6 space-x-4">
              <a
                href="https://twitter.com/codewith_ram"
                className="text-gray-600 hover:text-deep-purple-accent-400 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  fill="currentColor"
                  className="w-6 h-6 transition-transform transform hover:scale-110"
                >
                  <path d="M50.0625 10.4375 C48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" />
                </svg>
              </a>
              <a
                href="https://github.com/Ramakm"
                className="text-gray-600 hover:text-deep-purple-accent-400 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-6 h-6 transition-transform transform hover:scale-110"
                >
                  <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ramakrushnamohapatra"
                className="text-gray-600 hover:text-deep-purple-accent-400 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-6 h-6 transition-transform transform hover:scale-110"
                >
                  <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z" />
                </svg>
              </a>
            </div>
            <div className="mt-6 text-center text-gray-200">
              <blockquote className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease">
                <div className="flex flex-col pr-8">
                  <div className="relative pl-12">
                    <svg
                      className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 125"
                    >
                      <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                    </svg>
                    <p className="mt-2 text-base text-gray-600">
                      <blockquote className="text-lg italic font-semibold ">
                        At Growtechie, we are on a mission to transform the tech education landscape. We believe in learning that goes beyond mere certifications. Our online platform is dedicated to empowering students with the knowledge and skills needed to thrive in the dynamic world of technology. Our courses are thoughtfully designed to combine theory with practical application, offering only live sessions that enable learners to not only acquire knowledge but also apply it in real-world scenarios. We are committed to fostering a culture of continuous learning, where students can grow their tech expertise, unleash their creativity, and build a successful career. Join us on this exciting journey of discovery and innovation in the tech field
                      </blockquote>
                    </p>
                    <svg
                      className="absolute right-0 w-10 h-10 text-indigo-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 125"
                      transform="rotate(180 -10 -10 )"
                    >
                      <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                    </svg>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
