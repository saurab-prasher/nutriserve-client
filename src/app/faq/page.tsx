"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is NutriServe?",
    answer:
      "NutriServe is a comprehensive nutrition and meal planning service designed to help individuals achieve their health and wellness goals. We offer personalized meal plans, nutritional guidance, and support from certified nutritionists to ensure you have all the tools needed for success.",
  },
  {
    question: "How does NutriServe create personalized meal plans?",
    answer:
      "Our personalized meal plans are created based on your unique dietary needs, preferences, and health goals. After signing up, you'll complete a detailed questionnaire about your lifestyle, food likes and dislikes, and any dietary restrictions. Our nutritionists use this information to create a customized meal plan just for you.",
  },
  {
    question: "Can NutriServe accommodate dietary restrictions and allergies?",
    answer:
      "Absolutely! We understand that everyone's dietary needs are different. NutriServe can accommodate a range of dietary restrictions, including gluten-free, vegan, lactose-intolerant, and more.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null); // For accordion functionality

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className='p-5 h-screen bg-gray-100'
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <div className='max-w-md mx-auto'>
        <h2 className='text-2xl font-bold mb-5' style={{ color: "#424242" }}>
          FAQ
        </h2>
        {faqs.map((faq, index) => (
          <div key={index} className='mb-4'>
            <button
              onClick={() => toggleFAQ(index)}
              className={`py-2 px-4 w-full text-left text-lg font-medium rounded-md focus:outline-none transition duration-300 ease-in-out ${
                activeIndex === index
                  ? "bg-orange-400 text-white"
                  : "bg-green-500 text-gray-100"
              }`}
              style={{
                backgroundColor: activeIndex === index ? "#FFA726" : "#4CAF50",
              }}
            >
              {faq.question}
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-700 ease-in-out ${
                activeIndex === index ? "max-h-96" : "max-h-0"
              }`}
              style={{ backgroundColor: "#FFFFFF", color: "#424242" }}
            >
              <div className='p-4'>{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
