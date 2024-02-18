import React from 'react';

const CourseFooter = () => {
  return (
    <footer className="radial-shiny-gray-gradient text-white py-4">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} GrowTechie. All rights reserved.
      </div>
    </footer>
  );
};

export default CourseFooter;
