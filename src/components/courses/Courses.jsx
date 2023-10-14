import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Courses = () => {
  let democourses = [
    {
      title: 'Python Programming',
      description:
        'Learn Basic of python and all the essentials you need to get started with it ',
      tag: 'Programming',
      imageURL:
        'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
      alt: 'python Programming',
      courseLink: '/course/pythonprogramming',
    },
    {
      title: 'Python Projects',
      description:
        'Make begineer to advance level project and get real world prgoramming skills',
      tag: 'Programming',
      imageURL:
        'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80',
      alt: 'python projects',
      courseLink: '/course/pythonproject',
    },
    {
      title: 'SQL',
      description:
        'Structured query language (SQL) is a programming language for storing and processing information in a relational database. ',
      tag: 'Technology',
      imageURL:
        'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-1125-SQL_Server_2022_web_blade_image_RWWaqg:VP1-539x440?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&hei=600&qlt=100&fmt=png-alpha&fit=constrain',
      alt: 'sql',
      courseLink: '/course/sql',
    },
    {
      title: 'Power BI',
      description:
        'Build powerful end-to-end business solutions by connecting Power Automate across Microsoft Power Platform',
      tag: 'Technology',
      imageURL:
        'https://pei.com/wp-content/uploads/2016/08/maxresdefaultreduced.jpg',
      alt: 'Power BI',
      courseLink: '/course/powerbi',
    },
    {
      title: 'Data Science ',
      description:
        'Data science combines math and statistics, specialized programming, advanced analytics, artificial intelligence (AI), and machine learning ',
      tag: 'Technology',
      imageURL:
        'https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg',
      alt: 'Data Science ',
      courseLink: '/course/datascience',
    },
    {
      title: 'Data analytics ',
      description:
        'A data analyst collects, cleans, and interprets data sets to answer a question or solve a problem',
      tag: 'Technology',
      imageURL:
        'https://images.yourstory.com/cs/2/96eabe90392211eb93f18319e8c07a74/DATAANALYTICS-1686234812978.png',
      alt: 'Data analytics ',
      courseLink: '/course/dataanalytics',
    },
    {
      title: 'Software Testing ',
      description:
        'AIct of examining the artifacts and the behavior of the software under test by validation and verification.',
      tag: 'Technology',
      imageURL:
        'https://optimworks.com/wp-content/uploads/2022/06/Software-Testing-1280x720-1.jpg',
      alt: 'Software Testing ',
      courseLink: '/course/softwaretesting',
    },
    {
      title: 'Computer Science Subjects',
      description:
        'Principal areas of study within Computer Science include computer systems and networks, security, database systems, human computer interaction, vision and graphics, programming languages, software engineering and theory of computing',
      tag: 'College Subject',
      imageURL:
        'https://us.123rf.com/450wm/ra2studio/ra2studio2104/ra2studio210405103/168030448-hand-touching-digital-button-modern-technology-concept.jpg?ver=6',
      alt: 'Computer Science subjects ',
      courseLink: '/course/cssubjects',
    },
    {
      title: 'How to start a Career in Tech',
      description:
        'How to Kickstart Your Tech Career – A Step-by-Step Guide to build A career in tech is a career without boundaries.',
      tag: 'Career',
      imageURL:
        'https://resumeperk.com/uploads/2092/images/343961d2512a15982661376304c9372b.jpg',
      alt: 'Computer Science subjects ',
      courseLink: '/course/careerintech',
    },
  ];

  const [courses,] = useState(democourses);
  return (
    <div id="courses" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Explore Our Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg m-4 shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 shadow-courses "
            >
              <Link to={course.courseLink} smooth={true} duration={500}>
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
                    smooth={true}
                    duration={500}
                    className="text-blue-700 hover:underline hover:text-blue-900"
                  >
                    {course.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {course.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-blue-800 bg-blue-100 rounded-full px-3 py-1">
                    {course.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Courses;
