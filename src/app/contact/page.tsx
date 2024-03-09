"use client";
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Thank you for contacting us!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      console.error("Failed to submit message:", error.message);
      alert("Failed to submit message. Please try again later.");
    }
  };

  return (
    <div className='min-h-screen p-8'>
      <div className='max-w-xl mx-auto'>
        <h1 className='text-4xl font-bold text-gray-800 mb-8'>Contact Us</h1>
        <form
          onSubmit={handleSubmit}
          className='bg-white p-6 rounded-lg shadow'
        >
          <div className='mb-6'>
            <label
              htmlFor='name'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              value={formData.name}
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='email'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='message'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Message
            </label>
            <textarea
              name='message'
              id='message'
              value={formData.message}
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            ></textarea>
          </div>
          <button
            type='submit'
            className='bg-orange-500 hover:bg-orange-700 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
