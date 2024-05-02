"use client";

import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { MyContext } from "../context/Context"; // Importing context for global state management

const Plans = () => {
  const router = useRouter();
  // State variables for the component
  const [numOfPeople, setNumOfPeople] = useState(2); // Number of people for the plan
  const [recipesPerWeek, setRecipesPerWeek] = useState(3); // Number of recipes per week
  const [pricingPlans, setPricingPlans] = useState([]); // Array to hold pricing plans fetched from the server
  const [totalPrice, setTotalPrice] = useState(0); // Total price for the selected plan
  const [pricePerServing, setPricePerServing] = useState(0); // Price per serving based on the selected plan
  const [shippingPrice, setShippingPrice] = useState(0); // Shipping price based on the selected plan
  const [planName, setPlanName] = useState("Duo Delight");
  const [planDescription, setPlanDescription] = useState("");

  const { serverUrl, loggedInUser } = useContext(MyContext);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const response = await axios.get(`${serverUrl}/api/pricing`); // Fetching pricing plans
        const data = response.data;
        setPricingPlans(data);

        data.map((plan) => {
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
    };

    fetchPricing();
  }, [serverUrl]);

  // Calculate total price whenever the number of people, recipes per week, or pricing plans change
  useEffect(() => {
    const selectedPlan = pricingPlans.find(
      (plan) => plan.numberOfPeople === numOfPeople
    ); // Find the pricing plan that matches user selection

    // If a matching plan is found, update pricing information in the state
    if (selectedPlan) {
      setPlanName(selectedPlan.planName);
      setPricePerServing(selectedPlan.pricePerServing);
      setShippingPrice(selectedPlan.shipping);
      setTotalPrice(
        selectedPlan.pricePerServing * numOfPeople * recipesPerWeek +
          selectedPlan.shipping
      );

      setPlanDescription(selectedPlan.description);
    }
  }, [numOfPeople, recipesPerWeek, pricingPlans]);

  async function handlePlanSubmit(e) {
    e.preventDefault();

    try {
      const formData = new FormData();
      console.log(planName);
      formData.append("planName", planName);
      formData.append("numOfPeople", numOfPeople);
      formData.append("recipesPerWeek", recipesPerWeek);
      formData.append("totalPrice", totalPrice);

      const { data } = await axios.post(`${serverUrl}/users/setplan`, formData);
      router.push("/meals");
    } catch (error) {
      console.log(error);
    }
  }

  // The rendered component
  return (
    <div className='flex flex-col gap-8 shadow-md w-9/12 m-auto py-12 px-48 mb-12'>
      {/* Title and introductory text */}
      <h2 className='text-4xl text-center font-light tracking-wide mb-2'>
        Choose your plan size
      </h2>
      <p className='font-light'>
        We&apos;ll set this as your default plan size, but you can always change
        it later from week to week.
      </p>

      <form action='' onSubmit={handlePlanSubmit}>
        {/* Buttons for selecting the number of people and recipes per week */}
        <div className='flex flex-col gap-5'>
          <div className='flex justify-between items-center'>
            <span className='block w-3/6 font-light'>Plan name</span>
            <p>{planName}</p>
          </div>

          <div className='flex justify-between items-center'>
            <span className='block max-w-26 font-light'>Plan description</span>
            <p className='font-light text-sm'>{planDescription}</p>
          </div>
          {/* Selection for number of people */}
          <div className='flex justify-between items-center'>
            <span className='block w-3/6 font-light'>Number of people</span>
            <div className='flex w-9/12'>
              {/* Buttons to select the number of people */}
              {pricingPlans.map(({ numberOfPeople }) => (
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
            <button
              // href='/login'
              className='border block w-full text-center bg-custom-green py-2 text-md text-white border-custom-green rounded-sm'
            >
              Select this plan
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Plans;
