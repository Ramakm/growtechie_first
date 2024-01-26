import React from 'react';
const reviews = [
  {
    id: 1,
    name: 'Amit Kapoor',
    job: 'Student',
    image:
      'https://media.licdn.com/dms/image/C5603AQEoKRpYaTgiTg/profile-displayphoto-shrink_400_400/0/1584691290769?e=1701907200&v=beta&t=skLxkWLh4A8XE8VNPG2SPFRGh7amXiabZn5OPB17IT4',
    // text: 'I recently enrolled in a Python training program through GrowTechie, and it exceeded my expectations in every way. The course was exceptionally well-structured, emphasizing a project-oriented approach that allowed me to apply what I learned in a practical manner.The instructors were not only experts in Python but also exceptional educators, makin complex concepts accessible and engaging. What truly sets this training apart is its commitment to hands-on learning, providing real-world projects that sharpened my skills and boosted my confidence. The comprehensive curriculum covered not just Python basics but also advanced topics, ensuring a well-rounded understanding.',
    text: "GrowTechie's Python training exceeded expectations with a practical, project-oriented approach. Expert instructors made complex concepts engaging. Hands-on learning through real-world projects boosted confidence. Comprehensive curriculum covered basics and advanced topics. Highly recommend!"
  },
  {
    id: 2,
    name: 'Puja Samal',
    job: 'Data Scientist',
    image:
      'https://media.licdn.com/dms/image/D4D03AQFAqlaD1zMvng/profile-displayphoto-shrink_400_400/0/1689170840039?e=1701907200&v=beta&t=acU9x9WPSmV053HZP4TMYbNLNhx8dtcxXY11zKbIcu8',
    // text: "I successfully completed the SQL and Power BI training provided by GrowTechie, and I am thrilled to share that it exceeded all my expectations. This course is exceptionally well-crafted, placing a significant emphasis on real-world applicability by concentrating on projects and skills centered around creating data-driven dashboards, which are incredibly pertinent in today's data-centric environment. The SQL modules provided me with a solid foundation, empowering me with the proficiency to efficiently retrieve, manipulate, and analyze data. However, the true standout was the Power BI section, where I was expertly guided in crafting engaging and interactive dashboards that can effortlessly convert raw data into actionable insights.",
    text: "Highly recommend GrowTechie's SQL and Power BI training! Exceeded expectations with a focus on real-world applications and project-based learning. Solid foundation in SQL for data manipulation, and standout Power BI section for expert guidance in creating actionable dashboards. Well-crafted for today's data-centric environment."
  },
  {
    id: 3,
    name: 'Rohit Kallakuri ',
    job: 'Aspiring Data Scientist',
    image:
      '/assets/picture/Rohit.png',
    // text: "I recently completed a Data Analyst course on GrowTechie's platform, and I must say it was a fantastic experience. All the classes were conducted live, fostering a highly interactive environment. The instructors, including Mr. Ramakrushna, the founder of GrowTechie, were not only knowledgeable but also incredibly friendly and approachable. The course's practical orientation, with a strong emphasis on projects, allowed me to apply what I learned effectively. I truly appreciated the personalized attention and support, making my learning journey both enjoyable and productive. Highly recommended!",
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
