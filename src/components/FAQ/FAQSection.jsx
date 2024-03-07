import React, { useState } from 'react';
import { faqData } from "../../staticData/faqData";
import FAQItem from './FAQItem';

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    let faqDivide = Math.ceil(faqData.length/2);
    let firstHalfFaq = faqData.slice(0, faqDivide);
    let secondHalfFaq = faqData.slice(faqDivide, faqData.length);

    return (
        <div className="flex flex-col md:flex-row px-3 md:justify-between items-center md:items-start md:gap-8 mt-10 w-full max-w-7xl mx-auto">
            <div className="w-full md:w-[50%] flex-1">
                {firstHalfFaq.map((faq, index) => (
                    <FAQItem
                        key={index}
                        faq={faq}
                        index={index}
                        toggleAccordion={toggleAccordion}
                        activeIndex={activeIndex}
                    />
                ))}
            </div>
            <div className="w-full md:w-[50%] flex-1">
                {secondHalfFaq.map((faq, index) => (
                    <FAQItem
                        key={index + faqDivide}
                        faq={faq}
                        index={index + faqDivide}
                        toggleAccordion={toggleAccordion}
                        activeIndex={activeIndex}
                    />
                ))}
            </div>
        </div>
    )
}

export default FAQSection;