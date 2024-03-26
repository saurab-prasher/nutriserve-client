"use client";
import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import SingleMeal from "../components/SingleMeal";
import MealFilters from "../components/MealFilters";
import Image from "next/legacy/image";

import { MyContext } from "../context/Context";

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

type MealsListProps = {
  meals: Meal[];
};

const ITEMS_PER_PAGE = 9;

function MealsPage() {
  const [meals, setMeals] = useState<Meal[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { handlelikedMeal } = useContext(MyContext);

  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

  const [showModal, setShowModal] = useState(false); // To toggle the modal
  const { loggedInUser, serverUrl } = useContext(MyContext);

  const [filters, setFilters] = useState({ mealType: "", category: "" });
  const [filteredMeals, setFilteredMeals] = useState<Meal[]>([]);

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

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);

    const { mealType, category } = newFilters;

    if (mealType && category) {
      const filteredMeals = meals.filter((meal: any) => {
        console.log(meal);
        return (
          meal.category.toLowerCase() === category.toLowerCase() &&
          meal.mealType.toLowerCase() === mealType.toLowerCase()
        );
      });

      setFilteredMeals(filteredMeals);
    }
  };

  return (
    <div className='max-w-screen-lg mx-auto mb-60 '>
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

      <div className='max-w-screen-lg mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
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
            <div className='flex flex-col justify-between h-60 p-4'>
              <h2 className='text-lg font-semibold mb-2'>{meal.name}</h2>
              <p className='text-gray-700 mb-4'>{meal.description}</p>
              <div className='flex justify-between'>
                <button
                  className='bg-orange-500 text-white px-4 w-full py-2 rounded-md mr-4'
                  onClick={() => handleViewRecipe(meal)}
                >
                  Details
                </button>

                {loggedInUser && (
                  <button
                    className='text-gray-500 focus:outline-none bg-transparent text-xl'
                    onClick={() => handlelikedMeal(meal)}
                  >
                    <FontAwesomeIcon
                      className='transition-colors hover:text-red-500'
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
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 '>
          <div className='bg-white rounded-lg w-5/12 max-h-[90%]  relative'>
            <SingleMeal meal={selectedMeal} />
            <button
              onClick={() => setShowModal(false)}
              className=' text-custom-green bg-white px-4 py-2 rounded-full focus:outline-none absolute right-5 top-5 hover:bg-custom-green hover:text-white font-thin text-xl'
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MealsPage;
