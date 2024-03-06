import React from "react";

const Plans = () => {
  return (
    <div className='flex flex-col gap-8 shadow-md w-8/12 m-auto py-12 px-48'>
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
            <button className='border w-3/6 py-2 bg-custom-green rounded-sm text-white border-custom-green'>
              2
            </button>
            <button className='border w-3/6 border-custom-green rounded-sm'>
              4
            </button>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <span className='font-light'>Recipes per week</span>

          <div className='flex'>
            <button className='border w-36 py-2  rounded-sm  border-custom-green'>
              3
            </button>
            <button className='border w-36 bg-custom-green text-white border-custom-green rounded-sm'>
              4
            </button>
            <button className='border w-36 border-custom-green rounded-sm'>
              5
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className='price-summary border border-gray-200 rounded-sm p-4 border-b-0 rounded-b-none'>
          <div className='flex flex-col gap-2 price-summary-header border-b border-gray-300'>
            <h5 className='font-semibold'>Price Summary</h5>
            <p className='font-thin block'>5 meals for 2 people per week</p>
            <p className='font-thin block pb-2'>10 total servings</p>
          </div>

          <div className=' flex gap-2 flex-col price-summary-description'>
            <div className='flex justify-between pt-2'>
              <p className='font-thin'>Box price</p> <span>$124.90</span>
            </div>

            <div className='flex justify-between'>
              <p className='font-thin'>Price per serving</p> <span>$12.49</span>
            </div>

            <div className='flex justify-between'>
              <p className='font-thin'>Shipping price</p> <span>$10.99</span>
            </div>
          </div>
        </div>
        <div className='bg-gray-200 price-summary-footer mb-6'>
          <div className='flex justify-between px-4 py-6'>
            <p className='font-light'>First box total</p>
            <span>$135.89</span>
          </div>
        </div>

        <button className='border w-full bg-custom-green py-2 text-md text-white border-custom-green rounded-sm'>
          Select this plan
        </button>
      </div>
    </div>
  );
};

export default Plans;
