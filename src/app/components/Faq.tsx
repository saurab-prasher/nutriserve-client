import React from "react";

const Faq = () => {
  return (
    <div className='mt-12 mb-12  max-w-screen-lg mx-auto py-12'>
      <div className='border-b-2 border-gray-50'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-light mb-4'>
            {" "}
            Frequently Asked Questions
          </h1>
          <p className='description font-light'>
            Check out what our customers are saying about our healthy meals!
          </p>
        </div>
        <div className='questions border-y-2 border-gray-50 py-8'>
          <p className='block mb-4'>Are there any commitments?</p>
          <p className='block text-sm'>
            Yes! You can choose your meals every week.
          </p>
        </div>
        <div className='questions border-y-2 border-gray-50 py-8'>
          <p className='block mb-4'>What if I&apos;m not home?</p>
          <p className='block text-sm'>
            Delivery times are from 8 am to 8 pm on the day you choose. If
            you’re not at home, don’t worry! You can always add special delivery
            instructions to your account. You can also change your delivery day
            online if you need to.
          </p>
        </div>
        <div className='questions border-y-2 border-gray-50 py-8'>
          <p className='block mb-4'>How will my food stay cool?</p>
          <p className='block text-sm'>
            We carefully handpack all ingredients with special ice packs and
            insulation, so your food keeps cool until you get home.
          </p>
        </div>
        <div className='questions border-y-2 border-gray-50 py-8'>
          <p className='block mb-4'>
            What if there are certain foods I don&apos;t eat?
          </p>
          <p className='block text-sm'>
            Every recipe comes with detailed nutritional information, including
            food allergies. You can find this info on all recipe cards and
            online when you choose your meals.
          </p>
        </div>
        <div className='questions border-y-2 border-gray-50 py-8'>
          <p className='block mb-4'>
            What if I don&apos;t want a delivery every week?
          </p>
          <p className='block text-sm'>
            No worries. You can easily skip a week (or several!) when you need
            to. Just be sure to do so by your cutoff: 11:59 pm PST, 5 days prior
            to your delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
