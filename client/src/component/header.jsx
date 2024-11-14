import React, { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-gray-300 shadow-md p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">Task Managment</div>

      {/* Search Bar */}
      <div className="flex-1 mx-4 t">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border-black rounded-md py-2 pl-10 pr-4 text-black focus:outline-none focus:ring-2 ring-blue-500"
          />
          {/* Search Icon */}
          <span className="absolute left-3 top-2.5 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l-4 4m0 0l4-4m-4 4h18" />
            </svg>
          </span>
        </div>
      </div>

      {/* Filter Dropdown */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center border border-gray-300 bg-gray-100 text-gray-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Filter
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Option 1</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Option 2</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Option 3</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
