import "./courses.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { courseCategories, demoCourses } from "../../staticData/coursedata";

const Courses = () => {
  const [courses, setCourses] = useState(demoCourses);
  const [selectedCategory, setSelectedCategory] = useState(
    "Analytics & Data Science"
  );

  useEffect(() => {
    setCourses(() =>
      demoCourses.filter((course) => course.category.includes(selectedCategory))
    );
  }, [selectedCategory]);

  return (
    <div className="py-24 pb-12">
      <div id="courses" className="max-w-[1500px] mx-auto px-4">
        <h2
          className="text-5xl lg:text-8xl uppercase font-bold
        text-center text-[var(--primary-text)] mb-8"
        >
          OUR COURSES
        </h2>

        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-10">
          {/* CATEGORIES LIST */}
          <div className="lg:h-[530px] lg:pl-6">
            <h4
              className="text-xl text-[var(--highlighted-text)]
            font-[math] font-semibold mb-4"
            >
              👨‍💻 Upskill Yourself
            </h4>
            <ul className="flex flex-row lg:flex-col flex-wrap lg:flex-nowrap justify-between gap-5 w-full lg:h-full">
              {courseCategories.map((category, idx) => (
                <li
                  key={idx}
                  className={`h-full ${
                    category === selectedCategory
                      ? "text-[var(--active-link)] border-[var(--active-link)]"
                      : "text-[var(--dark-gray)]"
                  } 
                    text-sm md:text-lg border-t-4 lg:border-t-0 lg:border-l-4 hover:text-[var(--active-link)]
                    hover:border-[var(--active-link)]`}
                >
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className="flex justify-between gap-6 items-center
                    text-center lg:text-left lg:ml-3 w-full h-full"
                  >
                    {category}
                    {category == selectedCategory && (
                      <span className="hidden lg:inline-block text-2xl">
                        &#12297;
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COURSE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto">
            {courses.map((course, index) => (
              <div
                key={index}
                className="rounded-lg bg-slate-300 card-shadow m-4
                 overflow-hidden transition-transform
                 duration-300 transform hover:scale-105
                 max-w-96 h-fit"
              >
                <Link to={course.courseLink} smooth="true" duration={500}>
                  <img
                    className="w-full h-64 object-cover clipPath"
                    src={course.imageURL}
                    alt={course.alt}
                  />
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <Link
                      to={course.courseLink}
                      smooth="true"
                      duration={500}
                      className="text-blue-700 hover:underline hover:text-blue-900"
                    >
                      {course.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {course.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span
                      className="text-xs font-semibold text-blue-800
                     bg-blue-100 rounded-full px-3 py-1"
                    >
                      {course.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Courses;
