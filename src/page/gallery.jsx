/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import CourseHeader from '../components/course/courseHeader';

const Gallery = () => {
  return (
    <>
      <CourseHeader />
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12"></div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <div className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <img
                src="/assets/picture/Certificate.png"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Certificate
              </span>
            </div>

            <div className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <img
                src="/assets/picture/Gallery/png1.png"
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Book
              </span>
            </div>

            <div className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <img
                src="/assets/picture/Gallery/png2.png"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Chat-GPT
              </span>
            </div>

            <div className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <video width="750" height="500" autoPlay loop muted>
                <source
                  src="/assets/picture/Gallery/vid1.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
