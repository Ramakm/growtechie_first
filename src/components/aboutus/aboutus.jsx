import React from "react";
import { palakImg, yashodhanImg } from "../../assets";

const AboutUs = () => {
  return (
    <div className="text-[var(--primary-text)] relative mt-10">
      <div>
        <div className="py-5" id="about-us">
          <div className="flex items-center ml-2 md:ml-5">
            <h2 className="text-3xl md:text-7xl shrink-0 mb-7 font-semibold text-[var(--moonstone-blue)] w-fit relative">
              Our Team
              <span className="absolute h-2 w-2/3 bg-[var(--moonstone-blue)] -bottom-3 left-1"></span>
            </h2>
            <span className="h-[2px] mb-4 w-[100%] inline-block bg-[var(--moonstone-blue)]"></span>
          </div>
          <p className="ml-2 md:ml-5 text-sm">
            Join Us on the Digital Learning Journey
          </p>
        </div>
        <div className="md:pt-36 mt-10 md:h-[500px] mb-24">
          <div className="relative px-3 md:bg-[var(--moonstone-blue)] md:h-16 flex flex-wrap md:flex-nowrap justify-center gap-14 lg:gap-36 items-center w-full">
            {/* Yashodhan */}
            <div>
              <TeamImage
                src={yashodhanImg}
                alt="Yashodhan Gandage"
                job="Advisor"
              />
              <Socials
                //  twitter="codewith_ram"
                //  github="Ramakm"
                linkedin="yashodhan-gandage-874b48119"
              />
            </div>

            {/* Ramkrushna */}
            <div className="md:mt-20">
              <TeamImage
                src="https://avatars.githubusercontent.com/u/8182816?v=4"
                alt="Ramakrushna"
                job="Founder"
              />
              <Socials
                twitter="codewith_ram"
                github="Ramakm"
                linkedin="ramakrushnamohapatra"
              />
            </div>

            {/* Palak */}
            <div className="md:mt-8">
              <TeamImage src={palakImg} alt="Palak Aggarwal" job="Designer" />
              <Socials
                twitter="Palakkgoyal"
                github="Palakkgoyal"
                linkedin="Palakkgoyal"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

const TeamImage = ({ src, alt, job }) => (
  <>
    <img
      src={src}
      alt={alt}
      className="w-56 mx-auto object-cover border-4 border-white hover:shadow-xl transition-transform transform hover:scale-105"
    />
    <h3 className="tracking-wider mt-3 text-lg">{alt}</h3>
    <p className="text-sm mb-2">{job}</p>
  </>
);

const Socials = ({ twitter, github, linkedin }) => (
  <div className="flex space-x-4">
    {twitter && (
      <a href={`https://twitter.com/${twitter}`} className="duration-300">
        <TwitterSvg />
      </a>
    )}
    {github && (
      <a href={`https://github.com/${github}`} className="duration-300">
        <GitHubSvg />
      </a>
    )}
    {linkedin && (
      <a
        href={`https://www.linkedin.com/in/${linkedin}`}
        className="duration-300"
      >
        <LinkedInSvg />
      </a>
    )}
  </div>
);

const TwitterSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    fill="currentColor"
    className="w-5 h-5 transition-transform transform hover:scale-110"
  >
    <path d="M50.0625 10.4375 C48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" />
  </svg>
);

const GitHubSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 32 32"
    className="w-5 h-5 transition-transform transform hover:scale-110"
  >
    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
  </svg>
);

const LinkedInSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 32 32"
    className="w-5 h-5 transition-transform transform hover:scale-110"
  >
    <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z" />
  </svg>
);
