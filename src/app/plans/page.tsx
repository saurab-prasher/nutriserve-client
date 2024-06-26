/* eslint-disable */
"use client";

import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { MyContext } from "../context/Context"; // Importing context for global state management

import MealDetail from "../components/MealDetail";

interface Plan {
  planName: string;
  recipesPerWeek: number;
  totalPricePerWeek: number;
  description: string;
  shippingPrice: number;
  pricePerServing: number;
  totalPrice: number;
  numberOfPeople: number;
}

const Plans = () => {
  const router = useRouter();
  // State variables for the component
  const [currentPlan, setCurrentPlan] = useState<Plan | null>(null);

  const [numOfPeople, setNumOfPeople] = useState(2); // Number of people for the plan
  const [recipesPerWeek, setRecipesPerWeek] = useState(3); // Number of recipes per week
  // const [pricingPlans, setPricingPlans] = useState([]); // Array to hold pricing plans fetched from the server
  const [totalPrice, setTotalPrice] = useState(0); // Total price for the selected plan
  const [pricePerServing, setPricePerServing] = useState(0); // Price per serving based on the selected plan
  const [shippingPrice, setShippingPrice] = useState(0); // Shipping price based on the selected plan
  const [planName, setPlanName] = useState("Duo Delight");
  const [planDescription, setPlanDescription] = useState("");

  const { serverUrl, loggedInUser } = useContext(MyContext);
  const [fullPlan, setFullPlan] = useState([]);

  useEffect(() => {
    if (loggedInUser) {
      setCurrentPlan(loggedInUser.plan);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serverUrl, loggedInUser]);

  async function getAllPlans() {
    try {
      const response = await axios.get(`${serverUrl}/api/pricing`); // Fetching pricing plans
      const data = response.data;
      setFullPlan(data);

      data.map((plan: Plan) => {
        if (planName === plan.planName) {
          setPricePerServing(plan.pricePerServing);
          setShippingPrice(plan.shippingPrice);
          setTotalPrice(plan.totalPrice);
          setPlanDescription(plan.description);
        }
      });
    } catch (error) {
      console.error("Error fetching pricing data:", error); // Logging any errors
    }
  }

  useEffect(() => {
    getAllPlans();
  }, []);
  // Calculate total price whenever the number of people, recipes per week, or pricing plans change
  useEffect(() => {
    const selectedPlan: any = fullPlan.find(
      (plan: Plan) => plan?.numberOfPeople === numOfPeople
    ); // Find the pricing plan that matches user selection

    // If a matching plan is found, update pricing information in the state
    if (selectedPlan) {
      setPlanName(selectedPlan?.planName);
      setPricePerServing(selectedPlan?.pricePerServing);
      setShippingPrice(selectedPlan?.shipping);
      setTotalPrice(
        selectedPlan?.pricePerServing * numOfPeople * recipesPerWeek +
          selectedPlan?.shipping
      );

      setPlanDescription(selectedPlan?.description);
    }
  }, [numOfPeople, recipesPerWeek, fullPlan]);

  async function handlePlanSubmit(e: any) {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const formData = new FormData();

      formData.append("planName", planName);

      formData.append("numOfPeople", numOfPeople.toString());
      formData.append("recipesPerWeek", recipesPerWeek.toString());
      formData.append("totalPrice", totalPrice.toString());
      formData.append("planDescription", planDescription);

      const { data } = await axios.post(
        `${serverUrl}/users/setuserplan`,
        formData,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      router.push("/meals");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='flex flex-col gap-8 container py-16 mx-auto mb-24'>
      {!currentPlan ? (
        <div className=' mb-12 py-6'>
          <h2 className='text-4xl text-center font-light tracking-wide mb-6  '>
            Please select a plan
          </h2>

          <p className='font-light'>
            Welcome to our "Select Your Plan" page! Here, you can customize your
            meal plan to fit your lifestyle. Choose the number of people and the
            number of recipes per week, and see the price summary instantly.
            Whether you're cooking for yourself or your family, we've got the
            perfect plan for you.
          </p>
        </div>
      ) : (
        ""
      )}

      {loggedInUser && currentPlan ? (
        <div className=' shadow-sm mb-24'>
          <h2 className='text-4xl text-center font-light tracking-wide mb-6'>
            Your current plan details
          </h2>

          <div className=' shadow-sm flex flex-col gap-6  border-b-2 border-custom-green   p-6 '>
            <div className='flex justify-between items-center '>
              <span className='block w-50 font-light '>Plan name</span>
              <p>{currentPlan?.planName}</p>
            </div>
            <div className='flex justify-between items-center'>
              <span className='block w-50 font-light'>Recipes per week</span>
              <p>{currentPlan?.recipesPerWeek}</p>
            </div>
            <div className='flex justify-between items-center'>
              <span className='block w-50 font-light'>Total weekly price</span>
              <p>{currentPlan?.totalPricePerWeek}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div>
        <MealDetail />
      </div>

      <div>
        <h2 className='text-4xl text-center font-light tracking-wide mb-6'>
          {currentPlan ? "Update your plan details" : "     Choose your plan"}
        </h2>
        <p className='font-light'>
          We&apos;ll set this as your default plan size, but you can always
          change it later from week to week.
        </p>
      </div>
      <form onSubmit={handlePlanSubmit}>
        {/* Buttons for selecting the number of people and recipes per week */}
        <div className='flex flex-col gap-5'>
          <div className='flex justify-between items-center'>
            <span className='block w-3/6 font-light'>Plan name</span>
            <p>{planName}</p>
          </div>

          <div className='flex justify-between items-center'>
            <span className='block max-w-26 font-light'>Plan description</span>
            <p className='font-light text-sm'>{currentPlan?.description}</p>
          </div>
          {/* Selection for number of people */}
          <div className='flex justify-between items-center'>
            <span className='block w-3/6 font-light'>Number of people</span>
            <div className='flex w-9/12'>
              {/* Buttons to select the number of people */}
              {fullPlan.map(({ numberOfPeople }) => (
                <div
                  key={numberOfPeople}
                  onClick={() => setNumOfPeople(numberOfPeople)}
                  className={`border text-center cursor-pointer w-3/6 py-2 rounded-sm ${
                    numberOfPeople === numOfPeople
                      ? "bg-custom-green text-white"
                      : "color-main"
                  }`}
                >
                  {numberOfPeople}
                </div>
              ))}
            </div>
          </div>
          {/* Selection for number of recipes per week */}
          <div className='flex justify-between items-center mb-6'>
            <span className='font-light'>Recipes per week</span>
            <div className='flex'>
              {/* Buttons to select the number of recipes per week */}
              {[3, 4, 5].map((num) => (
                <div
                  key={num}
                  onClick={() => setRecipesPerWeek(num)}
                  className={`border w-36 text-center py-2 cursor-pointer rounded-sm ${
                    recipesPerWeek === num ? "bg-custom-green text-white" : ""
                  }`}
                >
                  {num}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className='price-summary border border-gray-200 rounded-sm p-4 border-b-0 rounded-b-none'>
            <div className='flex flex-col gap-2 price-summary-header border-b border-gray-300'>
              <h5 className='font-semibold'>Price Summary</h5>
              <p className='font-thin block'>
                {recipesPerWeek} meals for {numOfPeople} people per week
              </p>
              <p className='font-thin block pb-2'>
                {recipesPerWeek * numOfPeople} total servings
              </p>
            </div>
            <div className='flex gap-2 flex-col price-summary-description'>
              <div className='flex justify-between pt-2'>
                <p className='font-thin'>Box price</p>
                <span>${totalPrice - shippingPrice}</span>{" "}
              </div>
              <div className='flex justify-between'>
                <p className='font-thin'>Price per serving</p>
                <span>${pricePerServing.toFixed(2)}</span>{" "}
                {/* Display price per serving, fixed to two decimals */}
              </div>
              <div className='flex justify-between'>
                <p className='font-thin'>Shipping price</p>
                <span>${shippingPrice}</span> {/* Display shipping price */}
              </div>
            </div>
          </div>
          <div className='bg-gray-200 price-summary-footer mb-6'>
            <div className='flex justify-between px-4 py-6'>
              <p className='font-light'>First box total</p>
              <span>${totalPrice}</span>{" "}
              {/* Display total price for the first box */}
            </div>
          </div>

          {/* Link to select the plan and proceed */}
          {loggedInUser?.userId ? (
            <button
              className='border block w-full text-center bg-custom-green py-2 text-md text-white border-custom-green rounded-sm'
              type='submit'
            >
              Select this plan
            </button>
          ) : (
            <Link
              href='/login'
              className='border block w-full text-center bg-custom-green py-2 text-md text-white border-custom-green rounded-sm'
            >
              Select this plan
            </Link>
          )}
        </div>
      </form>
    </div>
  );
};

export default Plans;
