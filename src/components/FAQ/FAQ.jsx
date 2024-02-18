import FAQSection from './FAQSection';

const FAQ = () => {
  return (
    <section className="relative py-16 border-t border-gray-200 min-w-screen animation-fade animation-delay">
      <div id="faq" className="container px-0 mx-auto sm:px-5">
        <p className="mx-6 text-xs font-bold text-left text-pink-500 uppercase sm:text-center sm:text-normal sm:font-bold">
          Have a Question? We Have Answers.
        </p>
        <h3 className="mx-6 mt-1 text-2xl font-bold text-left text-gradient sm:text-3xl md:text-5xl sm:text-center sm:mx-0">
          Frequently Asked Questions
        </h3>
        
        <FAQSection />
      </div>
    </section>
  );
};

export default FAQ;

