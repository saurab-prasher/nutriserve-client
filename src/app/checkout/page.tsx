"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";
import { MyContext } from "../context/Context";

const CheckoutPage = () => {
  const { selectedRecipes, removeSelectedMeal } = useContext(MyContext);

  // const calculateTotal = () => {
  //   return selectedRecipes.length;
  // };

  return (
    <div className='container mx-auto py-12'>
      <h2 className='text-6xl text-center font-light mb-20 tracking-wide'>
        Order Summary Page
      </h2>
      <div className='grid grid-cols-1 gap-16 items-center place-items-center mx-auto  '>
        {selectedRecipes?.map((meal: any) => (
          <div
            className='flex bg-white rounded-lg shadow-md overflow-hidden w-fit'
            key={meal._id}
          >
            <div>
              <Image
                height={350}
                width={400}
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
                  Remove meal from order
                </button>
              </div>
            </div>

            <table className=' text-sm text-center text-gray-700 '>
              <thead className='text-xs uppercase tracking-wider  bg-custom-green text-white'>
                <tr>
                  <th scope='col' className='p-4'>
                    Ingredients used
                  </th>
                </tr>
              </thead>
              <tbody>
                {meal.ingredients.map((ingredient: any, index: number) => (
                  <tr className='bg-white border-b' key={index}>
                    <td className='p-2 capitalize'>{ingredient}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className=' text-sm text-center text-gray-700 '>
              <thead className='text-xs uppercase tracking-wider  bg-custom-green text-white'>
                <tr>
                  <th scope='col' className='p-4'>
                    Nutrient
                  </th>
                  <th scope='col' className='p-4'>
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(
                  meal.nutritionalValues as Record<string, number | string>
                ).map(([key, value], index) => (
                  <tr key={index} className='bg-white border-b'>
                    <td className=' capitalize'>{key}</td>
                    <td className=''>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutPage;
