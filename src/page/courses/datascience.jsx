/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { courseImageURL, dataScienceCourse } from '../../coursedata';

import CourseHeader from '../../components/course/courseHeader';
import CourseFooter from '../../components/course/coursefooter';
import CourseDetail from '../../components/course/coursedetail';
import CourseBenefits from '../../components/course/coursebenefits';
import CourseDescription from '../../components/course/coursedescription';
import CourseRequriement from '../../components/course/courserequirements';
import CourseHero from '../../components/course/coursehero';
import CourseheroMobile from '../../components/course/courseheromobile';
import ScrollTop from '../../hooks/scrollTop';
const DataScience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  
  ScrollTop();

  const imageurl = courseImageURL['Data Science'];

  const requirement = [
    'No prior experience is required. We will start from the very basics',
    'Microsoft Excel 2003, 2010, 2013, 2016, or 365 ',
  ];

  const courseName = "data-science";

  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <CourseHeader />

      <CourseHero
        title={'Data Science'}
        subtitle={'Complete Data Science Bootcamp'}
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
        details={`The course provides the entire toolbox you need to become a data scientist Warm up your fingers as you will be eager to apply everything you have learned here to more and more real-life situations`}
      ></CourseDetail>

      {/* What you will learn */}
      <CourseBenefits></CourseBenefits>

      {/* Course Syllabus */}
      <section className="px-4 py-8 max-w-5xl mx-auto text-gray-700">
        <h2 className="text-3xl font-semibold mb-4">Course Syllabus</h2>
        {dataScienceCourse.map((section, index) => (
          <div key={index} className="mb-6">
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
        description={`You should take this course if you want to become a Data Scientist or if you want to learn about the field`}
      ></CourseDescription>

      {/* Footer */}
      <CourseFooter />
    </div>
  );
};

export default DataScience;
