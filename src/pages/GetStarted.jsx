// src/pages/Login.jsx
import React from 'react';
import Navbar from '../components/Navbar';

const GetStarted = () => {
    return (
        <>
          <Navbar hideAuthButtons={true} />
          {/* Top‑left rotated square */}
          <div className="absolute -top-1 -left-10 w-40 h-40 bg-green-200 rotate-45 opacity-50" />
          {/* bottom-right circle */}
          <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-green-200 rounded-full opacity-30" />
          <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-900 transition-colors duration-300 pt-20">
            <h1 className="text-4xl font-bold text-green-700 dark:text-green-400 animate-pulse">
                Coming Soon...
            </h1>
          </div>
        </>
      );
  };
  
  export default GetStarted;
  