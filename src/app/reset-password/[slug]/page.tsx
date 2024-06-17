"use client";
import React, { useContext, useState } from "react";
import axios from "axios";
import { MyContext } from "@/app/context/Context";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ResetPassword = ({ params }: any) => {
  const { serverUrl } = useContext(MyContext);
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
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
              Reset Password
            </h2>
          </div>
          <div className='absolute top-110 -bottom-10 z-40'>
            <p className='text-red-500 text-sm font-medium'>{message}</p>
          </div>
          <form className='mt-12' onSubmit={handleSubmit}>
            <div className='rounded-md shadow-sm'>
              <div className='mt-8'>
                <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Enter new password'
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:custom-green focus:custom-green focus:z-10 sm:text-sm my-4'
                />
              </div>
              <div>
                <button
                  className='w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-custom-green hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 my-auto'
                  type='submit'
                >
                  Reset Password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
