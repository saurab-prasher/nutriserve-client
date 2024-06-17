"use client";
import React, { useContext, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { MyContext } from "../context/Context";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ForgetPassword = () => {
  const { serverUrl } = useContext(MyContext);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

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
    <div className='flex justify-center items-center py-24 mb-24'>
      <div className='flex gap-12'>
        <Image
          alt='forget password image'
          height={400}
          width={400}
          src='https://nutriserve-images.s3.us-east-2.amazonaws.com/signin.webp'
        />

        <div className='relative w-72'>
          <div>
            <h2 className='text-center text-3xl font-extrabold text-gray-900'>
              Forgot Password ?
            </h2>

            <p className='mt-8 text-center text-sm text-gray-600'>
              Enter your email to receive a link to reset your NutriServe
              account password.
            </p>

            <div className='absolute top-110 -bottom-10 z-40  '>
              <p className='text-red-500 text-sm font-medium'>{message}</p>
            </div>
          </div>
          <form className='mt-12' onSubmit={handleSubmit}>
            <div className='rounded-md shadow-sm '>
              <div className='mt-8'>
                <label className='sr-only' htmlFor='email'>
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:custom-green focus:custom-green focus:z-10 sm:text-sm my-4'
                  placeholder='Email address'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className=' w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-custom-green hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 my-auto '
              >
                Send Reset Link
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
