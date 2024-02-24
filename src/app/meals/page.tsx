"use client";
import React, { useState, useEffect } from "react";

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

function MealsPage() {
  const [meals, setMeals] = useState<MealsListProps>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/meals");
      const data = await res.json();
      setMeals(data);
    };

    fetchData();
  }, []);

  const [expandedMeal, setExpandedMeal] = useState<string | null>(null);

  const handleViewRecipe = (mealId: string) => {
    setExpandedMeal(mealId === expandedMeal ? null : mealId);
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {meals?.map((meal) => (
        <div
          key={meal._id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={meal.imageUrl}
            alt={meal.name}
            className="w-full h-40 object-cover object-center"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">{meal.name}</h2>
            <p className="text-gray-700 mb-4">{meal.description}</p>
            {expandedMeal === meal._id ? (
              <div>
                <p className="text-gray-600 mb-2">Category: {meal.category}</p>
                <div className="mb-2">
                  <strong>Ingredients:</strong>
                  <ul className="list-disc pl-5">
                    {meal.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <p>
                    <strong>Calories:</strong> {meal.nutritionalValues.calories}
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
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none"
                onClick={() => handleViewRecipe(meal._id)}
              >
                View Recipe
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MealsPage;
