"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { MyContext } from "../context/Context";
const Wishlist = () => {
  const { fetchLikedmeals, likedMealIds } = useContext(MyContext);
  const [meal, setMeal] = useState();

  useEffect(() => {
    fetchLikedmeals();
  }, [likedMealIds]);
  useEffect(() => {
    const fetchData = async () => {
      if (likedMealIds) {
        const res = await fetch(
          `http://localhost:5000/api/meals/${likedMealIds}`
        );

        const data = await res.json();
        console.log(data);
        setMeal(data);
      }
    };

    fetchData();
  }, [likedMealIds]);

  console.log(likedMealIds);
  return (
    <section className="max-w-screen-lg mx-auto my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        key={meal?._id}
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
      >
        <img
          src={meal?.imageUrl}
          alt={meal?.name}
          className="w-full h-40 object-cover object-center"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{meal?.name}</h2>
          <p className="text-gray-700 mb-4">{meal?.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
