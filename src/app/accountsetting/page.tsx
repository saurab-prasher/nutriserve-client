"use client";
import React, { useContext, useState } from "react";
import { FaRegUserCircle, FaRegHeart } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MyContext } from "../context/Context";
import axios from "axios";
import Image from "next/image";
const Page = () => {
  const [image, setImage] = useState(null);
  const { loggedInUser, serverUrl, setLoggedInUser } = useContext(MyContext);
  console.log(loggedInUser);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async (e) => {
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
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className='flex '>
      <aside
        id='sidebar '
        className='flex gap-10 flex-col h-full px-24 py-12 mb-24 border'
      >
        <section id='user-avatar'>
          <div className='relative'>
            <div className='relative rounded-full h-40 w-40 overflow-hidden '>
              <Image
                loading='lazy'
                src={loggedInUser?.avatarImg}
                alt='avatar img'
                layout='fill'
                objectFit='cover'
              />
            </div>

            <form
              className='absolute   right-[-5px] bottom-0'
              onSubmit={handleUpload}
            >
              <input
                type='file'
                id='upload-avatar'
                onChange={handleImageChange}
                className='hidden'
              />
              <label htmlFor='upload-avatar' className='cursor-pointer'>
                <MdOutlineAddPhotoAlternate className='text-3xl  text-gray-500 ' />
              </label>
              {image && (
                <button type='submit' className='mt-4  text-white p-2 rounded'>
                  Upload New Image
                </button>
              )}
            </form>
          </div>
        </section>

        <section id='user-info'>
          <div className='flex items-center gap-3'>
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
        </main>
      </div>
    </div>
  );
};

export default Page;
