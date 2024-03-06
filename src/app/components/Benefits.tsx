import React from "react";
import Link from "next/link";
const Benefits = () => {
  return (
    <div className='bg-[#f8f8f8]'>
      <div className='mt-12 mb-12  max-w-screen-lg mx-auto py-12'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-light mb-4'>Benefits</h1>
        </div>
        <div className='grid grid-cols-2 gap-12 gap-x-20'>
          <div>
            <span className='block font-semibold text-xl mb-4'>
              Deliciousness
            </span>
            <p className='font-light'>
              Our chef-created recipes are tested 200 times to ensure your meals
              are as delicious to eat as they are easy to make.
            </p>
          </div>

          <div>
            <span className='block font-semibold text-xl mb-4'>Simplicity</span>
            <p className='font-light'>
              From step-by-step recipes to no-hassle account changes, we make
              your life easier every way we can.
            </p>
          </div>

          <div>
            <span className='block font-semibold text-xl mb-4'>
              Flexibility
            </span>
            <p className='font-light'>
              We accommodate every appetite, household size, and schedule. Need
              to skip a week or cancel? No problem.
            </p>
          </div>

          <div>
            <span className='block font-semibold text-xl mb-4'>
              Stress-free
            </span>
            <p className='font-light'>
              Take back your evenings with fewer trips to the store, pre-planned
              meals, and little cleanup.
            </p>
          </div>
          <div>
            <span className='block font-semibold text-xl mb-4'>
              Dietarily diverse
            </span>
            <p className='font-light'>
              Picky appetites welcome! Tell us what you like and don’t like, and
              we’ll recommend something delicious.
            </p>
          </div>
          <div>
            <span className='block font-semibold text-xl mb-4'>No waste</span>
            <p className='font-light'>
              It’s easy being green with our pre-measured ingredients and
              recyclable materials.
            </p>
          </div>
        </div>
        <Link
          href='/plans'
          className='mx-auto cursor-pointer text-center block w-full font-bold border m-auto mt-16 bg-custom-green py-2 px-6 text-md text-white border-custom-green rounded-sm mb-4'
        >
          View our plans
        </Link>
      </div>
    </div>
  );
};

export default Benefits;
