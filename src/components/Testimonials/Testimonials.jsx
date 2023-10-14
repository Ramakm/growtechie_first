import React, { useState } from 'react';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
const reviews = [
  {
    id: 1,
    name: 'Amit Kapoor',
    job: 'Student',
    image:
      'https://media.licdn.com/dms/image/C5603AQEoKRpYaTgiTg/profile-displayphoto-shrink_400_400/0/1584691290769?e=1701907200&v=beta&t=skLxkWLh4A8XE8VNPG2SPFRGh7amXiabZn5OPB17IT4',
    text: 'I recently enrolled in a Python training program through GrowTechie, and it exceeded my expectations in every way. The course was exceptionally well-structured, emphasizing a project-oriented approach that allowed me to apply what I learned in a practical manner.The instructors were not only experts in Python but also exceptional educators, makin complex concepts accessible and engaging. What truly sets this training apart is its commitment to hands-on learning, providing real-world projects that sharpened my skills and boosted my confidence. The comprehensive curriculum covered not just Python basics but also advanced topics, ensuring a well-rounded understanding.',
  },
  {
    id: 2,
    name: 'Puja Samal',
    job: 'Data Scientist',
    image:
      'https://media.licdn.com/dms/image/D4D03AQFAqlaD1zMvng/profile-displayphoto-shrink_400_400/0/1689170840039?e=1701907200&v=beta&t=acU9x9WPSmV053HZP4TMYbNLNhx8dtcxXY11zKbIcu8',
    text: "I successfully completed the SQL and Power BI training provided by GrowTechie, and I am thrilled to share that it exceeded all my expectations. This course is exceptionally well-crafted, placing a significant emphasis on real-world applicability by concentrating on projects and skills centered around creating data-driven dashboards, which are incredibly pertinent in today's data-centric environment. The SQL modules provided me with a solid foundation, empowering me with the proficiency to efficiently retrieve, manipulate, and analyze data. However, the true standout was the Power BI section, where I was expertly guided in crafting engaging and interactive dashboards that can effortlessly convert raw data into actionable insights.",
  },
  {
    id: 3,
    name: 'Rohit Kallakuri ',
    job: 'Aspiring Data Scientist',
    image:
      '/assets/picture/Rohit.png',
    text: "I recently completed a Data Analyst course on GrowTechie's platform, and I must say it was a fantastic experience. All the classes were conducted live, fostering a highly interactive environment. The instructors, including Mr. Ramakrushna, the founder of GrowTechie, were not only knowledgeable but also incredibly friendly and approachable. The course's practical orientation, with a strong emphasis on projects, allowed me to apply what I learned effectively. I truly appreciated the personalized attention and support, making my learning journey both enjoyable and productive. Highly recommended!",
  },

];

const Testimonial = () => {
  return (
    <div
      id="testimonials"
      className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200"
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
  let reviews = props.reviews;

  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  // function surpriseHandler() {
  //     let randomIndex = Math.floor(Math.random() * reviews.length);
  //     setIndex(randomIndex);
  // }
  return (
    <div className="w-full md:w-[90vw] xl:w-[1200px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      <Card review={reviews[index]} />

      <div className="flex text-3xl mt-5 gap-3 text-blue-400 font-bold mx-auto">
        <button
          onClick={leftShiftHandler}
          className="cursor-pointer hover:text-blue-500"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={rightShiftHandler}
          className="cursor-pointer hover:text-blue-500"
        >
          <FiChevronRight />
        </button>
      </div>
      {/* <div className="mt-6">
      <button
        onClick={surpriseHandler}
        className="bg-blue-400 hover:bg-blue-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
      >
        Surprise Me
      </button>
    </div> */}
    </div>
  );
};

const Card = (props) => {
  let review = props.review;

  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-7rem] z-10 mx-auto">
        <img
          className="aspect-square rounded-full w-[140px] h-[140px] z-20"
          src={review.image}
        />
        <div
          className="w-[140px] h-[140px] bg-blue-500 rounded-full 
          absolute top-[-6px] z-[-1] left-[10px]"
        ></div>
      </div>

      <div className="text-center mt-7">
        <p className="font-bold text-2xl tracking-wider capitalize">
          {review.name}
        </p>
        <p className="text-blue-400 uppercase text-sm">{review.job}</p>
      </div>

      <div className="text-blue-500 mx-auto mt-5">
        <FaQuoteLeft />
      </div>

      <div className="text-center mt-4 text-slate-500">{review.text}</div>

      <div className="text-blue-500 mx-auto mt-5">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default Testimonial;
