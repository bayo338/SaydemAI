// src/components/Navbar.jsx

import React from 'react';
import { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useDarkMode } from './DarkMode';
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate, useLocation } from "react-router-dom";
import { FiFeather, FiMenu} from 'react-icons/fi';


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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 bg-green-600 text-white shadow-md ${darkMode ? 'bg-gray-900' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 relative">

          {/* Logo and Name */}
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <img src="logo.png" alt="Seydam AI logo" className="h-8 w-8" />
            <span className="text-2xl font-bold">Seydam AI</span>
          </Link>

        {/* Navigation links */}
        <div className="hidden md:flex space-x-6">
        <span
        onClick={() => handleNavClick("home")}
        className="cursor-pointer hover:text-green-300"
        >
        Home
        </span>

        <span
        onClick={() => handleNavClick("pricing")}
        className="cursor-pointer hover:text-green-300"
        >
        Pricing
        </span>

        <span
          onClick={() => handleNavClick("services")}
          className="cursor-pointer hover:text-green-300"
        >
          Services
        </span>

          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4 md:space-x-6">
          {/* Show Sign Up + Hamburger on small screens only */}
          <div className="flex items-center md:hidden space-x-2">
          {!menuOpen && (
            <>
              {!hideAuthButtons && (
                <Link to="/signup" onClick={() => setMenuOpen(false)}>
                  <button className="bg-white text-green-700 px-3 py-1 rounded hover:bg-green-100 text-sm">
                    Sign Up
                  </button>
                </Link>
              )}
              <button onClick={() => setMenuOpen(true)}>
                <FiMenu className="w-6 h-6 text-white" />
              </button>
            </>
          )}
        </div>

      {/* Desktop Login & Get Started */}
      {!hideAuthButtons && (
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <button className="px-4 py-2 text-green-700 bg-white rounded-md hover:bg-green-100 transition duration-200">
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
        className="p-2 rounded-full border border-white hover:bg-white hover:text-green-700 transition-colors duration-200"
        title="Toggle Dark Mode"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
      </div>

        </div>
      </div>

      {menuOpen && (
      <div className="md:hidden absolute top-0 left-0 w-full bg-green-600 text-white z-40 shadow-lg animate-slideDown">
        <div className="flex justify-between items-center px-4 py-3 border-b border-green-500">
          <div className="flex items-center space-x-2">
            <img src="logo.png" alt="Seydam AI logo" className="h-6 w-6" />
            <span className="text-xl font-semibold">Seydam AI</span>
          </div>
          <button onClick={() => setMenuOpen(false)}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-4 px-6 py-4">
          <span onClick={() => { handleNavClick("home"); setMenuOpen(false); }} className="cursor-pointer hover:text-green-300">Home</span>
          <span onClick={() => { handleNavClick("pricing"); setMenuOpen(false); }} className="cursor-pointer hover:text-green-300">Pricing</span>
          <span onClick={() => { handleNavClick("services"); setMenuOpen(false); }} className="cursor-pointer hover:text-green-300">Services</span>
          {!hideAuthButtons && (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)} className="hover:text-green-300">Login</Link>
              <Link to="/get-started" onClick={() => setMenuOpen(false)} className="hover:text-green-300">Get Started</Link>
              <Link to="/signup" onClick={() => setMenuOpen(false)} className="hover:text-green-300">Sign Up</Link>

            </>
          )}
        </div>
      </div>
)}
    </nav>
  );
};

export default Navbar;
