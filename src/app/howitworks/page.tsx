import Image from "next/legacy/image";
import Link from "next/link";
import Benefits from "../components/Benefits";
import Faq from "../components/Faq";

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
                height={450}
                width={550}
                object-fit='contain'
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
                className=' cursor-pointer text-center block w-full font-bold border mt-56 bg-custom-green py-2 px-6 text-md text-white border-custom-green rounded-sm mb-4'
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
                Each week you&apos;n and fresh, pre-measured ingredients to get
                you whipping up delicious dinners in no time.
              </p>
              <Link
                href='/plans'
                className='mt-60 cursor-pointer text-center block w-full font-bold border  bg-custom-green py-2 px-6 text-md text-white border-custom-green rounded-sm mb-4'
              >
                Get Started
              </Link>
            </div>

            <div>
              <Image
                alt='how it works plan'
                src={"/images/hiw-delivery.avif"}
                height={450}
                width={550}
                object-fit='contain'
              />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-12'>
            <div className='flex flex-col'>
              <Image
                alt='how it works plan'
                src={"/images/hiw-family.avif"}
                height={450}
                width={550}
                object-fit='contain'
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
                className=' cursor-pointer text-center block w-full font-bold border mt-56 bg-custom-green py-2 px-6 text-md text-white border-custom-green rounded-sm mb-4'
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
