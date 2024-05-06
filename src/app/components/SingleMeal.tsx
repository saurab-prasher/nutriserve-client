import React, { useContext, useState, useEffect } from "react";
import Image from "next/legacy/image";
import { MyContext } from "../context/Context";
import { Meal } from "../types";

const SingleMeal = ({ meal }: any) => {
  const [mealIsSelected, setmealIsSelected] = useState(false);

  const {
    handleSelectMeal,
    selectedRecipes,
    removeSelectedMeal,
    recipeUpdateMsg,
    handleRecipeUpdateMessage,
  } = useContext(MyContext);

  useEffect(() => {
    checkSelectedRecipe();

    const id = setTimeout(() => {
      handleRecipeUpdateMessage("");
    }, 3000);

    return () => {
      clearTimeout(id);
    };
  }, [selectedRecipes]);

  function checkSelectedRecipe() {
    const isAlreadySelected = selectedRecipes.some(
      (recipe) => recipe._id === meal._id
    );
    if (isAlreadySelected) {
      setmealIsSelected(true);
    } else {
      setmealIsSelected(false);
    }
  }

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
          <div className='flex items-center mt-16 gap-2'>
            <h3 className='text-white text-xl font-light tracking-wide mr-2'>
              {meal.name}
            </h3>
            <span className='bg-custom-green w-fit text-center text-xs text-white p-2  font-normal tracking-wider rounded-full'>
              {meal.category}
            </span>

            {mealIsSelected ? (
              <button
                onClick={() => removeSelectedMeal(meal._id)}
                className='text-white p-2 text-xs w-fit text-center block font-normal tracking-wider rounded-full bg-[#FFA726] hover:bg-[#FB8C00]'
              >
                remove from cart
              </button>
            ) : (
              <button
                onClick={() => handleSelectMeal(meal)}
                className='text-white p-2 text-xs w-fit text-center block font-normal tracking-wider rounded-full bg-[#FFA726] hover:bg-[#FB8C00]'
              >
                add to cart
              </button>
            )}

            <span className='absolute text-white top-15 right-20 text-sm'>
              {recipeUpdateMsg}
            </span>
          </div>
          <div></div>
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
