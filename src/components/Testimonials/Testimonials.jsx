import "./testimonials.css";
import React from "react";

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: " Madhura Bijawe ",
      job: " Aspriring Data Analyst",
      image: "/assets/picture/Madhura.jpg",
      text: "I took a PowerBI course and then expanded my learning to SQL and Python with Growtechie. I appreciated that Growtechie didn't ask for money, allowed negotiation, and didn't make false promises about job placement. I found the prices reasonable. Thanks for the learning experience.",
    },
    {
      id: 2,
      name: " Nikita Bhole",
      job: " CSE Student",
      image: "/assets/picture/Nikita.jpg",
      text: "Initially hesitant due to the absence of a website, I found Growtechie on LinkedIn. Impressed by a demo class with Ramakrushna, despite occasional scolding, I appreciated his teaching style. Growtechie's commitment to affordable courses without false promises made it my ideal learning space.",
    },
    {
      id: 3,
      name: "Amit Kapoor",
      job: " MBA Student",
      image: "/assets/picture/Amit.jpg",
      text: "GrowTechie's Python training exceeded expectations with a practical, project-oriented approach. Expert instructors made complex concepts engaging. Hands-on learning through real-world projects boosted confidence. Comprehensive curriculum covered basics and advanced topics. Highly recommend!",
    },
    {
      id: 4,
      name: "Puja Samal",
      job: "Working in CGI",
      image: "/assets/picture/Puja.jpg",
      text: "Highly recommend GrowTechie's SQL and Power BI training! Exceeded expectations with a focus on real-world applications and project-based learning. Solid foundation in SQL for data manipulation, and standout Power BI section for expert guidance in creating actionable dashboards. Well-crafted for today's data-centric environment.",
    },
    {
      id: 5,
      name: "Rohit Kallakuri ",
      job: "Aspiring Data Scientist",
      image: "/assets/picture/Rohit.png",
      text: "Highly recommend GrowTechie's Data Analyst course! Live classes with knowledgeable instructors created an interactive environment. Emphasis on projects for practical application, personalized attention, and support made the learning journey enjoyable and productive. Kudos to Mr. Ramakrushna and the team!",
    },
  ];

  return (
    <div className="flex flex-col w-[100vw] mt-20 overflow-hidden min-h-[100vh]">
      <div id="testimonials" className="text-center">
        <h1 className="text-6xl mt-2 font-semibold capitalize text-white">
          Student Testimonies
        </h1>
        <div className="bg-blue-400 h-[4px] w-2/5 mx-auto mt-2"></div>

        <div>
          <div className="testimonials my-24 whitespace-nowrap relative flex gap-8">
            <TestimonialSlides reviews={reviews} />
            <TestimonialSlides reviews={reviews} />
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialSlides = ({ reviews }) => (
  <div className="testimonials-slide flex gap-8">
    {reviews.map((review) => (
      <div
        key={review.id}
        className="testimonial-card relative p-8 pt-0 cursor-default rounded-md transition-transform duration-300 transform hover:scale-105 max-w-[400px] w-[30vw]"
      >
        <img
          src={review.image}
          alt="reviewer"
          className="-mt-10 h-20 w-20 border-gray-400 border-2 border-solid rounded-full block mx-auto"
        />
        <h4 className="uppercase text-xl font-bold mt-auto text-blue-400 inline-block">
          {review.name}
        </h4>{" "}
        <span className="text-sm block text-[var(--dark-gray)]">
          {review.job}
        </span>
        <p className="text-sm leading-7 whitespace-normal my-3 font-light opacity-80 text-[var(--primary-text)]">
          {review.text}
        </p>
      </div>
    ))}
  </div>
);

export default Testimonial;
