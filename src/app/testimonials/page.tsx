"use client";
import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isAddingTestimonial, setIsAddingTestimonial] = useState(false);

  useEffect(() => {
    async function fetchTestimonials() {
      const response = await fetch("http://localhost:5000/api/testimonial");
      const data = await response.json();
      console.log("data received", data);
      setTestimonials(data);
    }
    fetchTestimonials();
  }, []);

  const handleAddTestimonial = () => {
    setIsAddingTestimonial(true);
    // Logic for adding a testimonial goes here
    // You can toggle a modal or navigate to a new page for adding a testimonial
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Customer Testimonials
      </h1>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        style={{ padding: "5rem" }}
      >
        {testimonials?.map((testimonial, index) => {
          return (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-4">
              <p className="text-lg font-bold mb-2">
                Author: {testimonial.author}
              </p>
              <p className="text-gray-700 mb-2">
                Review: {testimonial.content}
              </p>
              <div className="flex items-center mb-4">
                <p className="text-gray-700 mr-2">Rating:</p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <svg
                      key={value}
                      className={`w-6 h-6 ${
                        value <= testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-400"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
        {!isAddingTestimonial && (
          <div
            className="bg-orange-500 shadow-md rounded-lg p-6 mb-4 cursor-pointer text-white font-bold text-center"
            style={{ width: "10rem", height: "7rem" }}
            onClick={handleAddTestimonial}
          >
            <p>Write a Testimonial</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
