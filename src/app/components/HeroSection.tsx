import React from "react";

const HeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className='text-center py-24 px-4'>
        <div className='max-w-screen-xl mx-auto'>
          <div className='mb-8'>
            <h1 className='text-4xl font-bold mb-4'>
              A healthy meal delivered to your door, every single day
            </h1>
            <p className='mb-8'>
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs. We have delivered 250,000+ meals last year!
            </p>
            <a
              href='login'
              className='bg-orange-500 text-white py-2 px-4 rounded-md mr-2'
            >
              Start eating well
            </a>
            <a
              href='#how'
              className='bg-transparent border-2 border-orange-500 hover:bg-orange-500 hover:text-white text-orange-500 py-2 px-4 rounded-md transition duration-150 ease-in-out'
            >
              Learn more ↓
            </a>
          </div>
          <div className='flex justify-center'></div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
