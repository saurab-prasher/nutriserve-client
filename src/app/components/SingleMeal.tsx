import React, { useContext, useState, useEffect, useRef } from "react";
import Image from "next/legacy/image";
import { MyContext } from "../context/Context";
import { Meal } from "../types";

const SingleMeal = ({ meal, width, height }: any) => {
  const [mealIsSelected, setmealIsSelected] = useState(false);
  const recipeUpdateMsgRef = useRef("");

  const {
    handleAddMeal,
    selectedRecipes,
    removeSelectedMeal,
    recipeUpdateMsg,
    handleRecipeUpdateMessage,
  } = useContext(MyContext);

  useEffect(() => {
    recipeUpdateMsgRef.current = recipeUpdateMsg;
  }, [recipeUpdateMsg]);

  return (
    <div className='rounded-lg shadow-md'>
      <div className='relative'>
        <div>
          {!height && !width ? (
            <Image
              className='rounded-t-lg'
              src={meal?.imageUrl || "/images/meal.webp"}
              alt={meal?.name}
              layout='fill'
              objectFit='cover'
            />
          ) : (
            <Image
              className='rounded-t-lg'
              src={meal?.imageUrl || "/images/meal.webp"}
              alt={meal?.name}
              height={height}
              width={width}
              objectFit='cover'
            />
          )}

          <div className='absolute bottom-0  w-full p-4 px-8 bg-gradient-to-b h-full from-transparent to-black flex flex-col justify-end'>
            <div className=''>
              <div className=''>
                <h3 className='text-white text-2xl font-light tracking-wide'>
                  {meal?.name}
                </h3>

                <div className='flex my-4 gap-2'>
                  <span className='bg-custom-green text-center text-xs text-white p-2  font-normal tracking-wider rounded-full'>
                    {meal?.category}
                  </span>

                  <button className='text-white p-2 text-xs w-fit text-center block font-normal tracking-wider rounded-full bg-[#FFA726] hover:bg-[#FB8C00]'>
                    remove from meal plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-between '>
        <div className='ingredients px-8 my-4'>
          <p className='text-2xl tracking-wide mb-2'>Ingredients</p>
          <ul className='flex gap-4 flex-col ml-4'>
            {meal?.ingredients.map((ingredient: any, index: number) => (
              <li className='capitalize list-decimal text-xs' key={index}>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-auto'>
          <table className='w-full text-sm text-center text-gray-100 dark:text-gray-400 '>
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
              {Object?.entries(
                meal?.nutritionalValues as Record<string, number | string>
              ).map(([key, value], index) => (
                <tr key={index} className='bg-white'>
                  <td className='py-2 px-12 capitalize'>{key}</td>
                  <td className='py-2 px-12'>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SingleMeal;
