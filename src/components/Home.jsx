import React from 'react';
import { FiFeather  } from 'react-icons/fi';
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <section id="home" className="relative bg-white overflow-hidden text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Top‑left rotated square */}
      {/* <div className="absolute -top-12 -left-28 w-72 h-72 bg-green-200 rotate-45 opacity-30" /> */}
      <div className="absolute -top-1 -left-10 w-52 h-52 bg-green-200 rotate-45 opacity-30" />
      {/* bottom‑left rotated square */}
      {/* <div className="absolute -bottom-11 -left-12 w-40 h-40 bg-green-200 rotate-45 opacity-50" /> */}


      {/* Top‑right circle */}
      {/* <div className="absolute -top-32 -right-16 w-60 h-64 bg-green-100 rounded-full opacity-50" /> */}
      {/* Bottom‑right circle */}
      <div className="absolute -bottom-32 -right-16 w-60 h-60 bg-green-200 rounded-full opacity-30" />
      

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight pt-14 dark:text-white">
        Get your{" "}
        <span className="inline-block text-green-600">
            <Typewriter
              options={{
                strings: ['technical', 'project', 'business', 'research', 'design'],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 75,
              }}
            />{" "}
          </span><br className='md:hidden' /> report
          <br className='hidden md:block' /> handled <span className="text-green-600">swiftly</span>
        </h1>

        {/* <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Leverage cutting‑edge AI to draft, research, and polish your final year project —  
          save time and focus on what matters.
        </p> */}

        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
        From Idea to Report—Smarter, Faster.
        </p>        

        <div className="flex justify-center mt-6">
          <Link to="/get-started">
              <button className="flex items-center gap-2 px-6 py-3 bg-green-700 text-white rounded-md hover:bg-green-800 active:bg-green-900 transition duration-200">
              Get Started
              <FiFeather className="text-white" />
              </button>
          </Link>
        </div>

    </div>
    </section>
  );
};

export default Home;
