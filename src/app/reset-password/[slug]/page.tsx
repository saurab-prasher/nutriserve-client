"use client";
import React, { useContext, useState } from "react";
import axios from "axios";
import { MyContext } from "@/app/context/Context";
import { useRouter } from "next/navigation";

const ResetPassword = ({ params }) => {
  const { serverUrl } = useContext(MyContext);
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${serverUrl}/users/reset-password/${params?.slug}`,
        {
          password,
        }
      );

      setMessage(response.data.message);
      router.push("/login");
    } catch (error) {
      setMessage("Error resetting password");
    }
  };

  return (
    <div className='max-w-screen-lg mx-auto px-4 py-8 '>
      <div className='max-w-md bg-white p-8 rounded-lg shadow-md mx-auto my-24'>
        <h2 className='text-2xl font-semibold text-center mb-6'>
          Reset Password
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter new password'
            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:custom-green focus:custom-green focus:z-10 sm:text-sm my-4'
          />
          <button
            className=' w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-custom-green hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 my-auto '
            type='submit'
          >
            Reset Password
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
