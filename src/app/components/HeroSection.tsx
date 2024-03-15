import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className='relative h-max '>
      <div className='absolute top-0 left-0 w-full h-full'>
        <Image
          src='/images/heroSection.jpg'
          alt='Healthy Food'
          layout='fill'
          objectFit='cover'
          quality={100}
        />

        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60'></div>
      </div>

      <div className=' mx-auto px-6 pt-32 pb-56 text-white z-20 relative'>
        <div className=' container mx-auto px-48 flex flex-col gap-8'>
          <h2 className='text-6xl  font-light tracking-wide'>
            Healthy Meals Delivered to Your Door
          </h2>
          <p className='text-2xl mt-4  text-white font-light tracking-wide'>
            Discover your perfect meal plan. Tailored to your personal tastes
            and nutritional needs.
          </p>

          <div>
            <Link
              className='mt-4 bg-[#FFA726] text-base text-[#f4f4f4] px-4 py-4  inline-block rounded hover:bg-[#d19844] transition duration-200'
              href='/plans'
            >
              Get Started
            </Link>
            <Link
              className='mt-4 ml-6 bg-[#4CAF50] text-base text-white px-4 py-4  inline-block rounded hover:bg-[#2f8f32] transition duration-200'
              href='/login'
            >
              Know more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
