// Use 'use client' for Edge Functions in Next.js to run the code client-side
"use client";

import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import axios from "axios";
import { MyContext } from "../context/Context"; // Importing context for global state management

const Plans = () => {
  // State variables for the component
  const [numberOfPeople, setNumberOfPeople] = useState(2); // Number of people for the plan
  const [recipesPerWeek, setRecipesPerWeek] = useState(3); // Number of recipes per week
  const [pricingPlans, setPricingPlans] = useState([]); // Array to hold pricing plans fetched from the server
  const [totalPrice, setTotalPrice] = useState(0); // Total price for the selected plan
  const [pricePerServing, setPricePerServing] = useState(0); // Price per serving based on the selected plan
  const [shippingPrice, setShippingPrice] = useState(0); // Shipping price based on the selected plan

  const { serverUrl } = useContext(MyContext); // Getting the server URL from context

  // Fetch pricing plans from the server
  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const response = await axios.get(`${serverUrl}/api/pricing`); // Fetching pricing plans
        setPricingPlans(response.data); // Setting the fetched plans to state
      } catch (error) {
        console.error("Error fetching pricing data:", error); // Logging any errors
      }
    };

    fetchPricing();
  }, [serverUrl]);

  // Calculate total price whenever the number of people, recipes per week, or pricing plans change
  useEffect(() => {
    const selectedPlan = pricingPlans.find(
      (plan) =>
        plan.numberOfPeople === numberOfPeople &&
        plan.recipesPerWeek === recipesPerWeek
    ); // Find the pricing plan that matches user selection

    // If a matching plan is found, update pricing information in the state
    if (selectedPlan) {
      setPricePerServing(selectedPlan.pricePerServing);
      setShippingPrice(selectedPlan.shipping);
      setTotalPrice(
        selectedPlan.pricePerServing * numberOfPeople * recipesPerWeek +
          selectedPlan.shipping
      );
    }
  }, [numberOfPeople, recipesPerWeek, pricingPlans]);

  // The rendered component
  return (
    <div className='flex flex-col gap-8 shadow-md w-8/12 m-auto py-12 px-48 mb-12'>
      {/* Title and introductory text */}
      <h2 className='text-4xl text-center font-light tracking-wide mb-2'>
        Choose your plan size
      </h2>
      <p className='font-light'>
        We&apos;ll set this as your default plan size, but you can always change
        it later from week to week.
      </p>

      {/* Buttons for selecting the number of people and recipes per week */}
      <div className='flex flex-col gap-5'>
        {/* Selection for number of people */}
        <div className='flex justify-between items-center'>
          <span className='block w-3/6 font-light'>Number of people</span>
          <div className='flex w-9/12'>
            {/* Buttons to select the number of people */}
            {[2, 4].map((num) => (
              <button
                key={num}
                onClick={() => setNumberOfPeople(num)}
                className={`border cursor-pointer w-3/6 py-2 rounded-sm ${
                  numberOfPeople === num
                    ? "bg-custom-green text-white"
                    : "color-main"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
        {/* Selection for number of recipes per week */}
        <div className='flex justify-between items-center'>
          <span className='font-light'>Recipes per week</span>
          <div className='flex'>
            {/* Buttons to select the number of recipes per week */}
            {[3, 4, 5].map((num) => (
              <button
                key={num}
                onClick={() => setRecipesPerWeek(num)}
                className={`border w-36 py-2 cursor-pointer rounded-sm border-custom-green ${
                  recipesPerWeek === num ? "bg-custom-green text-white" : ""
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Price summary section */}
      <div>
        <div className='price-summary border border-gray-200 rounded-sm p-4 border-b-0 rounded-b-none'>
          <div className='flex flex-col gap-2 price-summary-header border-b border-gray-300'>
            <h5 className='font-semibold'>Price Summary</h5>
            <p className='font-thin block'>
              {recipesPerWeek} meals for {numberOfPeople} people per week
            </p>
            <p className='font-thin block pb-2'>
              {recipesPerWeek * numberOfPeople} total servings
            </p>
          </div>
          <div className='flex gap-2 flex-col price-summary-description'>
            <div className='flex justify-between pt-2'>
              <p className='font-thin'>Box price</p>
              <span>${totalPrice - shippingPrice}</span>{" "}
              {/* Display box price without shipping */}
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
        <Link
          href='/login'
          className='border block w-full text-center bg-custom-green py-2 text-md text-white border-custom-green rounded-sm'
        >
          Select this plan
        </Link>
      </div>
    </div>
  );
};

export default Plans;
