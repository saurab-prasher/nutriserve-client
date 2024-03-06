import Link from "next/link";
import React from "react";
import Image from "next/image";
const HowItWorks = () => {
  return (
    <div className='container mx-auto py-8 my-12'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-light mb-4'>How it works</h1>
        <p className='description font-light'>
          Check out what our customers are saying about our healthy meals!
        </p>
      </div>

      <div className='flex justify-between '>
        <div className='text-center'>
          <div className='h-60 w-64 bg-slate-200 mb-4 mx-auto'>
            {" "}
            <Image
              alt='image of meal'
              style={{ objectFit: "contain" }}
              height={300}
              width={300}
              src={"/images/hiw-1.webp"}
            />
          </div>

          <div className=' text-center p-6'>
            <h4 className='text-xl mb-4 color-main'>Choose your meals</h4>
            <p className='block font-thin w-3/5 m-auto'>
              Curated, easy-to-follow recipes every week
            </p>
          </div>
        </div>
        <div className='text-center'>
          <div className='h-60 w-64 bg-slate-200 mb-4 mx-auto'>
            <Image
              alt='image of meal'
              style={{ objectFit: "contain" }}
              height={300}
              width={300}
              src={"/images/hiw-2.webp"}
            />
          </div>

          <div className=' text-center p-6'>
            <h4 className='text-xl mb-4 color-main'>Create the perfect box</h4>
            <p className='block font-thin w-3/5 m-auto'>
              Suit your lifestyle with a variety of Extras, including Garlic
              Bread
            </p>
          </div>
        </div>
        <div className='text-center'>
          <div className='h-60 w-64 bg-slate-200 mb-4 mx-auto'>
            <Image
              alt='image of meal'
              style={{ objectFit: "contain" }}
              height={300}
              width={300}
              src={"/images/hiw-3.webp"}
            />
          </div>

          <div className=' text-center p-6'>
            <h4 className='text-xl mb-4 color-main'>
              Get convenient weekly deliveries
            </h4>
            <p className='block font-thin w-3/5 m-auto'>
              Scheduling made easy, with drop-offs right at your door
            </p>
          </div>
        </div>
        <div className='text-center'>
          <div className='h-60 w-64 bg-slate-200 mb-4 mx-auto'>
            <Image
              alt='image of meal'
              style={{ objectFit: "contain" }}
              height={300}
              width={300}
              src={"/images/hiw-4.webp"}
            />
          </div>

          <div className=' text-center p-6'>
            <h4 className='text-xl mb-4 color-main'>
              Cook seasonal, fresh ingredients
            </h4>
            <p className='block font-thin w-3/5 m-auto'>
              Food made from scratch in the comfort of your kitchen
            </p>
          </div>
        </div>
      </div>
      <Link
        href='/plans'
        className='mx-auto cursor-pointer text-center block w-fit font-bold border m-auto bg-custom-green py-4 px-6 text-md text-white border-custom-green rounded-sm mb-4'
      >
        Get Offer
      </Link>

      <p className='text-center'>
        You can <span className='font-bold'>skip a week or cancel</span> at any
        time
      </p>
    </div>
  );
};

export default HowItWorks;
