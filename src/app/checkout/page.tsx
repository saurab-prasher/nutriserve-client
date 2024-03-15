"use client";
import React, { useState, useContext } from "react";

import { MyContext } from "../context/Context";

const CheckoutPage = () => {
  const { selectedRecipes, removeSelectedMeal } = useContext(MyContext);

  // const calculateTotal = () => {
  //   return selectedRecipes.length;
  // };

  return (
    <div className='container mx-auto py-12'>
      <h2 className='text-6xl text-center font-light mb-20 tracking-wide'>
        Checkout
      </h2>
      <div className='max-w-screen-lg mx-auto my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {selectedRecipes?.map((meal: any) => (
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

            <div className='p-4'>
              <button
                onClick={() => removeSelectedMeal(meal._id)}
                className='bg-red-500 text-white px-3 py-2 rounded-md'
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutPage;
