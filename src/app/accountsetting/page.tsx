"use client";
import React, { useContext, useState } from "react";
import { FaRegUserCircle, FaRegHeart } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MyContext } from "../context/Context";
import axios from "axios";
import Image from "next/image";
const Page = () => {
  const [image, setImage] = useState<any>("");
  const [previewImg, setPreviewImg] = useState<any>("");

  const { loggedInUser, serverUrl, setLoggedInUser } = useContext(MyContext);

  const handleImageChange = (e: any) => {
    setImage(e.target.files[0]);
    setPreviewImg(URL.createObjectURL(e.target.files[0]));
  };

  const handleUpload = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", image);

    try {
      const response = await axios.post(
        `${serverUrl}/users/editavatar`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // Update the user's avatar image URL in the context
      setLoggedInUser({ ...loggedInUser, avatarImg: response.data.imageUrl });
      console.log("Image uploaded successfully:", response.data);
      setImage("");
      setPreviewImg("");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className='flex '>
      <aside
        id='sidebar '
        className='flex gap-10 flex-col h-full px-24 py-12 mb-24 mx-auto'
      >
        <section id='user-avatar'>
          <div className='relative'>
            <div className='relative rounded-full h-40 w-40 overflow-hidden '>
              <Image
                loading='lazy'
                src={previewImg ? previewImg : loggedInUser?.avatarImg}
                alt='avatar img'
                layout='fill'
                objectFit='cover'
              />
            </div>

            <form
              className='absolute bottom-2 right-2 flex items-center border bg-white w-fit border-custom-green rounded-full p-2 z-50  '
              onSubmit={handleUpload}
            >
              <label
                className='flex items-center cursor-pointer '
                htmlFor='upload-avatar'
              >
                <input
                  type='file'
                  id='upload-avatar'
                  onChange={handleImageChange}
                  className='hidden'
                />
                <MdEdit className='text-2xl  text-custom-green  ' />
              </label>
              {image && (
                <button
                  type='submit'
                  className='absolute top-12  left-2 mx-auto cursor-pointer text-center block w-max text-xs  border m-auto bg-custom-green  text-white border-custom-green rounded-sm my-2 p-2'
                >
                  Upload New Image
                </button>
              )}
            </form>
          </div>
        </section>

        <section className='mt-8' id='user-info '>
          <div className='flex items-center gap-3 '>
            <FaRegUserCircle size={24} />
            <p>User Info</p>
          </div>
        </section>
        <section id='user-dashboard'>
          <div className='flex items-center gap-3'>
            <MdOutlineSpaceDashboard size={24} />
            <p>Dashboard</p>
          </div>
        </section>
        <section id='user-favourites'>
          <div className='flex items-center gap-3'>
            <FaRegHeart size={24} />
            <p>Favourites</p>
          </div>
        </section>
        <section id='user-settings'>
          <div className='flex items-center gap-3'>
            <IoMdSettings size={24} />

            <p>Settings</p>
          </div>
        </section>
      </aside>

      <div className=' flex-1 max-w-screen-lg mx-auto px-4 py-8'>
        <main>
          <div>
            <h3 className='text-2xl font-bold mb-4'>Your Profile</h3>
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
        </main>
      </div>
    </div>
  );
};

export default Page;
