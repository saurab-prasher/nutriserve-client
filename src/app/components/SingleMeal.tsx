import React, { useContext, useState } from "react";
import Image from "next/legacy/image";
import { MyContext } from "../context/Context";
import { Meal } from "../types";

const SingleMeal = ({ meal }: any) => {
  const { handleSelectMeal } = useContext(MyContext);

  return (
    <div className='overflow-hidden rounded-lg'>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "400px",
          borderRadius: "8px",
        }}
      >
        <Image
          className='rounded-t-lg'
          src={meal?.imageUrl || "/images/meal.webp"}
          alt={meal.name}
          layout='fill'
          objectFit='cover'
        />

        <div className='meal-content w-full h-36 absolute left-0 bottom-0 p-4 px-8 bg-gradient-to-b  from-transparent to-black'>
          <div className='flex items-center mt-12'>
            <h3 className='text-white text-3xl font-light tracking-wide mr-2'>
              {meal.name}
            </h3>
            <span className='bg-custom-green text-xs text-white p-2  font-bold tracking-wider rounded-full'>
              {meal.category}
            </span>
          </div>
          <div className='flex justify-between items-center'>
            <span className=' text-gray-50 block text-sm mt-2'>
              {meal.description}
            </span>
            <button
              onClick={() => handleSelectMeal(meal)}
              className='text-white p-2 text-sm w-20 block font-bold tracking-wider rounded-full bg-[#FFA726] hover:bg-[#FB8C00]'
            >
              Add +
            </button>
          </div>
        </div>
      </div>

      <div className='category-type '></div>
      <div className='ingredients px-4 py-4'>
        <p className='text-xl tracking-wide mb-4'>Ingredients</p>
        <ul className='grid grid-cols-3 gap-2'>
          {meal.ingredients.map((ingredient: any, index: number) => (
            <li className='capitalize text-sm border-b pb-2 w-48' key={index}>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div className=''>
        <table className='w-full text-sm text-left text-gray-100 dark:text-gray-400 '>
          <thead className='text-xs uppercase bg-gray-50 dark:bg-gray-700 text-white'>
            <tr>
              <th scope='col' className='py-3 px-12'>
                Nutrient
              </th>
              <th scope='col' className='py-3 px-12'>
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(
              meal.nutritionalValues as Record<string, number | string>
            ).map(([key, value], index) => (
              <tr key={index} className='bg-white border-b'>
                <td className='py-2 px-12 capitalize'>{key}</td>
                <td className='py-2 px-12'>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleMeal;
