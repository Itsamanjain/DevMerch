import React from 'react';

export const Footer = () => {
  return (
    <footer id='contact' className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center">
          <span className="text-lg font-bold">DevMerch</span>
          <div className="ml-4 flex space-x-4">
            {/* Add your social media icons here */}
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Right Section (Quick Links and Copyright) */}
        <div className="flex flex-col items-end space-y-2">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">Home</a>
            <a href="#" className="text-gray-300 hover:text-white">T-Shirts</a>
            <a href="#" className="text-gray-300 hover:text-white">Contact</a>
          </div>
          <div className="flex items-center">
            <span className="text-gray-300">© DevMerch</span>
            <span className='mr-3 ml-3'> | </span>           
            <span className="text-gray-300"> Made with ❤️</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
