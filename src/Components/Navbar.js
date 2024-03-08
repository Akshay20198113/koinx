import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white relative">
      <div className="px-4 flex justify-between items-center">
        {/* left part */}
        <div className="flex items-center">
          <img className="h-32 w-auto" src="https://images.yourstory.com/cs/images/companies/KkoinX-1657031694106.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff" alt="Company Logo" />
        </div>
        {/* right part */}
        <div className="hidden md:flex items-center ml-auto">
          <Link to="/option1" className="text-black mr-6 hover:text-gray-300">Crypto Taxes</Link>
          <Link to="/option2" className="text-black mr-6 hover:text-gray-300">Free Tools</Link>
          <Link to="/option3" className="text-black mr-6 hover:text-gray-300">Resource Center</Link>
          <Link to="/get-started" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </Link>
        </div>
        {/* Mobile menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black hover:text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M2 3a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM2 9a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM3 15a1 1 0 100 2h14a1 1 0 100-2H3z" clipRule="evenodd" />
            </svg>
          </button>
          {isOpen && (
            <div className="absolute top-full left-0 bg-white py-2 mt-1 w-full md:w-screen">
              <Link to="/option1" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Crypto Taxes</Link>
              <Link to="/option2" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Free Tools</Link>
              <Link to="/option3" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Resource Center</Link>
              <Link to="/get-started" className="block px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center mt-2 rounded">
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
