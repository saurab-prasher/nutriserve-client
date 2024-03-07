import React from "react";
import Link from "next/link";
import Image from "next/image";
const GoodForYou = () => {
  return (
    <div className='bg-gray-100'>
      <div className=' mx-auto container p-8 grid grid-cols-2 '>
        <div className='image-content relative'>
          <Image
            alt='avatar image'
            style={{ objectFit: "contain" }}
            src={"/images/gfy-1.webp"}
            width={500}
            height={500}
          />
        </div>

        <div className='text-content'>
          <h2 className='text-4xl font-light my-12'>
            Good for you. Better for the planet. Best for your wallet.
          </h2>
          <div className='flex gap-6 flex-col'>
            <div>
              <p className='font-light'>
                <span className='block font-semibold'>Time saver</span> We
                deliver everything you need to create delicious dinners from
                scratch so you spend less time shopping!
              </p>
            </div>
            <div>
              <p className='font-light'>
                <span className='block font-semibold'>Value for money</span>
                We work closely with our trusted suppliers to source fresh,
                high-quality ingredients.
              </p>
            </div>
            <div>
              <p className='font-light'>
                <span className='block font-semibold'>Reducing food waste</span>
                We provide the exact amount of ingredients you need for your
                recipes to help you cut back on food waste.
              </p>
            </div>
          </div>

          <Link
            className='mt-12 block cursor-pointer text-center w-full font-bold border m-auto bg-custom-green py-2 px-6 text-md text-white border-custom-green rounded-sm mb-4'
            href='/plans'
          >
            Get Offer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GoodForYou;
