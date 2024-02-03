import React from 'react';
import {
  computerScienceSubjects,
  courseImageURL,
} from '../../coursedata';

import CourseHeader from '../../components/course/courseHeader';
import CourseFooter from '../../components/course/coursefooter';
import CourseDetail from '../../components/course/coursedetail';
import CourseBenefits from '../../components/course/coursebenefits';
import CourseDescription from '../../components/course/coursedescription';
import CourseRequriement from '../../components/course/courserequirements';
import CourseHero from '../../components/course/coursehero';
import CourseheroMobile from '../../components/course/courseheromobile';
import ScrollTop from '../../hooks/scrollTop';
const CSsubjects = () => {
  const requirement = [
    'A Willingness to Learn New Topics!',

    `A computer with internet connection.`,
    'No Prior Experience or Knowledge is Needed!',
  ];

  ScrollTop();
  const courseName = "CS-GATE-college-subjects";

  const imageurl = courseImageURL['Computer Science Subjects'];

  return (
    <div className="min-h-screen font-sans">
      <CourseHeader />

      <CourseHero
        title={'Computer Science Subjects'}
        subtitle={'Master the Theory Behind Programming'}
        imagelink={imageurl}
        courseName={courseName}
      ></CourseHero>

      <CourseheroMobile
        imageurl={imageurl}
        courseName={courseName}
      ></CourseheroMobile>

      {/* Course Details */}
      <CourseDetail
        details={`Understanding Computer Science theory is what sets apart Great programmers from average ones. Programming theory is something that transcends a single programming language. It gives you skills and techniques you can apply to any programming language you touch. Learning the theory behind programming is just as important, if not more important than learning a singular programming language like Java or C++.

        `}
      ></CourseDetail>

      {/* What you will learn */}
      <CourseBenefits></CourseBenefits>

      {/* Course Syllabus */}
      <section className="px-4 py-8 max-w-5xl mx-auto text-gray-700 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Course Syllabus</h2>
        {computerScienceSubjects.map((title, index) => (
          <div
            key={index}
            className="mb-6 bg-white rounded-lg p-4 hover:shadow-md transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{`${title}`}</h3>
            {/* Add more content here if needed */}
          </div>
        ))}
      </section>

      {/* Requirements */}
      <CourseRequriement requirement={requirement}></CourseRequriement>

      {/* Description */}
      <CourseDescription
        description={`If you're looking to learn the theory that makes great programmers, you've come to the right place! This course is perfect for anyone interested in learning the fundamentals to Computer Science Theory. 

        `}
      ></CourseDescription>

      {/* Footer */}
      <CourseFooter />
    </div>
  );
};

export default CSsubjects;
