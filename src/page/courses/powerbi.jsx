import React, { useState } from 'react';

import CourseHeader from '../../components/course/courseHeader';
import CourseFooter from '../../components/course/coursefooter';
import CourseDetail from '../../components/course/coursedetail';
import CourseBenefits from '../../components/course/coursebenefits';
import CourseDescription from '../../components/course/coursedescription';
import CourseRequriement from '../../components/course/courserequirements';
import CourseHero from '../../components/course/coursehero';
import CourseheroMobile from '../../components/course/courseheromobile';
import { courseImageURL, powerBICourse } from '../../coursedata';
import ScrollTop from '../../hooks/scrollTop';
const PowerBI = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  ScrollTop();

  const courseName = "power-BI";

  const requirement = [
    `Absolutely no experience is required. We will start from the basics and gradually build up your knowledge with clear and concise step by step instructions`,
    `A computer with internet connection.`,
    ` Passion and curiosity to learn something new and do hand-on projects live`,
  ];

  const imageurl = courseImageURL['Power BI'];

  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <CourseHeader />

      <CourseHero
        title={'Power BI'}
        subtitle={'Business Intelligence for Beginners to Advance'}
        imagelink={imageurl}
        courseName={courseName}
      ></CourseHero>

      <CourseheroMobile
        courseName={courseName}
      ></CourseheroMobile>

      {/* Course Details */}
      <CourseDetail
        details={`Learn to create stunning Dashboards and Reports using Microsoft's free Business Intelligence / Analytics tool, Power BI.`}
      ></CourseDetail>

      {/* What you will learn */}
      <CourseBenefits></CourseBenefits>

      {/* Course Syllabus */}
      <section className="px-4 linear-purple-green-gradient py-8 max-w-5xl mx-auto rounded-lg shadow-lg">
        <h2 className="text-4xl text-center text-[var(--primary-text)] font-bold mb-4">Course Syllabus</h2>
        {powerBICourse.map((section, index) => (
          <div key={index} className="mb-6 p-4 rounded-lg hover:shadow-md transition duration-300 select-none radial-shiny-gray-gradient text-[var(--primary-text)]">
            <div
              onClick={() => toggleAccordion(index)}
              className="flex justify-between cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
              <span
                className={`${activeIndex === index ? 'transform rotate-180' : ''
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
        description={`Anyone looking to get a job and prepare to start data analytics career.`}
      ></CourseDescription>

      {/* Footer */}
      <CourseFooter />
    </div>
  );
};

export default PowerBI;
