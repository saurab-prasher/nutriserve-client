"use client";
import React, { useContext, useState, useEffect } from "react";
import { FaRegUserCircle, FaRegHeart } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MyContext } from "../context/Context";
import axios from "axios";
import Image from "next/image";
import UserInfo from "../components/UserInfo";
import UserAddress from "../components/UserAddress";
import { isAuthenticated } from "../utils/Auth";
import { redirect } from "next/navigation";
const Page = () => {
  const [image, setImage] = useState<any>("");
  const [previewImg, setPreviewImg] = useState<any>("");

  const { loggedInUser, serverUrl, setLoggedInUser } = useContext(MyContext);

  const [activeTab, setActiveTab] = useState("userinfo");
  // useEffect(() => {
  //   const isAuth = isAuthenticated;
  //   if (!isAuth) {
  //     redirect("/");
  //   }
  // }, []);
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

  function setVisibleComponent() {
    if (activeTab === "userinfo") {
      return <UserInfo />;
    } else if (activeTab === "user-address") {
      return <UserAddress />;
    }
  }

  return (
    <div className='flex'>
      <aside
        id='sidebar'
        className='flex gap-4 flex-col h-full px-24 py-12 mb-24 mx-auto'
      >
        <section id='user-avatar'>
          <div className='relative mb-6'>
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
              className='absolute  border bg-white w-fit border-custom-green rounded-full p-2 z-50  '
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
                <MdEdit className='text-2xl  text-custom-green' />
              </label>
              {image && (
                <button
                  type='submit'
                  className='cursor-pointer text-center block w-max text-xs  border m-auto bg-custom-green  text-white border-custom-green rounded-sm my-2 p-2'
                >
                  Upload New Image
                </button>
              )}
            </form>
          </div>
        </section>

        <section
          className={`mt-8  cursor-pointer w-full p-2
${activeTab === "userinfo" ? "bg-custom-green  text-white" : ""} `}
          id='user-info'
          onClick={() => setActiveTab("userinfo")}
        >
          <div className='flex items-center gap-3   '>
            <FaRegUserCircle size={24} />
            <button className=''>User Info</button>
          </div>
        </section>
        <section
          className={`cursor-pointer w-full p-2  ${
            activeTab === "user-address" ? "bg-custom-green text-white" : ""
          } `}
          onClick={() => setActiveTab("user-address")}
          id='user-address'
        >
          <div className='flex items-center gap-3'>
            <MdOutlineSpaceDashboard size={24} />
            <button>Address Information</button>
          </div>
        </section>
        <section
          className={` cursor-pointer w-full p-2 ${
            activeTab === "user-favourites" ? "bg-custom-green text-white" : ""
          } `}
          onClick={() => setActiveTab("user-favourites")}
          id='user-favourites'
        >
          <div className='flex items-center gap-3'>
            <FaRegHeart size={24} />
            <button>Favourites</button>
          </div>
        </section>
        <section id='user-settings'>
          <div className='flex items-center gap-3'>
            <IoMdSettings size={24} />

            <button>Settings</button>
          </div>
        </section>
      </aside>

      <div className=' flex-1 max-w-screen-lg mx-auto px-4 py-8'>
        <main>{setVisibleComponent()}</main>
      </div>
    </div>
  );
};

export default Page;
