const PricingCard = () => {
  return (
    <div className='max-w-xl w-full mx-auto flex gap-4 mt-16 mb-16'>
      {/* Starter Plan */}
      <div className='bg-white shadow-lg rounded-lg p-6 flex-1'>
        <h3 className='text-lg font-semibold text-gray-700'>STARTER</h3>
        <p className='text-4xl font-bold my-4'>$399</p>
        <p className='text-gray-500'>per month. That's just $13 per meal!</p>
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
        <p className='text-gray-500'>per month. That's just $11 per meal!</p>
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

export default PricingCard;
