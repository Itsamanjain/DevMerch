import React from 'react';

const Card = ({ imagePath, title, originalPrice, discountedPrice }) => {
  return (
    <div className="flex flex-col items-center bg-white p-4 m-2 rounded-tl-lg rounded-tr-lg rounded-br-md rounded-bl-md shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
      <img
        src={imagePath}
        alt="Product"
        className="w-40 h-40 object-cover mb-4 rounded-t-md rounded-b-none"
      />
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">
          <span className="line-through text-red-500">₹{originalPrice}</span>{' '}
          <span className="text-green-500">₹{discountedPrice}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
