import React, { useState } from 'react';
import { FaEnvelope, FaChevronDown, FaUser,FaSearch } from 'react-icons/fa';
import logo from '../assets/logo.png'

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isAuthDropdownOpen, setIsAuthDropdownOpen] = useState(false);

    const toggleAuthDropdown = () => {
        setIsAuthDropdownOpen(!isAuthDropdownOpen);
    };

    return (
        <nav className="px-4 py-2 shadow-lg">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-10 w-25 mr-2 p-2" />
            </div>
    
            {/* Search Bar */}
            <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-1 w-1/2 shadow-sm border border-gray-300">
              {/* Dropdown */}
              <div className="relative">
                <select className="bg-transparent text-black rounded-l-full focus:outline-none border-r border-gray-300 px-2">
                  <option value="all">All</option>
                  <option value="products">Products</option>
                  <option value="categories">Categories</option>
                </select>
              </div>
              {/* Search Input */}
              <input
                type="text"
                placeholder="Search..."
                className="flex-grow bg-transparent focus:outline-none text-black pl-2"
              />
              {/* Search Button */}
              <button className="focus:outline-none">
                <FaSearch className="text-red-500 text-xl" /> 
              </button>
            </div>
    
            {/* Message Icon and Signup/Signin */}
            <div className="flex items-center space-x-4">
              {/* Message Icon */}
              <button className="focus:outline-none mx-4">
                <FaEnvelope className="text-red-500 text-xl" /> {/* Red Envelope icon */}
              </button>
    
              {/* Signup/Signin Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleAuthDropdown}
                  className="focus:outline-none flex items-center space-x-2"
                >
                  <FaUser className="text-red-500 text-xl" /> {/* Red User icon */}
                  <span>Signup/Signin</span>
                  <FaChevronDown className="text-red-500 text-xl" /> {/* Red Chevron down icon */}
                </button>
    
                {isAuthDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                    <ul className="py-1">
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        Sign In
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        Sign Up
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      );
};

export default Navbar;
