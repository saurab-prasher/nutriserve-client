"use client";
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically handle the form submission,
    // like sending the data to an API or email service.
    console.log(formData); // For demonstration purposes
    alert("Thank you for contacting us!");
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
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
