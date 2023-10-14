/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { CourseLink, courseImageURL, dataAnalystCourse } from '../../coursedata';
import CourseHeader from '../../components/course/courseHeader';
import CourseFooter from '../../components/course/coursefooter';
import CourseDetail from '../../components/course/coursedetail';
import CourseBenefits from '../../components/course/coursebenefits';
import CourseDescription from '../../components/course/coursedescription';
import CourseRequriement from '../../components/course/courserequirements';
import CourseHero from '../../components/course/coursehero';
import CourseheroMobile from '../../components/course/courseheromobile';
import ScrollTop from '../../hooks/scrollTop';
const DataAnalytics = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  ScrollTop();

  const imageurl = courseImageURL['Data Analytics'];

  const requirement = [
    '    No prior experience is required. We will start from the very basics',
  ];

  const formLink = CourseLink['Data Analyst'];

  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <CourseHeader />

      <CourseHero
        title={'Data analyst'}
        subtitle={'Complete Data Analyst Bootcamp'}
        imagelink={imageurl}
        formlink={formLink}
      ></CourseHero>

      {/* Registration Section (Mobile) */}
      <CourseheroMobile imageurl={imageurl} formLink={formLink}></CourseheroMobile>

      {/* Course Details */}
      <CourseDetail
        details={`The course provides the complete preparation you need to become a data analyst
        `}
      ></CourseDetail>

      {/* What you will learn */}
      <CourseBenefits></CourseBenefits>

      {/* Course Syllabus */}
      <section className="px-4 py-8 max-w-5xl mx-auto text-gray-700">
        <h2 className="text-3xl font-semibold mb-4">Course Syllabus</h2>
        {dataAnalystCourse.map((section, index) => (
          <div key={index} className="mb-6">
            <div
              onClick={() => toggleAccordion(index)}
              className="flex justify-between cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
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
        description={`Our goal is to provide you with complete preparation. And this course will turn you into a job-ready data analyst.`}
      ></CourseDescription>

      {/* Footer */}
      <CourseFooter />
    </div>
  );
};

export default DataAnalytics;
