// src/components/Footer.jsx

import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { FiFeather  } from 'react-icons/fi';
import { Link } from "react-router-dom";

const Footer = () => (
  <footer id="footer" className="relative bg-green-950 text-white py-16 overflow-hidden">
    
    {/* Top‑left circle */}
    <div className="absolute -top-16 -left-16 w-40 h-40 bg-green-600 rounded-full opacity-30" />
    {/* Bottom‑right rotated square */}
    <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-green-600 rotate-45 opacity-30" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Tagline */}
        <div className="">
          <div className="flex items-center">
            <img src="src/assets/logoWhite.png" alt="Saydem AI Logo" className="" />
            {/* <span className="text-2xl font-bold">Saydem AI</span> */}
          </div>
          <p className="text-gray-300">
            Get your technical report handled <span className="text-green-400">swiftly</span>
          </p>
          {/* <button className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-500 rounded-md transition">
            Start Now
          </button> */}

          <Link to="/get-started" className='bg-blue-700'>
              <button className="flex items-center gap-2 px-6 py-3 bg-green-700 text-white rounded-md hover:bg-green-800 active:bg-green-900 mt-4 transition duration-200">
              Get Started
              <FiFeather className="text-white" />
              </button>
          </Link>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="text-lg font-semibold">Explore</h3>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold">Resources</h3>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li><a href="#research" className="hover:text-white">Research</a></li>
            <li><a href="#draft" className="hover:text-white">Draft & Review</a></li>
            <li><a href="#format" className="hover:text-white">Formatting</a></li>
            <li><a href="#support" className="hover:text-white">Support</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold">Connect</h3>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaLinkedin size={20} /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaGithub size={20} /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaTwitter size={20} /></a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-green-700 pt-6 text-center text-gray-400 text-sm">Copyright
        &copy; {new Date().getFullYear()} Saydem. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
