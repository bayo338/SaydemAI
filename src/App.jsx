import React from 'react';
import { DarkModeProvider } from './components/DarkMode';
import  Navbar  from './components/Navbar';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Footer   from './components/Footer'; // Importing the Navbar component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login"; // adjust path if needed
import { useState } from 'react'  
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import GetStarted from './pages/GetStarted';
import Signup from './pages/SignUp'; // or wherever it is




function App() {
  // const [count, setCount] = useState(0)
  return (
    <DarkModeProvider>
      <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
        <Router>
          <Routes>
            {/* Login page should appear standalone */}
            <Route path="/login" element={<Login />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/signup" element={<Signup />} />
            

            {/* Main layout for all other pages */}
            <Route
              path="*"
              element={
                <>
                  <Navbar />
                  <Home />
                  <Pricing />
                  <Services />
                  <Footer />
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    </DarkModeProvider>
  )
}


export default App


