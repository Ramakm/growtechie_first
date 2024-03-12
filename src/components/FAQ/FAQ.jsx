import FAQSection from "./FAQSection";

const FAQ = () => {
  return (
    <section className="reveal relative py-16 border-t border-gray-200 min-w-screen animation-fade animation-delay">
      <div id="faq" className="px-0 mx-auto sm:px-5">
        <p className="mx-6 text-xs md:text-base font-bold text-center text-pink-500 uppercase sm:font-bold">
          Have a Question? We Have Answers.
        </p>
        <h3 className="mx-6 mt-1 text-center text-2xl font-bold text-gradient sm:text-3xl md:text-5xl">
          Frequently Asked Questions
        </h3>

        <FAQSection />
      </div>
    </section>
  );
};

export default FAQ;
