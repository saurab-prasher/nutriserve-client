"use client";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { MdOutlineRemoveRedEye } from "react-icons/md";

import { MyContext } from "../context/Context";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleEmailChange,
    handlePasswordChange,
    handleLoginSubmit,
    email,
    password,
    loginError,
    handleLoginMsg,
  } = useContext(MyContext);

  useEffect(() => {
    const id = setTimeout(() => {
      handleLoginMsg("");
    }, 4000);

    return () => clearTimeout(id);
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='flex justify-center items-center py-24 mb-24'>
      <div className='grid grid-cols-2 gap-12'>
        <Image
          alt='register account image'
          height={400}
          width={400}
          src='https://nutriserve-images.s3.us-east-2.amazonaws.com/signin.webp'
        />

        <div>
          <div className='relative'>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Sign in to your account
            </h2>
            <p className='mt-2 text-center text-sm text-gray-600'>
              Or
              <Link className='font-medium text-custom-green' href='/register'>
                {" "}
                register a new account
              </Link>
            </p>

            <div className='absolute top-110 -bottom-10 z-40  '>
              <p className='text-red-500 text-sm font-medium'>{loginError}</p>
            </div>
          </div>

          <form className='mt-12 ' onSubmit={handleLoginSubmit}>
            <input type='hidden' name='remember' value='true' />
            <div className='rounded-md shadow-sm flex flex-col gap-4'>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  id='email-address'
                  name='email'
                  type='email'
                  value={email}
                  onChange={handleEmailChange}
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:custom-green focus:custom-green focus:z-10 sm:text-sm'
                  placeholder='Email address'
                />
              </div>
              <div className='relative'>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>
                <input
                  id='password'
                  name='password'
                  type={showPassword ? "text" : "password"}
                  onChange={handlePasswordChange}
                  required
                  value={password}
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:custom-green focus:custom-green focus:z-10 sm:text-sm'
                  placeholder='Password'
                />
                <MdOutlineRemoveRedEye
                  onClick={handleShowPassword}
                  className='absolute top-1/4 right-2 cursor-pointer hover:text-custom-green z-50 '
                  size={18}
                />
              </div>
            </div>

            <div className='flex items-center justify-between mt-4'>
              <div className='flex items-center'>
                <input
                  id='remember-me'
                  name='remember-me'
                  type='checkbox'
                  className='h-4 w-4 text-custom-green border-gray-300 rounded'
                />
                <label
                  htmlFor='remember-me'
                  className='ml-2 block text-sm text-gray-900'
                >
                  {" "}
                  Remember me{" "}
                </label>
              </div>

              <div className='text-sm'>
                <Link
                  href='/forgetpassword'
                  className='font-medium text-custom-green'
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type='submit'
                className=' w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-custom-green hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 my-auto mt-24'
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
