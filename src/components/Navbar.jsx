// src/components/Navbar.jsx

import React from 'react';
import { useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { FiFeather, FiMenu} from 'react-icons/fi';
import { useDarkMode } from './DarkMode';
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate, useLocation } from "react-router-dom";
import logo from '../assets/logoGreen.png';


const Navbar = ({ hideAuthButtons = false }) => {
  const { dark: darkMode, toggle: toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    if (location.pathname !== "/") {
      // Go to homepage, then scroll after short delay
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100); // Give React time to render
    } else {
      // Already on home page, scroll directly
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 bg-white text-green-950 shadow-md dark:bg-gray-900`}>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 relative">

          {/* Logo and Name */}
          <Link to="/home" className="flex items-center space-x-2 cursor-pointer">
            <img src={logo} alt="Seydam AI logo" className="h-14" />
            {/* <span className="text-2xl font-bold">Seydam AI</span> */}
          </Link>

        {/* Navigation links */}
        <div className="hidden md:flex space-x-6 text-lg">
        <span
        onClick={() => handleNavClick("home")}
        className="cursor-pointer hover:text-green-400 "
        >
        Home
        </span>

        <span
        onClick={() => handleNavClick("pricing")}
        className="cursor-pointer hover:text-green-400"
        >
        Pricing
        </span>

        <span
          onClick={() => handleNavClick("services")}
          className="cursor-pointer hover:text-green-400"
        >
          Services
        </span>

        </div>

        {/* Right Section */}
          <div className="flex items-center md:space-x-6">
          {/* Show Sign Up + Hamburger on small screens only */}
          <div className="flex items-center md:hidden space-x-2 px-2">
          {!menuOpen && (
            <>
              {!hideAuthButtons && (
                <Link to="/signup" onClick={() => setMenuOpen(false)}>
                  <button className="bg-white text-green-600 text-lg font-semibold px-3 py-1 rounded hover:bg-green-100">
                    Sign Up
                  </button>
                </Link>
              )}
              <button onClick={() => setMenuOpen(true)}>
                <FiMenu className="w-6 h-6 text-green-600" />
              </button>
            </>
          )}
        </div>

      {/* Desktop Login & Get Started */}
      {!hideAuthButtons && (
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <button className="px-4 py-2 text-green-600 text-lg rounded-lg hover:bg-green-100 transition duration-200">
              Login
            </button>
          </Link>
          <Link to="/get-started">
            <button className="flex items-center gap-2 px-6 py-3 bg-green-700 text-white rounded-md hover:bg-green-800 transition duration-200">
              Get Started
              <FiFeather className="text-white" />
            </button>
          </Link>
        </div>
      )}

      {/* Dark Mode Toggle */}
      <button 
        onClick={toggleDarkMode}
        className="hidden md:block p-2 text-gray-600 hover:text-green-600 transition-colors duration-200"
        title="Toggle Dark Mode"
      >
        {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
      </button>
      </div>

        </div>
      </div>

      {/* slideDown Menu */}
      {menuOpen && (
        <>
          {/* Makes the entire body dull when slidedown menu is activated */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-30"
            onClick={() => setMenuOpen(false)}
          ></div>
          {/* end */}

          <div className="md:hidden absolute top-0 left-0 w-full bg-gray-100 dark:bg-gray-800 z-40 shadow-lg animate-slideDown">
            <div className="flex justify-between items-center px-4 py-3 border-b border-green-300">
              {/* <div className="flex items-center space-x-2">
                <img src="logo.png" alt="Seydam AI logo" className="h-6 w-6" />
                <span className="text-xl font-semibold">Seydam AI</span>
              </div> */}

              <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 cursor-pointer">
                <img src={logo} alt="Seydam AI logo" className="h-14" />
                {/* <span className="text-2xl font-bold">Seydam AI</span> */}
              </Link>

              <div className='flex items-center space-x-2'>
                <button onClick={toggleDarkMode}
                  className="block p-2  text-green-600 hover:text-green-100 transition-colors duration-200"
                  title="Toggle Dark Mode"
                >
                  {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
                </button>

                <button onClick={() => setMenuOpen(false)}>
                  <svg className="w-6 h-6 text-green-600 hover:text-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
            </div>
            <div className="flex flex-col items-center space-y-4 px-6 py-4 text-green-600">
              {!hideAuthButtons && (
                <>
                  <Link to="/login" onClick={() => setMenuOpen(false)} className="hover:text-green-300">Login</Link>
                  <Link to="/get-started" onClick={() => setMenuOpen(false)}>
                    <button className="flex items-center gap-2 px-6 py-3 bg-green-700 text-white rounded-md hover:bg-green-800 active:bg-green-900 transition duration-200">
                      Get Started
                      <FiFeather className="text-white" />
                    </button>
                  </Link>
                  {/* <Link to="/signup" onClick={() => setMenuOpen(false)} className="hover:text-green-300">Sign Up</Link> */}

                  {/* stroke in between */}
                  <div className="items-center px-8 border-b border-green-300"></div>
                </>
              )}
              
              {/* nav-links */}
              <>
                <span onClick={() => { handleNavClick("home"); setMenuOpen(false); }} className="cursor-pointer hover:text-green-300">Home</span>
                <span onClick={() => { handleNavClick("pricing"); setMenuOpen(false); }} className="cursor-pointer hover:text-green-300">Pricing</span>
                <span onClick={() => { handleNavClick("services"); setMenuOpen(false); }} className="cursor-pointer hover:text-green-300">Services</span>
              </>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
