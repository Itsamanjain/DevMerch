import React, { useState } from "react";

export const Navbar = ({ tshirtsRef, contactRef }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-gray-800 p-4">
        <div className="text-white text-2xl cursor-pointer">DevMerch</div>

        {/* Hamburger icon for small screens */}
        <div className="md:hidden ml-auto">
          <button className="text-white text-3xl" onClick={toggleMenu}>
            &#8801;
          </button>
        </div>

        {/* Popup menu for small screens */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
            <div className="flex flex-col items-center justify-center h-screen">
              <button className="text-white text-2xl absolute top-4 right-4 mr-6" onClick={closeMenu}>
                X
              </button>
              <ul className="space-y-4 text-white text-center">
                <li className="hover:text-gray-300 cursor-pointer">Home</li>
                <li className="hover:text-gray-300 cursor-pointer">T-Shirts</li>
                <li className="hover:text-gray-300 cursor-pointer">Contact</li>
                <li className="hover:text-gray-300 cursor-pointer">🛍</li>
                <li className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Login/SignUp</li>
              </ul>
            </div>
          </div>
        )}

        {/* Normal ul items for medium screens */}
        <ul className="hidden md:flex space-x-4 text-white">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer" onClick={() => tshirtsRef.current.scrollIntoView({ behavior: 'smooth' })}>T-Shirts</li>
          <li className="hover:text-gray-300 cursor-pointer" onClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}>Contact</li>
        </ul>

        {/* Cart icon or symbol */}
        <div className="flex items-center">
          <div className="text-white text-3xl mr-5 cursor-pointer hidden md:inline">
            🛍{/* You can replace this with an appropriate cart icon */}
          </div>
          <button className="hidden md:inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login/SignUp
          </button>
        </div>
      </nav>
      {/* Add padding to the content to prevent it from being obscured by the fixed navbar */}
      <div className="pt-16">
        {/* Your main content goes here */}
      </div>
    </>
  );
};
