"use client";
import { useState, useEffect, useContext, useCallback } from "react";

import SingleMeal from "@/app/components/SingleMeal";
import { MyContext } from "@/app/context/Context";

const MealPlanInfo = ({ mealId }: any) => {
  const { serverUrl } = useContext(MyContext);
  const [meal, setMeal] = useState("");

  const fetchData = useCallback(async () => {
    const res = await fetch(`${serverUrl}/api/meals/${mealId}`);
    const data = await res.json();
    setMeal(data);
  }, [mealId, serverUrl]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return meal && <SingleMeal width={400} height={400} meal={meal} />;
};

export default MealPlanInfo;
