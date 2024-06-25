"use client";
import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import SingleMeal from "../components/SingleMeal";
import MealFilters from "../components/MealFilters";
import Image from "next/legacy/image";

import { MyContext } from "../context/Context";
import Link from "next/link";

type NutritionalValues = {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
};

type Meal = {
  nutritionalValues: NutritionalValues;
  _id: string;
  name: string;
  description: string;
  category: string;
  ingredients: string[];
  imageUrl: string;
};

function MealsPage() {
  const [meals, setMeals] = useState<Meal[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { handlelikedMeal } = useContext(MyContext);

  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

  const [showModal, setShowModal] = useState(false); // To toggle the modal
  const {
    loggedInUser,
    serverUrl,
    selectedRecipes,
    likedRecipes,
    handleLikedRecipeMsg,
    likedRecipeMsg,
  } = useContext(MyContext);

  const [filters, setFilters] = useState({ mealType: "", category: "" });
  const [filteredMeals, setFilteredMeals] = useState<Meal[]>([]);
  const [color, setColor] = useState("red");

  useEffect(() => {
    if (likedRecipeMsg !== "") {
      const timer = setTimeout(() => {
        handleLikedRecipeMsg("");
      }, 3000);

      return () => {
        clearTimeout(timer);
        handleLikedRecipeMsg("");
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [likedRecipeMsg, handleLikedRecipeMsg]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${serverUrl}/api/meals`);
      const data = await res.json();
      setMeals(data);
    };

    fetchData();
  }, [serverUrl]);

  const handleViewRecipe = (meal: Meal) => {
    setSelectedMeal(meal);
    setShowModal(true);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchByChange = () => {
    if (searchQuery.toLowerCase()) {
      const filteredMeals = meals?.filter((meal) =>
        meal.name.toLowerCase().includes(searchQuery)
      );

      setFilteredMeals(filteredMeals);
    }
  };

  useEffect(() => {}, []);

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);

    test();
    const { mealType, category } = newFilters;

    if (mealType && category) {
      const filteredMeals = meals.filter((meal: any) => {
        return (
          meal.category.toLowerCase() === category.toLowerCase() &&
          meal.mealType.toLowerCase() === mealType.toLowerCase()
        );
      });

      setFilteredMeals(filteredMeals);
    }
  };

  function test() {
    console.log("acb");
    const likedFilteredMeals = filteredMeals.filter((meal) => {
      // Check if the meal's ID is in the likedRecipes array
      return likedRecipes.some((likedMeal: any) => likedMeal === meal._id);
    });
    console.log(likedFilteredMeals); // This will show the filtered array of liked meals
  }

  return (
    <div className='container py-16 mx-auto mb-60'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-normal mb-4'>
          Recipes for All Tastes and Occasions
        </h1>
        <p className='description font-light'>
          Looking for some tasty recipe inspiration? Browse through our
          collection of deliciously easy recipes and discover culinary delights
          guaranteed to please every meat-lover, veg-head, busy parent, and
          picky eater. We&apos;ve got dinnertime solved!
        </p>
      </div>

      <input
        type='text'
        className='px-6 py-2 w-full border rounded-full mb-12'
        onChange={(e) => {
          handleSearch(e);
          handleSearchByChange();
        }}
        placeholder='Search for meals...'
      />

      <MealFilters onFilterChange={handleFilterChange} />

      <div className='container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20'>
        {filteredMeals?.map((meal: any) => (
          <div
            key={meal._id}
            className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer'
          >
            <Image
              src={meal?.imageUrl || "/images/meal3.webp"}
              alt={meal.name}
              height={300}
              width={450}
              className=' object-cover object-center'
            />
            <div className='flex flex-col justify-between  gap-2 p-8'>
              <h2 className='text-3xl text-center font-light mb-4'>
                {meal.name}
              </h2>
              <p className='text-gray-700 text-sm mb-4'>{meal.description}</p>
              <span className=' text-red-500 text-sm h-5 font-medium '>
                {likedRecipeMsg}
              </span>
              <div className='flex justify-between relative'>
                <Link
                  href={`/meals/${meal._id}/`}
                  className='bg-custom-green text-white px-4 w-full py-2 rounded-md mr-4 text-center'
                  onClick={() => handleViewRecipe(meal)}
                >
                  Details
                </Link>

                {loggedInUser && (
                  <button
                    className='text-gray-500 focus:outline-none bg-transparent text-xl'
                    onClick={() => handlelikedMeal(meal)}
                  >
                    <FontAwesomeIcon
                      className={`transition-colors hover:text-red-500`}
                      icon={faHeart}
                    />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && selectedMeal && (
        <div className=''>
          <div className=''>
            <SingleMeal meal={selectedMeal} />
            {/* <button
              onClick={() => setShowModal(false)}
              className=' text-custom-green bg-white px-4 py-2 rounded-full focus:outline-none absolute right-5 top-5 hover:bg-custom-green hover:text-white  text-xl font-normal'
            >
              X
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default MealsPage;
