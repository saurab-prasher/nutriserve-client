import React, { useState, useContext } from "react";
import axios from "axios";
import { MyContext } from "../context/Context";
import { FaRegEdit } from "react-icons/fa";
const UserAddress = () => {
  const { loggedInUser, serverUrl, setLoggedInUser } = useContext(MyContext);

  console.log(loggedInUser);

  const [formData, setFormData] = useState({
    street: loggedInUser?.address?.street || "",
    unit: loggedInUser?.address?.unit || "",
    city: loggedInUser?.address?.city || "",
    state: loggedInUser?.address?.state || "",
    postalCode: loggedInUser?.address?.postalCode || "",
    country: loggedInUser?.address?.country || "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        `${serverUrl}/users/updateAddress`,
        formData,
        config
      );

      console.log("User information updated:", response.data);
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to save the address", error);
    }
  };
  return (
    <div className='max-w-screen-lg mx-auto px-12 pr-36 mt-8 mb-16'>
      <div className='flex items-start'>
        <div>
          <h2 className='text-4xl  font-light tracking-wide mb-2'>
            Delivery Address
          </h2>
          <p className='font-normal my-6'>
            Please enter the address where you would like your plan to be
            delivered. Ensuring accurate address information helps us serve you
            better and ensures your delivery arrives on time.
          </p>
        </div>
        <button>
          <FaRegEdit
            className='hover:text-custom-green cursor-pointer'
            size={24}
            onClick={handleEditClick}
          />
        </button>
      </div>

      <div className='my-4'>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <input
            type='text'
            name='street'
            placeholder='Street Address'
            value={formData.street}
            onChange={handleChange}
            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-custom-green focus:border-custom-green focus:z-10 sm:text-sm'
            required
            disabled={!isEditing}
          />
          <input
            type='text'
            name='unit'
            placeholder='Apartment, Suite, Unit (Optional)'
            value={formData.unit}
            onChange={handleChange}
            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-custom-green focus:border-custom-green focus:z-10 sm:text-sm'
            disabled={!isEditing}
          />
          <input
            type='text'
            name='city'
            placeholder='City'
            value={formData.city}
            onChange={handleChange}
            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-custom-green focus:border-custom-green focus:z-10 sm:text-sm'
            disabled={!isEditing}
            required
          />
          <input
            type='text'
            name='state'
            placeholder='State/Province/Region'
            value={formData.state}
            onChange={handleChange}
            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-custom-green focus:border-custom-green focus:z-10 sm:text-sm'
            disabled={!isEditing}
            required
          />
          <input
            type='text'
            name='postalCode'
            placeholder='Postal Code'
            value={formData.postalCode}
            onChange={handleChange}
            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-custom-green focus:border-custom-green focus:z-10 sm:text-sm'
            disabled={!isEditing}
            required
          />
          <input
            type='text'
            name='country'
            placeholder='Country'
            value={formData.country}
            onChange={handleChange}
            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-custom-green focus:border-custom-green focus:z-10 sm:text-sm'
            disabled={!isEditing}
            required
          />

          {isEditing && (
            <button
              className='w-full mt-8 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-custom-green hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 my-auto'
              type='submit'
            >
              Save Address
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserAddress;
