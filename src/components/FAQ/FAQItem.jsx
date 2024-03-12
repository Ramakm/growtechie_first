const FAQItem = ({ faq, toggleAccordion, index, activeIndex }) => {
    return (
        <div
            className="px-4 py-4 select-none lg:px-6 lg:py-6 mb-4 mx-auto border border-gray-200 rounded-lg shadow"
        >
            <div
                onClick={() => toggleAccordion(index)}
                className="flex justify-between cursor-pointer"
            >
                <h3 className="text-base lg:text-2xl font-bold text-purple-500">
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
                <p className="mt-2 text-sm lg:text-base text-[var(--secondary-text)]">
                    {faq.answer}
                </p>
            )}
        </div>
    )
}

export default FAQItem