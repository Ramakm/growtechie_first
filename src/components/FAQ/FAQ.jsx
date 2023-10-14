import React, { useState } from 'react';

const faqData = [
  {
    question: 'What Will You Learn?',
    answer:
      'We provide a diverse array of courses and programs, with a primary focus on areas such as Python, SQL, Software Testing, Data Science, and Data Analytics. Our core philosophy centers around imparting practical, real-world skills, prioritizing hands-on learning over theoretical instruction.',
  },
  {
    question: 'Is It Free or Paid?',
    answer:
      'The course is not free; instead, it begins with a demo session. If you find the demo valuable, you can choose to enroll in the full course for a nominal fee, which is significantly lower than what other e-learning platforms charge.',
  },
  {
    question: 'What will you gain?',
    answer:
      'Embark on a journey to gain valuable hands-on experience and receive expert guidance that will empower you to kickstart your career. At our institution, we\'re dedicated to equipping you with all the essential knowledge and skills you need to excel in your chosen field.',
  },
  {
    question: 'Do We Offer Certifications?',
    answer:
      'While we do offer a participation certification to acknowledge your commitment to the course, it\'s important to remember that our motto is \'Knowledge over Certification.\' We strongly encourage you to prioritize knowledge acquisition over simply pursuing a certificate.',
  },
  {
    question: 'Why GrowTechie?',
    answer:
      'We are a close-knit community of tech enthusiasts committed to sharing our knowledge. Our primary focus is on students, not profits. We don\'t impose fixed prices for our courses, and we don\'t expect participants to work on projects independently. Instead, our approach is entirely live, offering real-time assistance and full transparency. Join us on this journey of growth!',
  },
  {
    question: 'Are we available offline?',
    answer:
      'At present, our offerings are exclusively available online. We believe in the effectiveness of online education, especially in light of the lessons from the COVID-19 era. It allows for flexible schedules, reduces the need for travel, and empowers individuals to work and study at their own comfortable pace.',
  },
  {
    question: 'What payment modes are accepted?',
    answer:
      'We accept all kinds of online payment Netbanking, UPIs or Paypal.',
  },
  {
    question: 'What if I miss a live class in Growtechie?',
    answer:
      'We kindly request that you send us an email in advance if you anticipate missing a class, as all our classes will be conducted live online. We will ensure that you receive the recording of the missed session directly to your email.',
  },
  {
    question: 'What if I have more queries?',
    answer:
      'Please contact our course advisor, Mob: +91-7978939845, Email: growtechie.ind@gmail.com.',
  },
];


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="relative py-16 border-t border-gray-200 min-w-screen animation-fade animation-delay">
      <div id="faq" className="container px-0 mx-auto sm:px-5">
        <p className="mx-6 text-xs font-bold text-left text-pink-500 uppercase sm:text-center sm:text-normal sm:font-bold">
          Have a Question? We Have Answers.
        </p>
        <h3 className="mx-6 mt-1 text-xl font-bold text-left text-gray-800 sm:text-3xl md:text-5xl sm:text-center sm:mx-0">
          Frequently Asked Questions
        </h3>

        {faqData.map((faq, index) => (
          <div
            key={index}
            className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 sm:px-8 md:px-12 sm:py-8 sm:rounded-lg sm:shadow md:w-2/3"
          >
            <div
              onClick={() => toggleAccordion(index)}
              className="flex justify-between cursor-pointer"
            >
              <h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">
                {faq.question}
              </h3>
              <span
                className={`${
                  activeIndex === index ? 'transform rotate-180' : ''
                } transition-transform duration-300`}
              >
                &#x25B6;
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

