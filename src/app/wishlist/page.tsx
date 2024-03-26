"use client";
import React, { useState, useContext, useEffect } from "react";

import axios from "axios";
import { MyContext } from "../context/Context";

const Wishlist = () => {
  const { likedRecipes, serverUrl, loggedInUser } = useContext(MyContext);

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    console.log(loggedInUser);
    async function fetchWishlist() {
      // const response = await axios.get(
      //   `${serverUrl}/api/wishlist/${loggedInUser?.userId}`,
      //   {
      //     withCredentials: true,
      //   }
      // );
      // console.log(response);
    }

    fetchWishlist();
  }, []);

  // useEffect(() => {
  //   const fetchAllMeals = async () => {
  //     const mealData: any = await Promise.all(
  //       likedRecipes.map((mealId) =>
  //         fetch(`${serverUrl}/api/meals/${mealId}`).then((res) => res.json())
  //       )
  //     );
  //     setMeals(mealData);
  //   };

  //   if (likedRecipes.length > 0) {
  //     fetchAllMeals();
  //   }
  // }, [likedRecipes, serverUrl]);

  const calculateTotal = () => {
    return likedRecipes.length;
  };

  return (
    <div className='container mx-auto py-12'>
      <h2 className='text-6xl text-center font-light mb-20 tracking-wide'>
        Wishlist
      </h2>
      <div className='max-w-screen-lg mx-auto my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {meals?.map((meal: any) => (
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

export default Wishlist;
