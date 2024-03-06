import React from 'react';
import { courseImageURL, sqlCourse } from '../../staticData/coursedata';

import CourseHeader from '../../components/course/courseHeader';
import CourseFooter from '../../components/course/coursefooter';
import CourseDetail from '../../components/course/coursedetail';
import CourseBenefits from '../../components/course/coursebenefits';
import CourseDescription from '../../components/course/coursedescription';
import CourseRequriement from '../../components/course/courserequirements';
import CourseHero from '../../components/course/coursehero';
import CourseheroMobile from '../../components/course/courseheromobile';
import ScrollTop from '../../hooks/scrollTop';

const SQL = () => {
  const requirement = [
    `No prior technical experience is required! All you need a computer!`,
    `A computer with internet connection.`,
    ` Passion and curiosity to learn something new and do hand-on projects live`,
  ];

  const imageurl = courseImageURL.SQL;
  ScrollTop();

  const courseName = "SQL";
  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <CourseHeader />

      <CourseHero
        title={'SQL'}
        subtitle={'Complete SQL'}
        imagelink={imageurl}
        courseName={courseName}
      ></CourseHero>

      <CourseheroMobile
        courseName={courseName}
        imageurl={imageurl}
      ></CourseheroMobile>

      {/* Course Details */}
      <CourseDetail
        details={`Learning SQL is one of the fastest ways to improve your career prospects as it is one of the most in demand tech skills! In this course you'll learn quickly and receive challenges and tests along the way to improve your understanding!`}
      ></CourseDetail>

      {/* What you will learn */}
      <CourseBenefits></CourseBenefits>

      {/* Course Syllabus */}
      <section className="px-4 linear-purple-green-gradient py-8 max-w-5xl mx-auto rounded-lg shadow-lg">
        <h2 className="text-4xl text-center text-[var(--primary-text)] font-bold mb-4">Course Syllabus</h2>
        {sqlCourse.map((title, index) => (
          <div
          key={index}
          className="mb-6 radial-shiny-gray-gradient text-[var(--primary-text)] rounded-lg p-4 hover:shadow-md transition duration-300"
        >
            <h3 className="text-xl font-semibold mb-2">✅ {`${title}`}</h3>
            {/* Add more content here if needed */}
          </div>
        ))}
      </section>

      {/* Requirements */}
      <CourseRequriement requirement={requirement}></CourseRequriement>

      {/* Description */}
      <CourseDescription
        description={`Anyone interested in learning more about SQL, PostgreSQL, or basic data analysis! can this course and learn SQL in depth`}
      ></CourseDescription>

      {/* Footer */}
      <CourseFooter />
    </div>
  );
};

export default SQL;
