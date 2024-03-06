import Image from "next/image";
import Link from "next/link";
import Benefits from "../components/Benefits";
import Faq from "../components/Faq";
const PricingCard = () => {
  return (
    <div className='max-w-xl w-full mx-auto flex gap-4 mt-16 mb-16'>
      {/* Starter Plan */}
      <div className='bg-white shadow-lg rounded-lg p-6 flex-1'>
        <h3 className='text-lg font-semibold text-gray-700'>STARTER</h3>
        <p className='text-4xl font-bold my-4'>$399</p>
        <p className='text-gray-500'>
          per month. That&apos;s just $13 per meal!
        </p>
        <ul className='my-6'>
          <li className='text-gray-700 my-2 flex items-center'>
            <span className='text-green-500 mr-2'>✓</span> 1 meal per day
          </li>
          <li className='text-gray-700 my-2 flex items-center'>
            <span className='text-green-500 mr-2'>✓</span> Order from 11am and
            9pm
          </li>
          <li className='text-gray-700 my-2 flex items-center'>
            <span className='text-green-500 mr-2'>✓</span> Delivery is free
          </li>
          <li className='text-gray-700 my-2 flex items-center'>
            <span className='text-red-500 mr-2'>✕</span>
          </li>
        </ul>
        <button className='bg-orange-500 text-white rounded-lg px-6 py-2 font-semibold'>
          Start eating well
        </button>
      </div>

      {/* Complete Plan */}
      <div className='bg-white shadow-lg rounded-lg p-6 flex-1 relative'>
        <div className='absolute top-0 right-0 bg-yellow-400 text-white py-1 px-3 rounded-bl-lg'>
          BEST VALUE
        </div>
        <h3 className='text-lg font-semibold text-gray-700'>COMPLETE</h3>
        <p className='text-4xl font-bold my-4'>$649</p>
        <p className='text-gray-500'>
          per month. That&apos;s just $11 per meal!
        </p>
        <ul className='my-6'>
          <li className='text-gray-700 my-2 flex items-center'>
            <span className='text-green-500 mr-2'>✓</span> 2 meals per day
          </li>
          <li className='text-gray-700 my-2 flex items-center'>
            <span className='text-green-500 mr-2'>✓</span> Order 24/7
          </li>
          <li className='text-gray-700 my-2 flex items-center'>
            <span className='text-green-500 mr-2'>✓</span> Delivery is free
          </li>
          <li className='text-gray-700 my-2 flex items-center'>
            <span className='text-green-500 mr-2'>✓</span> Get access to latest
            recipes
          </li>
        </ul>
        <button className='bg-orange-500 text-white rounded-lg px-6 py-2 font-semibold'>
          Start eating well
        </button>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <>
      <div className='max-w-screen-lg mx-auto px-4 py-8'>
        <h1 className='text-6xl text-center font-light tracking-wide mb-24'>
          How NutriServe works
        </h1>

        <div className='grid grid-rows-2  gap-24'>
          <div className='grid grid-cols-2 gap-12 '>
            <div>
              <Image
                alt='how it works plan'
                src={"/images/hiw-plan.avif"}
                height={500}
                width={500}
              />
            </div>

            <div className='flex flex-col'>
              <p>
                <span className='text-3xl block mb-4'>1. Pick a plan</span>
                Whether cooking for yourself or your household, we have a
                flexible plan to match your lifestyle. Need to cancel, change
                meals, or skip a week? Not a problem. Get started
              </p>
              <Link
                href='/plans'
                className='mx-auto cursor-pointer text-center block w-full font-bold border m-auto bg-custom-green py-2 px-6 text-md text-white border-custom-green rounded-sm mb-4'
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-12'>
            <div className='flex flex-col'>
              <p>
                <span className='text-3xl block mb-4'>
                  2. Get your delivery
                </span>
                Each week you’ll open simple step-by-step recipes complete with
                nutritional information and fresh, pre-measured ingredients to
                get you whipping up delicious dinners in no time.
              </p>
              <Link
                href='/plans'
                className='mx-auto cursor-pointer text-center block w-full font-bold border m-auto bg-custom-green py-2 px-6 text-md text-white border-custom-green rounded-sm mb-4'
              >
                Get Started
              </Link>
            </div>

            <div>
              <Image
                alt='how it works plan'
                src={"/images/hiw-delivery.avif"}
                height={500}
                width={500}
              />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-12'>
            <div className='flex flex-col'>
              <Image
                alt='how it works plan'
                src={"/images/hiw-family.avif"}
                height={500}
                width={500}
              />
            </div>

            <div className='flex flex-col'>
              <p>
                <span className='text-3xl block mb-4'>
                  3. Cook, eat, enjoy!
                </span>
                The old “what do you want to eat?” conversation is about to be
                banished from your life. Welcome to a world where dinner is
                always planned, simple, and delicious.
              </p>
              <Link
                href='/plans'
                className='mx-auto cursor-pointer text-center block w-full font-bold border m-auto bg-custom-green py-2 px-6 text-md text-white border-custom-green rounded-sm mb-4'
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Benefits />
      <Faq />
    </>
  );
};

export default HowItWorks;
