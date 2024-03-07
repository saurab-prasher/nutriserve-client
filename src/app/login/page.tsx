"use client";
import { useContext } from "react";
import Link from "next/link";

import { MyContext } from "../context/Context";
export default function Login() {
  const {
    handleEmailChange,
    handlePasswordChange,
    handleLoginSubmit,
    email,
    password,
  } = useContext(MyContext);

  console.log(handleLoginSubmit);

  return (
    <div className='flex min-h-screen bg-gray-50 justify-center items-center'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Sign in to your account
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            Or{" "}
            <Link
              className='font-medium text-indigo-600 hover:text-indigo-500'
              href='/register'
            >
              register a new account
            </Link>
          </p>
        </div>
        <form className='mt-8 space-y-6' onSubmit={handleLoginSubmit}>
          <input type='hidden' name='remember' value='true' />
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                value={email}
                autoComplete='email'
                onChange={(e) => handleEmailChange(e)}
                required
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
                autoComplete='current-password'
                onChange={(e) => handlePasswordChange(e)}
                required
                value={password}
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Password'
              />
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                id='remember-me'
                name='remember-me'
                type='checkbox'
                className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
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
                href='#'
                className='font-medium text-indigo-600 hover:text-indigo-500'
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-custom-green hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
