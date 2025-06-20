import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden py-24 transition-colors duration-300">

    {/* Top‑left rotated square */}
    {/* <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-200 rotate-45 opacity-50" /> */}

    {/* Top‑right circle */}
    <div className="absolute -top-32 -right-16 w-60 h-64 bg-green-200 rounded-full opacity-30" />

    {/*bottom-left rotated square */}
    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-green-200 rotate-45 opacity-30" />


    {/* bottom-right circle */}
    {/* <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-green-200 rounded-full opacity-50" /> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white lg:mt-3">
          Pricing Plans
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Pick the plan that best fits your technical report needs.
        </p>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
          {/* Free Tier */}
          <div className="border-1 border-green-400 rounded-lg p-6 shadow-xl flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white ">Free</h3>
            <p className="mt-4 text-4xl font-extrabold text-gray-900 dark:text-white">
            &#8358;0
            {/* <span className="text-xl font-medium">/mo</span> */}
            </p>
            <ul className="mt-6 space-y-4 text-gray-600 dark:text-white flex-1">
              <li>Decent Model</li>
              <li>⁠5 references per report</li>
              <li>⁠Limited amount of tokens</li>
            </ul>
            <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition">
              Choose Free
            </button>
          </div>

          {/* Special Tier (Highlighted) */}
          <div className="border-1 border-purple-500 rounded-lg p-6 shadow-xl flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Special</h3>
            <p className="mt-4 text-4xl font-extrabold text-gray-900 dark:text-white">
            &#8358;30k
            {/* <span className="text-xl font-medium">/mo</span> */}
            </p>
            <ul className="mt-6 space-y-4 text-gray-600 dark:text-white flex-1">
              <li>Smart Model</li>
              <li>⁠25 references per report</li>
              <li>1 million tokens</li>
            </ul>
            <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition">
              Choose Special
            </button>
          </div>

          {/* Premium Tier */}
          <div className="border-1 border-amber-500 rounded-lg p-6 shadow-xl flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Premium</h3>
            <p className="mt-4 text-4xl font-extrabold text-gray-900 dark:text-white">
            &#8358;45k
            {/* <span className="text-xl font-medium">/mo</span> */}
            </p>
            <ul className="mt-6 space-y-4 text-gray-600 dark:text-white flex-1">
              <li>Smart model</li>
              <li>⁠60 references per report</li>
              <li>⁠2 million tokens</li>
              <li>⁠Presentation Slides for report</li>              
            </ul>
            <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition">
              Choose Premium
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
