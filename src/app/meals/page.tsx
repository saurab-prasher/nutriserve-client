"use client";
import { useState, useEffect } from "react";

function MealsPage() {
  const [meals, setMeals] = useState([]);

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
    <div className='p-4 max-w-xl mx-auto'>
      <h1 className='text-2xl font-bold'>Meals</h1>
    </div>
  );
}

export default MealsPage;
