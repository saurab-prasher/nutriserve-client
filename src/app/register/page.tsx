"use client";
import Link from "next/link";
import { useContext, useState } from "react";

import { MyContext } from "../context/Context";

import Image from "next/legacy/image";

const Register = () => {
  const {
    handleRegisterSubmit,
    handleEmailChange,
    email,
    firstName,
    lastName,
    password,
    confirmPassword,
    error,
    handleFirstNameChange,
    handleLastNameChange,
    handlePasswordChange,
    handleConfirmPassword,
    handleAvatarImageChange,
  } = useContext(MyContext);

  return (
    <div className='flex justify-center items-center py-24'>
      <div className=' grid grid-cols-2 gap-12'>
        <Image
          alt='register account image'
          height={400}
          width={400}
          src={"/images/register.webp"}
        />

        <div>
          <div>
            <h2 className='text-center text-3xl font-extrabold text-gray-900'>
              Register a new account
            </h2>
            <p className='mt-2 text-center text-sm text-gray-600'>
              Or{" "}
              <Link className='font-medium text-custom-green' href='/login'>
                sign in to your account
              </Link>
            </p>
          </div>
          <form onSubmit={handleRegisterSubmit}>
            <div className='text-red-400 text-sm text-center font-medium my-4'>
              {error.visible ? error.content : ""}
            </div>
            <input type='hidden' name='remember' value='true' />
            <div className='rounded-md shadow-sm flex flex-col gap-4'>
              <div>
                <label htmlFor='firstname' className='sr-only'>
                  First Name
                </label>
                <input
                  id='firstname'
                  name='firstname'
                  type='text'
                  autoComplete='firstname'
                  required
                  value={firstName}
                  onChange={(e) => handleFirstNameChange(e)}
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:custom-green focus:border-custom-green focus:z-10 sm:text-sm'
                  placeholder='first name'
                />
              </div>
              <div>
                <label htmlFor='email' className='sr-only'>
                  Last Name
                </label>
                <input
                  id='lastname'
                  name='lastname'
                  type='text'
                  autoComplete='lastname'
                  required
                  value={lastName}
                  onChange={(e) => handleLastNameChange(e)}
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-custom-green focus:border-custom-green focus:z-10 sm:text-sm'
                  placeholder='last name'
                />
              </div>
              <div>
                <label htmlFor='email' className='sr-only'>
                  Email address
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  value={email}
                  onChange={(e) => handleEmailChange(e)}
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-custom-green focus:border-custom-green focus:z-10 sm:text-sm'
                  placeholder='Email address'
                />
              </div>
              <div>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='password'
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-custom-green focus:border-custom-green focus:z-10 sm:text-sm'
                  placeholder='Password'
                />
              </div>
              <div>
                <label htmlFor='confirm-password' className='sr-only'>
                  Confirm Password
                </label>
                <input
                  id='confirm-password'
                  name='confirm-password'
                  type='password'
                  autoComplete='confirm-password'
                  required
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-custom-green focus:border-custom-green focus:z-10 sm:text-sm'
                  placeholder='confirm password'
                />
              </div>

              <div>
                <label htmlFor='confirm-password' className='sr-only'>
                  Confirm Password
                </label>
                <input
                  id='upload-avatar'
                  name='upload-avatar'
                  type='file'
                  onChange={handleAvatarImageChange}
                  autoComplete='upload-avatar'
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-custom-green focus:border-custom-green focus:z-10 sm:text-sm'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className=' w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-custom-green hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 my-auto mt-12'
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
