import React, { useState, useContext } from "react";
import axios from "axios";
import { MyContext } from "../context/Context";

const UserAddress = () => {
  const { loggedInUser, serverUrl, setLoggedInUser } = useContext(MyContext);
  const [address, setAddress] = useState({
    street: "",
    unit: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      // Simulating a save operation
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate an API call delay
      // Navigate to the checkout page after saving the address
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Assuming JWT token is used for authentication
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        `${serverUrl}/users/updateAddress`,
        address,
        config
      );

      console.log(response);
    } catch (error) {
      console.error("Failed to save the address", error);
    }
  };
  return (
    <div className='max-w-screen-lg mx-auto px-12 pr-36 mt-8 mb-16'>
      <div>
        <h2 className='text-4xl text-center font-light tracking-wide mb-2'>
          Delivery Address
        </h2>
        <p className='font-normal my-6'>
          Please enter the address where you would like your plan to be
          delivered. Ensuring accurate address information helps us serve you
          better and ensures your delivery arrives on time.
        </p>
      </div>

      <div className='my-4'>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <input
            type='text'
            name='street'
            placeholder='Street Address'
            value={address.street}
            onChange={handleChange}
            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-custom-green focus:border-custom-green focus:z-10 sm:text-sm'
            required
          />
          <input
            type='text'
            name='unit'
            placeholder='Apartment, Suite, Unit (Optional)'
            value={address.unit}
            onChange={handleChange}
            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-custom-green focus:border-custom-green focus:z-10 sm:text-sm'
          />
          <input
            type='text'
            name='city'
            placeholder='City'
            value={address.city}
            onChange={handleChange}
            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-custom-green focus:border-custom-green focus:z-10 sm:text-sm'
            required
          />
          <input
            type='text'
            name='state'
            placeholder='State/Province/Region'
            value={address.state}
            onChange={handleChange}
            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-custom-green focus:border-custom-green focus:z-10 sm:text-sm'
            required
          />
          <input
            type='text'
            name='postalCode'
            placeholder='Postal Code'
            value={address.postalCode}
            onChange={handleChange}
            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-custom-green focus:border-custom-green focus:z-10 sm:text-sm'
            required
          />
          <input
            type='text'
            name='country'
            placeholder='Country'
            value={address.country}
            onChange={handleChange}
            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-custom-green focus:border-custom-green focus:z-10 sm:text-sm'
            required
          />
          <button
            type='submit'
            className='w-full bg-custom-green hover:bg-green-700 text-white font-light py-2 px-4 rounded'
          >
            Save Address
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserAddress;
