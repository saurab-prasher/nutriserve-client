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
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <h2 className='text-3xl font-semibold text-center text-gray-800 mb-8'>
        How It Works
      </h2>

      {/* Step 1 */}
      <div className='mb-8'>
        <h3 className='text-xl font-semibold text-gray-700 mb-4'>
          Step 1: Choose Your Plan
        </h3>
        <p className='text-gray-600 mb-4'>
          Select the perfect nutrition plan for your lifestyle. We offer a
          variety of plans, from starter to complete, to fit your dietary needs
          and goals.
        </p>
        <PricingCard />
      </div>

      {/* Step 2 */}
      <div className='mb-8'>
        <h3 className='text-xl font-semibold text-gray-700 mb-4'>
          Step 2: Customize Your Meals
        </h3>
        <p className='text-gray-600'>
          Customize your meals from our wide range of healthy options, tailored
          to your preferences and nutritional needs. You can change your meal
          choices at any time.
        </p>
      </div>

      {/* Step 3 */}
      <div className='mb-8'>
        <h3 className='text-xl font-semibold text-gray-700 mb-4'>
          Step 3: Schedule Your Delivery
        </h3>
        <p className='text-gray-600'>
          Choose a delivery schedule that works for you. We offer flexible
          delivery options to ensure you always have fresh and delicious meals
          ready when you are.
        </p>
      </div>

      {/* Step 4 */}
      <div>
        <h3 className='text-xl font-semibold text-gray-700 mb-4'>
          Step 4: Enjoy and Achieve Your Goals
        </h3>
        <p className='text-gray-600'>
          Enjoy your delicious, chef-prepared meals. Follow your personalized
          meal plan, achieve your health goals, and start living a healthier
          lifestyle today!
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;
