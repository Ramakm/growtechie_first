/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { courseImageURL, pythonCourse } from '../../staticData/coursedata';

import CourseHeader from '../../components/course/courseHeader';
import CourseFooter from '../../components/course/coursefooter';
import CourseDetail from '../../components/course/coursedetail';
import CourseBenefits from '../../components/course/coursebenefits';
import CourseDescription from '../../components/course/coursedescription';
import CourseRequriement from '../../components/course/courserequirements';
import CourseHero from '../../components/course/coursehero';
import CourseheroMobile from '../../components/course/courseheromobile';
import ScrollTop from '../../hooks/scrollTop';

const PythonProgramming = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const imageurl = courseImageURL['Python Programming'];

  const requirement = [
    'A computer with internet access',
    'Basic understanding of programming concepts (not mandatory)',
  ];
  ScrollTop();

  const courseName = "python-programming";
  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <CourseHeader />

      <CourseHero
        title={'Python Programming'}
        subtitle={'Beginner to Master'}
        imagelink={imageurl}
        courseName={courseName}
      ></CourseHero>

      {/* Registration Section (Mobile) */}
      <CourseheroMobile
        imageurl={imageurl}
        courseName={courseName}
      ></CourseheroMobile>
      {/* Course Details */}
      <CourseDetail
        details={`Welcome to the Python course online for beginners, designed to help
            you kickstart your programming journey. This comprehensive Python
            course offers essential topics like basic Python fundamentals, data
            structures, object-oriented programming, and more. You'll gain the
            knowledge and confidence to start working on live projects, which
            will be discussed during this course.`}
      ></CourseDetail>

      {/* What you will learn */}
      <CourseBenefits></CourseBenefits>

      {/* Course Syllabus */}
      <section className="px-4 linear-purple-green-gradient py-8 max-w-5xl mx-auto rounded-lg shadow-lg">
      <h2 className="text-4xl text-center text-[var(--primary-text)] font-bold mb-4">Course Syllabus</h2>
        {pythonCourse.map((section, index) => (
          <div key={index} className="mb-6 p-4 rounded-lg hover:shadow-md transition duration-300 select-none radial-shiny-gray-gradient text-[var(--primary-text)]">
            <div
              onClick={() => toggleAccordion(index)}
              className="flex justify-between cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2">
                Module: {index + 1} {section.title}
              </h3>
              <span
                className={`${
                  activeIndex === index ? 'transform rotate-180' : ''
                } transition-transform duration-300`}
              >
                &#x25B6;
              </span>
            </div>
            {activeIndex === index && (
              <ul className="list-disc pl-6 space-y-2">
                {section.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="text-base">
                    {topic}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      {/* Requirements */}
      <CourseRequriement requirement={requirement}></CourseRequriement>

      {/* Description */}
      <CourseDescription
        description={`This Python course is designed for beginners to masters and covers a
        wide range of essential topics, including Python fundamentals, data
        structures, object-oriented programming, and more. You will gain the
        knowledge and confidence to start working on real-world projects as part
        of this comprehensive course.`}
      ></CourseDescription>

      {/* Footer */}
      <CourseFooter />
    </div>
  );
};

export default PythonProgramming;
