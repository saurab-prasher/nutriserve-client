"use client";
import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/Context";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";

const UserInfo = () => {
  const { loggedInUser, serverUrl } = useContext(MyContext);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    firstname: loggedInUser?.firstname || "",
    lastname: loggedInUser?.lastname || "",
    email: loggedInUser?.email || "",
    gender: loggedInUser?.gender || "",
    birthday: {
      month: loggedInUser?.birthday?.month || "",
      day: loggedInUser?.birthday?.day || "",
      year: loggedInUser?.birthday?.year || "",
    },
  });
  useEffect(() => {
    if (loggedInUser) {
      setFormData({
        firstname: loggedInUser.firstname || "",
        lastname: loggedInUser.lastname || "",
        email: loggedInUser.email || "",
        gender: loggedInUser.gender || "",
        birthday: {
          month: loggedInUser.birthday?.month || "",
          day: loggedInUser.birthday?.day || "",
          year: loggedInUser.birthday?.year || "",
        },
      });
    }
  }, [loggedInUser]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    if (id === "month" || id === "day" || id === "year") {
      setFormData((prevState) => ({
        ...prevState,
        birthday: {
          ...prevState.birthday,
          [id]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formData);
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `${serverUrl}/users/updateUserInfo`,
        formData,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("User information updated:", response.data);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user information:", error);
    }
  };

  return (
    <div className='max-w-screen-lg mx-auto px-12 pr-36 mt-8 mb-16'>
      <div className='flex justify-between items-center mb-8'>
        <h3 className='text-4xl text-center font-light tracking-wide '>
          Your Profile
        </h3>
        <button>
          <FaRegEdit
            className='hover:text-custom-green cursor-pointer'
            size={28}
            onClick={handleEditClick}
          />
        </button>
      </div>

      <form onSubmit={handleSubmit} className='user-info flex flex-col gap-8'>
        <div className='grid grid-flow-col gap-12'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='firstname'>firstname</label>

            <input
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:custom-green focus:custom-green focus:z-10 sm:text-sm'
              type='text'
              value={formData.firstname}
              id='firstname'
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='lastname'>lastname</label>
            <input
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:custom-green focus:custom-green focus:z-10 sm:text-sm'
              type='text'
              value={formData.lastname}
              id='lastname'
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='email'>email</label>
          <input
            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:custom-green focus:custom-green focus:z-10 sm:text-sm'
            type='text'
            id='email'
            onChange={handleChange}
            value={formData.email}
            disabled={!isEditing}
          />
        </div>

        <div className='flex gap-16 items-center '>
          <div className='flex gap-2 items-center'>
            <label htmlFor='gender'>gender</label>
            <input
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:custom-green focus:custom-green focus:z-10 sm:text-sm'
              type='text'
              id='gender'
              value={formData.gender}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>

          <div className='flex items-center gap-2'>
            <label htmlFor='birthday'>Birthday</label>
            <input
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:custom-green focus:custom-green focus:z-10 sm:text-sm'
              type='text'
              id='month'
              placeholder='month'
              onChange={handleChange}
              value={formData.birthday.month}
              disabled={!isEditing}
            />
            <input
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:custom-green focus:custom-green focus:z-10 sm:text-sm'
              type='text'
              id='day'
              placeholder='day'
              value={formData.birthday.day}
              onChange={handleChange}
              disabled={!isEditing}
            />
            <input
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:custom-green focus:custom-green focus:z-10 sm:text-sm'
              type='text'
              id='year'
              placeholder='year'
              value={formData.birthday.year}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        {isEditing && (
          <button
            className='w-full mt-8 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-custom-green hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 my-auto'
            type='submit'
          >
            Save Information
          </button>
        )}
      </form>
    </div>
  );
};

export default UserInfo;
