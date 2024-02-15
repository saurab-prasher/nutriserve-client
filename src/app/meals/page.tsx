"use client";
import { useState, useEffect } from "react";

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
      console.log(data);
    };

    fetchData();
  }, []);
  return (
    <div className='max-w-screen-lg m-auto mt-12'>
      {meals?.map((meal) => (
        <div key={meal._id} className='mb-8 p-4 shadow-lg rounded-lg'>
          <h2 className='text-xl font-bold mb-2'>{meal.name}</h2>
          <p className='text-gray-700 mb-2'>{meal.description}</p>
          <p className='text-gray-600 mb-2'>Category: {meal.category}</p>
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
      ))}
    </div>
  );
}

export default MealsPage;
