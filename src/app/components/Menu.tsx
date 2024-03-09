"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import { Meal } from "../types";
const Menu = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/meals");
      const data = await res.json();
      setMeals(data.slice(0, 6));
    };

    fetchData();
  }, []);
  return (
    <div className='container mx-auto py-8 my-12'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-light mb-4'>Your box, your way</h1>
        <p className='description font-light'>
          Flexible options to delight you and customize your weekly box
        </p>
      </div>

      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
        centerMode={true}
        centerSlidePercentage={50}
        className='mb-16'
      >
        {meals?.map((meal) => {
          return (
            <div className='shadow-sm p-4 mx-8 h-72' key={meal._id}>
              <Image
                height={100}
                width={100}
                style={{ objectFit: "contain" }}
                src={"/images/meal1.webp"}
                alt={meal?.name}
              />
              <div className='legend'>
                <h2 className='text-lg font-semibold mb-2'>{meal.name}</h2>
                <p className='mb-4'>{meal.description}</p>
              </div>
            </div>
          );
        })}
      </Carousel>

      <Link
        href='/meals'
        className='mx-auto cursor-pointer text-center block w-fit font-bold border m-auto bg-custom-green py-4 px-6 text-md text-white border-custom-green rounded-sm mb-4'
      >
        See our menus
      </Link>
    </div>
  );
};

export default Menu;
