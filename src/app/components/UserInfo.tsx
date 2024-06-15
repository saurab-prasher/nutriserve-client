"use client";
import React, { useContext } from "react";
import { MyContext } from "../context/Context";

const UserInfo = () => {
  const { loggedInUser } = useContext(MyContext);
  return (
    <div className='max-w-screen-lg mx-auto px-12 pr-36 mt-8 mb-16'>
      <div>
        <h3 className='text-4xl text-center font-light tracking-wide mb-4'>
          Your Profile
        </h3>
      </div>

      <div className='user-info'>
        <div className='grid grid-flow-col gap-12'>
          <div>
            <label htmlFor='firstname'>firstname</label>

            <input
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:custom-green focus:custom-green focus:z-10 sm:text-sm'
              type='text'
              value={loggedInUser?.firstname}
              id='firstname'
            />
          </div>
          <div>
            <label htmlFor='lastname'>lastname</label>
            <input
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:custom-green focus:custom-green focus:z-10 sm:text-sm'
              type='text'
              value={loggedInUser?.lastname}
              id='lastname'
            />
          </div>
        </div>

        <div>
          <label htmlFor='email'>email</label>
          <input
            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:custom-green focus:custom-green focus:z-10 sm:text-sm'
            type='text'
            id='email'
          />
        </div>

        <div>
          <label htmlFor='gender'>gender</label>
          <input
            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:custom-green focus:custom-green focus:z-10 sm:text-sm'
            type='text'
            id='gender'
          />
        </div>

        <div>
          <label htmlFor='birthday'>Birthday</label>
          <input
            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:custom-green focus:custom-green focus:z-10 sm:text-sm'
            type='text'
            id='month'
          />
          <input
            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:custom-green focus:custom-green focus:z-10 sm:text-sm'
            type='text'
            id='day'
          />
          <input
            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:custom-green focus:custom-green focus:z-10 sm:text-sm'
            type='text'
            id='year'
          />
        </div>

        <div>
          <label htmlFor='password'>password</label>
          <input type='text' />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
