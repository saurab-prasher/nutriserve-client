import React, { useCallback, useContext, useEffect, useState } from "react";
import { MyContext } from "../context/Context";

import MealPlanInfo from "../components/MealPlanInfo";
import { verifyUser } from "../utils/verifyUserUtils";

const MealDetail = () => {
  const { serverUrl, loggedInUser, setLoggedInUser } = useContext(MyContext);
  const [meals, setMeals] = useState([]);

  const fetchUpdatedMealPlan = useCallback(async () => {
    try {
      verifyUser(serverUrl, setLoggedInUser);
    } catch (error) {
      console.error("Error fetching updated meals:", error);
    }
  }, [serverUrl, setLoggedInUser]);

  useEffect(() => {
    if (loggedInUser && loggedInUser.mealPlan && loggedInUser.mealPlan.meals) {
      setMeals(loggedInUser.mealPlan.meals);
    }
  }, [loggedInUser]);

  useEffect(() => {
    fetchUpdatedMealPlan();
  }, [fetchUpdatedMealPlan]);

  return (
    <>
      {meals.length > 0 ? (
        <div>
          <h1 className='text-4xl text-center font-light tracking-wide mb-16'>
            Meals in your current plan
          </h1>

          <div className='grid grid-cols-3 gap-12 mb-16'>
            {meals.map((meal: any) => {
              return <MealPlanInfo mealId={meal._id} key={meal._id} />;
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MealDetail;
