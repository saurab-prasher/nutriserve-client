"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { MyContext } from "../context/Context";
import axios from "axios";

const Register = () => {
  const {
    handleRegisterSubmit,
    handleEmailChange,
    handlePasswordChange,
    email,
    password,
    firstName,
    lastName,
    handleFirstNameChange,
    handleLastNameChange,
  } = useContext(MyContext);

  return (
    <div className='flex min-h-screen bg-gray-50 justify-center items-center'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Register a new account
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            Or{" "}
            <Link
              className='font-medium text-indigo-600 hover:text-indigo-500'
              href='/login'
            >
              sign in to your account
            </Link>
          </p>
        </div>
        <form onSubmit={handleRegisterSubmit} className='mt-8 space-y-6'>
          <input type='hidden' name='remember' value='true' />
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <label htmlFor='firstname' className='sr-only'>
                First Name
              </label>
              <input
                id='firstname'
                name='firstname'
                type='text'
                autoComplete='email'
                required
                value={firstName}
                onChange={(e) => handleFirstNameChange(e)}
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
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
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
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
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
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
                autoComplete='new-password'
                required
                value={password}
                onChange={(e) => handlePasswordChange(e)}
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Password'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-custom-green hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
