import { useState } from "react";

const CourseDetailedSyllabus = ({ syllabus }) =>  {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
      if (activeIndex === index) {
        setActiveIndex(null);
      } else {
        setActiveIndex(index);
      }
    };

    return (
        <section className="px-4 linear-purple-green-gradient py-8 max-w-5xl mx-auto rounded-lg shadow-lg">
        <h2 className="text-4xl text-center text-[var(--primary-text)] font-bold mb-4">
          Course Syllabus
        </h2>
        {syllabus.map((section, index) => (
          <div
            key={index}
            className="mb-6 p-4 rounded-lg hover:shadow-md transition duration-300 select-none radial-shiny-gray-gradient text-[var(--primary-text)]"
          >
            <div
              onClick={() => toggleAccordion(index)}
              className="flex justify-between cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2">
                Module: {index + 1} {section.title}
              </h3>
              <span
                className={`${
                  activeIndex === index ? "transform rotate-180" : ""
                } transition-transform duration-300`}
              >
                &#x25B6;
              </span>
            </div>
            {activeIndex === index && (
              <ul className="list-disc pl-6 space-y-2">
                {section.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="text-base">
                    {topic}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>
    )
}

export default CourseDetailedSyllabus;