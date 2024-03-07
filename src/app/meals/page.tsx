"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import SingleMeal from "../components/SingleMeal";
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
  const [meals, setMeals] = useState<MealsListProps>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchBy, setSearchBy] = useState<string>("name");

  const [isVisible, setIsVisible] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null); // For the meal to display in the modal
  const [showModal, setShowModal] = useState(false); // To toggle the modal

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/meals");
      const data = await res.json();
      setMeals(data);
    };

    fetchData();
  }, []);

  const totalItems = meals?.length || 0;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  // const paginatedMeals = meals?.slice(
  //   (currentPage - 1) * ITEMS_PER_PAGE,
  //   currentPage * ITEMS_PER_PAGE
  // );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Function to open modal with the details of the clicked meal
  const handleViewRecipe = (meal) => {
    setSelectedMeal(meal);
    setShowModal(true);
  };

  const [expandedMeal, setExpandedMeal] = useState<string | null>(null);

  const handleAddToWishlist = (mealId: string) => {
    // wishlist functionality
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchBy(e.target.value);
  };

  const filteredMeals = meals?.filter((meal) => {
    if (searchQuery === "") return true;
    if (searchBy === "name") {
      return meal.name.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (searchBy === "category") {
      return meal.category.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (searchBy === "ingredient") {
      return meal.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return true;
  });

  const paginatedMeals = filteredMeals?.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className='max-w-screen-lg mx-auto '>
      <fieldset className='border border-grey-500 h-[68px] rounded-lg flex items-center mt-1 w-full'>
        <legend className='text-sm text-black text-opacity-60 px-1'>
          Search for meals
        </legend>
        <input
          type='text'
          className='px-3 py-2 w-full'
          onChange={handleSearch}
        />
        <select
          className='px-3 py-2 text-black font-bold ml-2'
          onChange={handleSearchByChange}
          value={searchBy}
        >
          <option value='name'>Name</option>
          <option value='category'>Category</option>
          <option value='ingredient'>Ingredient</option>
        </select>
      </fieldset>

      <div className='max-w-screen-lg mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {isVisible && <div className='mt-4 p-4 border rounded-md'></div>}

        {paginatedMeals?.map((meal) => (
          <div
            key={meal._id}
            className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer'
            onClick={() => handleViewRecipe(meal)}
          >
            <img
              src={meal.imageUrl}
              alt={meal.name}
              className='w-full h-40 object-cover object-center'
            />
            <div className='p-4'>
              <h2 className='text-lg font-semibold mb-2'>{meal.name}</h2>
              <p className='text-gray-700 mb-4'>{meal.description}</p>
              {expandedMeal === meal._id ? (
                <div>
                  <p className='text-gray-600 mb-2'>
                    Category: {meal.category}
                  </p>
                  <div className='mb-2'>
                    <strong>Ingredients:</strong>
                    <ul className='list-disc pl-5'>
                      {meal.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                    <p>
                      <strong>Calories:</strong>{" "}
                      {meal.nutritionalValues.calories}
                    </p>
                    <p>
                      <strong>Protein:</strong> {meal.nutritionalValues.protein}
                    </p>
                    <p>
                      <strong>Carbs:</strong> {meal.nutritionalValues.carbs}
                    </p>
                    <p>
                      <strong>Fat:</strong> {meal.nutritionalValues.fat}
                    </p>
                  </div>
                </div>
              ) : (
                <div className='flex items-center justify-between'>
                  <button
                    className='text-red-500 focus:outline-none'
                    onClick={() => handleAddToWishlist(meal._id)}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Modal for displaying selected meal details */}
        {showModal && (
          <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex  justify-center items-center z-50 '>
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
        {/* <div className='flex justify-center mt-8 mb-8 pb-24px'>
        <nav className='flex' aria-label='Pagination'>
          <ul className='flex list-none'>
            {Array.from(Array(totalPages).keys()).map((pageNumber) => (
              <li key={pageNumber}>
                <button
                  onClick={() => handlePageChange(pageNumber + 1)}
                  className={`${
                    currentPage === pageNumber + 1
                      ? "bg-orange-500 text-white"
                      : "text-orange-500 hover:text-blue-800"
                  } px-3 py-1 rounded-md focus:outline-none`}
                >
                  {pageNumber + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div> */}
      </div>
    </div>
  );
}

export default MealsPage;
