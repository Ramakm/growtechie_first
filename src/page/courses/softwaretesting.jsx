import React, { useState } from 'react';

import CourseHeader from '../../components/course/courseHeader';
import CourseFooter from '../../components/course/coursefooter';
import CourseDetail from '../../components/course/coursedetail';
import CourseBenefits from '../../components/course/coursebenefits';
import CourseDescription from '../../components/course/coursedescription';
import CourseRequriement from '../../components/course/courserequirements';
import CourseHero from '../../components/course/coursehero';
import CourseheroMobile from '../../components/course/courseheromobile';
import { courseImageURL, softwareTestingCourse } from '../../coursedata';
import ScrollTop from '../../hooks/scrollTop';
const SoftwareTesting = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  ScrollTop();

  const courseName = "software-testing";
  const imageurl = courseImageURL['Software Testing'];

  const requirement = [
    `No prior knowledge about the field is required`,
    `Basic computer & mobile using skills (you need to be able to use them as an end user)`,
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <CourseHeader />

      <CourseHero
        title={'Software Testing'}
        subtitle={'Master Art of Software Testing'}
        imagelink={imageurl}
        courseName={courseName}
      ></CourseHero>

      <CourseheroMobile
        imageurl={imageurl}
        courseName={courseName}
      ></CourseheroMobile>

      {/* Course Details */}
      <CourseDetail
        details={`Course objective is to provide you with all required knowledge that you need in order to land your first software testing job whether it is a full-time or a freelancing job.`}
      ></CourseDetail>

      {/* What you will learn */}
      <CourseBenefits></CourseBenefits>

      {/* Course Syllabus */}
      <section className="px-4 py-8 max-w-5xl mx-auto text-gray-700">
        <h2 className="text-3xl font-semibold mb-4">Course Syllabus</h2>
        {softwareTestingCourse.map((section, index) => (
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
        description={`Everything you need to learn Software Testing, all combined in one resource.`}
      ></CourseDescription>

      {/* Footer */}
      <CourseFooter />
    </div>
  );
};

export default SoftwareTesting;
