import React from 'react';
const reviews = [
  {
    id: 1,
    name: 'Amit Kapoor',
    job: 'Student',
    image: '/assets/picture/Amit.jpg',
    text: "GrowTechie's Python training exceeded expectations with a practical, project-oriented approach. Expert instructors made complex concepts engaging. Hands-on learning through real-world projects boosted confidence. Comprehensive curriculum covered basics and advanced topics. Highly recommend!"
  },
  {
    id: 2,
    name: 'Puja Samal',
    job: 'Data Scientist',
    image: '/assets/picture/Puja.jpg',
    text: "Highly recommend GrowTechie's SQL and Power BI training! Exceeded expectations with a focus on real-world applications and project-based learning. Solid foundation in SQL for data manipulation, and standout Power BI section for expert guidance in creating actionable dashboards. Well-crafted for today's data-centric environment."
  },
  {
    id: 3,
    name: 'Rohit Kallakuri ',
    job: 'Aspiring Data Scientist',
    image: '/assets/picture/Rohit.png',
    text: "Highly recommend GrowTechie's Data Analyst course! Live classes with knowledgeable instructors created an interactive environment. Emphasis on projects for practical application, personalized attention, and support made the learning journey enjoyable and productive. Kudos to Mr. Ramakrushna and the team!"
  },

];

const Testimonial = () => {
  return (
    <div
      id="testimonials"
      className="flex flex-col w-[100vw] overflow-hidden min-h-[100vh] justify-center items-center bg-gray-200"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-blue-400 h-[4px] w-1/5 mx-auto mt-1"></div>


        <Testimonials reviews={reviews} />
      </div>
    </div>
  );
};

const Testimonials = (props) => {
  const { reviews } = props;

  return (
    <div className="overflow-x-scroll overflow-y-hidden no-scrollbar">
      <div className="flex mx-auto gap-8 mt-20 mb-10">
        {reviews.map(review => (
          <div className="bg-white/20 p-8 pt-0 rounded-xl shrink-0 max-w-[400px] shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 cursor-default">
            <img src={review.image} alt="reviewer" className="-mt-10 h-20 w-20 border-gray-400 border-2 border-solid rounded-full block mx-auto" />
            <p className="text-sm leading-7 my-3 font-light opacity-80">{review.text}</p>
            <h4 className="uppercase text-xl font-bold mt-auto text-blue-400 inline-block">{review.name}</h4>
            {" "}
            <span className="text-sm">{review.job}</span>
          </div>
        ))}
      </div>
    </div >
  )
}

export default Testimonial;
