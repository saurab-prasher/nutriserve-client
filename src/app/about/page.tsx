import React from "react";
import Image from "next/legacy/image";

const AboutUs = () => {
  return (
    <section className='relative mb-24'>
      <div className='relative h-max '>
        <Image
          src='/images/about-us.png'
          alt='Sample Image'
          layout='responsive'
          width={1800}
          height={1200}
        />
      </div>

      <div className='absolute top-0 left-0 w-full h-full flex items-center justify-normal'>
        <div className='text-black pl-40'>
          <h1 className='text-6xl font-thin-200 tracking-wide'>Our Mission</h1>
          <p className='text-lg md:text-xl mt-4'>
            We change the way people eat forever
          </p>
        </div>
      </div>

      <div className='absolute bottom-5 left-0 w-full top-50'>
        <div className='flex justify-center gap-8'>
          <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <div className='px-6 py-4 bg-white'>
              <h2 className='text-2xl font-bold mb-4 text-green-700'>
                Who We Are
              </h2>
              <p className='text-gray-700 text-base'>
                NutriServe is dedicated to empowering individuals to make
                informed, health-conscious decisions about their meals and
                lifestyle. Founded in [Year], we&apos;ve grown from a small team
                of nutrition enthusiasts to a leading provider in nutritional
                planning and advice.
              </p>
            </div>
          </div>

          <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <div className='px-6 py-4 bg-white'>
              <h2 className='text-2xl font-bold mb-4  text-green-700 '>
                Our Mission
              </h2>
              <p className='text-gray-700 text-base'>
                NutriServe is dedicated to empowering individuals to make
                informed, health-conscious decisions about their meals and
                lifestyle. Founded in [Year], we&apos;ve grown from a small team
                of nutrition enthusiasts to a leading provider in nutritional
                planning and advice.
              </p>
            </div>
          </div>

          <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <div className='px-6 py-4 bg-white'>
              <h2 className='text-2xl font-bold mb-4  text-green-700'>
                Why Choose Us
              </h2>
              <p className='text-gray-700 text-base'>
                NutriServe is dedicated to empowering individuals to make
                informed, health-conscious decisions about their meals and
                lifestyle. Founded in [Year], we&apos;ve grown from a small team
                of nutrition enthusiasts to a leading provider in nutritional
                planning and advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
