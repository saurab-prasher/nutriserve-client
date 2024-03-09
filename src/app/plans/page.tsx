"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const Plans = () => {
  const [numberOfPeople, setNumberOfPeople] = useState(2);
  const [recipesPerWeek, setRecipesPerWeek] = useState(3);
  const [pricingPlans, setPricingPlans] = useState<any>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [pricePerServing, setPricePerServing] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(0);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/pricing"); // Use your actual backend URL

        console.log(response);
        setPricingPlans(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching pricing data:", error);
      }
    };

    fetchPricing();
  }, []);

  useEffect(() => {
    // Calculate the total price based on the fetched pricing plans
    const selectedPlan = pricingPlans.find(
      (plan: any) =>
        plan.numberOfPeople === numberOfPeople &&
        plan.recipesPerWeek === recipesPerWeek
    );

    if (selectedPlan) {
      setPricePerServing(selectedPlan.pricePerServing);
      setShippingPrice(selectedPlan.shipping);
      setTotalPrice(
        selectedPlan.pricePerServing * numberOfPeople * recipesPerWeek +
          selectedPlan.shipping
      );
    }
  }, [numberOfPeople, recipesPerWeek, pricingPlans]);

  return (
    <div className='flex flex-col gap-8 shadow-md w-8/12 m-auto py-12 px-48 mb-12'>
      <h2 className='text-4xl text-center font-light tracking-wide mb-2'>
        Choose your plan size
      </h2>

      <p className='font-light'>
        We&apos;ll set this as your default plan size, but you can always change
        it later from week to week.
      </p>

      <div className='flex flex-col gap-5'>
        <div className='flex justify-between items-center'>
          <span className=' block w-3/6 font-light'>Number of people</span>

          <div className='flex w-9/12'>
            <button
              onClick={() => setNumberOfPeople(2)}
              className={`border cursor-pointer w-3/6 py-2 rounded-sm ${
                numberOfPeople === 2
                  ? "bg-custom-green text-white"
                  : "color-main"
              }`}
            >
              2
            </button>
            <button
              onClick={() => setNumberOfPeople(4)}
              className={`border cursor-pointer w-3/6 border-custom-green rounded-sm ${
                numberOfPeople === 4
                  ? "bg-custom-green text-white"
                  : "color-main"
              }`}
            >
              4
            </button>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <span className='font-light'>Recipes per week</span>

          <div className='flex'>
            <button
              onClick={() => setRecipesPerWeek(3)}
              className={`border w-36 py-2 cursor-pointer rounded-sm border-custom-green ${
                recipesPerWeek === 3 ? "bg-custom-green text-white" : ""
              }`}
            >
              3
            </button>
            <button
              onClick={() => setRecipesPerWeek(4)}
              className={`border cursor-pointer w-36 rounded-sm border-custom-green ${
                recipesPerWeek === 4 ? "bg-custom-green text-white" : ""
              }`}
            >
              4
            </button>
            <button
              onClick={() => setRecipesPerWeek(5)}
              className={`border cursor-pointer w-36 rounded-sm border-custom-green ${
                recipesPerWeek === 5 ? "bg-custom-green text-white" : ""
              }`}
            >
              5
            </button>
          </div>
        </div>
      </div>

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

          <div className=' flex gap-2 flex-col price-summary-description'>
            <div className='flex justify-between pt-2'>
              <p className='font-thin'>Box price</p> <span>${totalPrice}</span>
            </div>

            <div className='flex justify-between'>
              <p className='font-thin'>Price per serving</p>{" "}
              <span>${pricePerServing}</span>
            </div>

            <div className='flex justify-between'>
              <p className='font-thin'>Shipping price</p>{" "}
              <span>${shippingPrice}</span>
            </div>
          </div>
        </div>
        <div className='bg-gray-200 price-summary-footer mb-6'>
          <div className='flex justify-between px-4 py-6'>
            <p className='font-light'>First box total</p>
            <span>$135.89</span>
          </div>
        </div>

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
