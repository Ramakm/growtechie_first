/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { courseImageURL } from '../../coursedata';

import CourseHeader from '../../components/course/courseHeader';
import CourseFooter from '../../components/course/coursefooter';
import CourseDetail from '../../components/course/coursedetail';
import CourseBenefits from '../../components/course/coursebenefits';
import CourseDescription from '../../components/course/coursedescription';
import CourseHero from '../../components/course/coursehero';
import CourseheroMobile from '../../components/course/courseheromobile';
import ScrollTop from '../../hooks/scrollTop';

const CareerinTech = () => {
  ScrollTop();

  const imageurl = courseImageURL['How to start a Career in Tech'];
  const courseName = "tech-career-growth";

  const techCareerDescription = `Are you intrigued by the vast and ever-evolving world of technology but feel overwhelmed by the prospect of diving into a tech career? Look no further! Our 'How to Start a Career in Tech' course is tailored just for you. In this concise yet comprehensive 2-hour program, we demystify the tech industry and provide you with a clear roadmap to embark on your tech journey, regardless of your non-technical background. We understand that the tech landscape can seem intimidating, but we're here to bridge that gap. Our expert instructors will cover essential topics such as understanding the tech ecosystem, exploring different tech roles, and acquiring the necessary skills and knowledge to kickstart your career. You'll also gain insights into the current tech job market and discover the diverse opportunities available for non-tech enthusiasts. Through engaging discussions, real-world examples, and practical tips, you'll leave this course with newfound confidence and a clear action plan to transition into the exciting and rewarding field of tech. Join us and unlock the doors to a world of possibilities in technology!`;

  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <CourseHeader />

      <CourseHero
        title={'How To Start A Career In Tech'}
        subtitle={
          'Launching Your Tech Career: A 2-Week Course for Non-Tech Enthusiasts'
        }
        imagelink={imageurl}
        courseName={courseName}
      ></CourseHero>

      {/* Registration Section (Mobile) */}
      <CourseheroMobile
        imageurl={imageurl}
        courseName={courseName}
      ></CourseheroMobile>

      {/* Course Details */}
      <CourseDetail details={techCareerDescription}></CourseDetail>

      {/* What you will learn */}
      <CourseBenefits></CourseBenefits>

      {/* Description */}
      <CourseDescription
        description={`You should take this course if you want to become a Data Scientist or if you want to learn about the field`}
      ></CourseDescription>

      {/* Footer */}
      <CourseFooter />
    </div>
  );
};

export default CareerinTech;
