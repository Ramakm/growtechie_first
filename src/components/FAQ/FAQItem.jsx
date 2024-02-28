const FAQItem = ({ faq, toggleAccordion, index, activeIndex }) => {
    return (
        <div
            className="px-6 py-6 mb-4 mx-auto border border-gray-200 sm:px-8 md:px-12 sm:py-8 sm:rounded-lg sm:shadow"
        >
            <div
                onClick={() => toggleAccordion(index)}
                className="flex justify-between cursor-pointer"
            >
                <h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">
                    {faq.question}
                </h3>
                <span
                    className={`${activeIndex === index ? 'transform rotate-180' : ''
                        } transition-transform duration-300 text-gradient `}
                >
                    &#x25B6;
                </span>
            </div>
            {activeIndex === index && (
                <p className="mt-2 text-base text-[var(--secondary-text)] sm:text-lg md:text-normal">
                    {faq.answer}
                </p>
            )}
        </div>
    )
}

export default FAQItem