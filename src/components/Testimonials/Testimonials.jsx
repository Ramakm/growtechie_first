import React, { useState } from 'react';

const Testimonial = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedTestimonial(null); // Reset selected testimonial when changing the page
  };

  const handleTestimonialClick = (index) => {
    setSelectedTestimonial(index);
  };

  const testimonialsPerPage = 3;
  const startIndex = currentPage * testimonialsPerPage;
  const endIndex = startIndex + testimonialsPerPage;

  const reviews = [
    {
      id: 1,
      name: ' Madhura Bijawe ',
      job: ' Aspriring Data Analyst',
      image: '/assets/picture/Madhura.jpg',
      text: "I took course like PowerBI first when i liked the course i asked for courses like SQL and Python. I am really satisfied as they never asked me money from their side. Always you can negotiate with them. Growtechie don't do false promises. They never told me that they will land me in job instead they told me that they will help in every way possible to land me in a job. Prices are really less compared to market. Thanks for the learning experience."
    },
    {
      id: 2,
      name: ' Nikita Bhole',
      job: ' CSE Student',
      image: '/assets/picture/Nikita.jpg',
      text: "I discovered Growtechie through LinkedIn, initially hesitating due to the absence of a website. However, after taking a demo class with Ramakrushna, I was thoroughly impressed. Despite occasional scolding during classes, he emerged as an excellent teacher and motivator. The platform stood true to its commitment, offering affordable courses without false promises. It became the ideal learning space for me."
    },
    {
      id: 3,
      name: 'Amit Kapoor',
      job: ' MBA Student',
      image: '/assets/picture/Amit.jpg',
      text: "GrowTechie's Python training exceeded expectations with a practical, project-oriented approach. Expert instructors made complex concepts engaging. Hands-on learning through real-world projects boosted confidence. Comprehensive curriculum covered basics and advanced topics. Highly recommend!"
    },
    {
      id: 4,
      name: 'Puja Samal',
      job: 'Working in CGI',
      image: '/assets/picture/Puja.jpg',
      text: "Highly recommend GrowTechie's SQL and Power BI training! Exceeded expectations with a focus on real-world applications and project-based learning. Solid foundation in SQL for data manipulation, and standout Power BI section for expert guidance in creating actionable dashboards. Well-crafted for today's data-centric environment."
    },
    {
      id: 5,
      name: 'Rohit Kallakuri ',
      job: 'Aspiring Data Scientist',
      image: '/assets/picture/Rohit.png',
      text: "Highly recommend GrowTechie's Data Analyst course! Live classes with knowledgeable instructors created an interactive environment. Emphasis on projects for practical application, personalized attention, and support made the learning journey enjoyable and productive. Kudos to Mr. Ramakrushna and the team!"
    },
  
  
  ];

  const visibleReviews = reviews.slice(startIndex, endIndex);

  return (
    <div
      id="testimonials"
      className="flex flex-col w-[100vw] overflow-hidden min-h-[100vh] justify-center items-center"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-blue-400 h-[4px] w-1/5 mx-auto mt-1"></div>

        <Testimonials
          reviews={visibleReviews}
          currentPage={currentPage}
          totalPages={Math.ceil(reviews.length / testimonialsPerPage)}
          onPageChange={handlePageChange}
          onTestimonialClick={handleTestimonialClick}
          selectedTestimonial={selectedTestimonial}
        />
      </div>
    </div>
  );
};

const Testimonials = (props) => {
  const { reviews, currentPage, totalPages, onPageChange, onTestimonialClick, selectedTestimonial } = props;

  return (
    <div className="overflow-x-scroll overflow-y-hidden no-scrollbar">
      <div className="flex mx-auto gap-8 mt-20 mb-10">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`${
              index === selectedTestimonial
                ? 'bg-white p-8 pt-0 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105'
                : 'bg-white/20 p-8 pt-0 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105'
            } max-w-[400px] cursor-pointer`}
            onClick={() => {
              onTestimonialClick(index);
              onPageChange(Math.floor(index / 3)); // Change the page based on the clicked testimonial
            }}
          >
            <img
              src={review.image}
              alt="reviewer"
              className="-mt-10 h-20 w-20 border-gray-400 border-2 border-solid rounded-full block mx-auto"
            />
            <h4 className="uppercase text-xl font-bold mt-auto text-blue-400 inline-block">{review.name}</h4>{" "}
            <span className="text-sm block">{review.job}</span>
            <p className="text-sm leading-7 my-3 font-light opacity-80">{review.text}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-5">
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index}
            onClick={() => onPageChange(index)}
            className={`h-4 w-4 mx-2 rounded-full cursor-pointer ${
              index === currentPage ? 'bg-blue-400' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
