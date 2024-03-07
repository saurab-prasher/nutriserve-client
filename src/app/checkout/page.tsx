"use client";
import React, { useState, useContext } from "react";

import { MyContext } from "../context/Context";
// Props are expected to be passed down from a parent component or through a global state manager like Redux or Context API
const CheckoutPage = () => {
  const { selectedRecipes } = useContext(MyContext);
  const calculateTotal = () => {
    // This is a placeholder for any calculation, for example, summing up the prices of the selected recipes if they have associated costs
    return selectedRecipes.length; // Simple example, replace with actual calculation
  };

  return (
    <div className='container mx-auto'>
      <h2 className='text-2xl text-center font-bold mb-6'>Checkout</h2>
      <div className='max-w-screen-lg mx-auto my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {selectedRecipes?.map((meal) => (
          <div
            key={meal._id}
            className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer'
          >
            <img
              src={meal.imageUrl}
              alt={meal.name}
              className='w-full h-40 object-cover object-center'
            />
            <div className='p-4'>
              <h2 className='text-lg font-semibold mb-2'>{meal.name}</h2>
              <p className='text-gray-700 mb-4'>{meal.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutPage;
