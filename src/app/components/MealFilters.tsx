"use client";

import React, { useState } from "react";

// Define your filter options
const MEAL_TYPES = ["Breakfast", "Lunch", "Dinner", "Snack"];
const CATEGORIES = ["Vegan", "Vegetarian", "Meat", "Dessert"]; // Assuming these are your categories

const MealFilters = ({ onFilterChange }) => {
  const [activeMealType, setActiveMealType] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  const handleMealTypeClick = (type) => {
    setActiveMealType(type);
    onFilterChange({ mealType: type, category: activeCategory });
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onFilterChange({ mealType: activeMealType, category });
  };

  return (
    <div className='flex gap-4 justify-between'>
      <div className='my-4'>
        <h4 className='text-2xl'>Types</h4>
        <div className='flex gap-4'>
          {MEAL_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => handleMealTypeClick(type)}
              className={`rounded-full  border px-4 py-2 mt-4 tracking-wider text-xs font-medium ${
                type === activeMealType
                  ? "bg-custom-green text-white"
                  : "bg-white"
              }`}
              // style={{
              //   backgroundColor: type === activeMealType ? "blue" : "grey",
              // }}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className='my-4'>
        <h4 className='text-2xl'>Categories</h4>
        <div className='flex gap-4 items-center'>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`rounded-full  border px-4 py-2 mt-4 tracking-wider text-xs font-medium ${
                category === activeCategory
                  ? "bg-custom-green text-white"
                  : "bg-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealFilters;
