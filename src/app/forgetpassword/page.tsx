"use client";
import React, { useContext, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { MyContext } from "../context/Context";

const ForgetPassword = () => {
  const { serverUrl } = useContext(MyContext);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await axios.post(`${serverUrl}/users/forgetPassword`, {
      email,
    });
    console.log(response);

    // Add your password reset logic here
    // For demonstration, we just set a success message
  };

  return (
    <div className='max-w-screen-lg mx-auto px-4 py-8 '>
      <div className='max-w-md bg-white p-8 rounded-lg shadow-md mx-auto my-24'>
        <h2 className='text-2xl font-semibold text-center mb-6'>
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor='email'>Email Address</label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:custom-green focus:custom-green focus:z-10 sm:text-sm my-4'
            />
          </div>
          <button
            type='submit'
            className=' w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-custom-green hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 my-auto '
          >
            Send Reset Link
          </button>
        </form>
        {message && <div className='mt-4 text-green-600'>{message}</div>}
      </div>
    </div>
  );
};

export default ForgetPassword;
