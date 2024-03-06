import React from 'react';
import { courseImageURL, pythonProjects } from '../../staticData/coursedata';

import CourseHeader from '../../components/course/courseHeader';
import CourseFooter from '../../components/course/coursefooter';
import CourseDetail from '../../components/course/coursedetail';
import CourseBenefits from '../../components/course/coursebenefits';
import CourseDescription from '../../components/course/coursedescription';
import CourseRequriement from '../../components/course/courserequirements';
import CourseHero from '../../components/course/coursehero';
import CourseheroMobile from '../../components/course/courseheromobile';
import ScrollTop from '../../hooks/scrollTop';
const PythonProject = () => {
  const imageurl = courseImageURL['Python Projects'];

  const requirement = [
    `Python programming and technical knowledge required.`,
    `A computer with internet connection.`,
    `No paid tools are required as the tools required for this course are free.`,
    ` Passion and curiosity to learn something new and do hand-on projects live`,
  ];
  ScrollTop();
  const courseName = "python-projects";
  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <CourseHeader />

      <CourseHero
        title={'Python Project'}
        subtitle={'Make Begineer to Advance Level Projects'}
        imagelink={imageurl}
        courseName={courseName}
      ></CourseHero>

      <CourseheroMobile
        imageurl={imageurl}
        courseName={courseName}
      ></CourseheroMobile>

      {/* Course Details */}
      <CourseDetail
        details={`It’s a 30 days program with 30 projects which we are going to discuss on call from
        scratch. You will be coding along with us during the live session.`}
      ></CourseDetail>

      {/* What you will learn */}
      <CourseBenefits></CourseBenefits>

      {/* Course Syllabus */}
      <section className="px-4 linear-purple-green-gradient py-8 max-w-5xl mx-auto rounded-lg shadow-lg">
        <h2 className="text-4xl text-center text-[var(--primary-text)] font-bold mb-4">Course Syllabus</h2>
        {pythonProjects.map((title, index) => (
          <div
            key={index}
            className="mb-6 radial-shiny-gray-gradient text-[var(--primary-text)] rounded-lg p-4 hover:shadow-md transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">✅ {`Day ${index + 1
              }: ${title}`}</h3>
            {/* Add more content here if needed */}
          </div>
        ))}
      </section>

      {/* Requirements */}
      <CourseRequriement requirement={requirement}></CourseRequriement>

      {/* Description */}
      <CourseDescription
        description={`If you're new to Python and eager to join us, consider taking a beginner's Python course or exploring introductory Python resources to build the necessary foundation. This prior knowledge will enhance your experience and enable you to tackle the 30 projects with confidence..`}
      ></CourseDescription>

      {/* Footer */}
      <CourseFooter />
    </div>
  );
};

export default PythonProject;
