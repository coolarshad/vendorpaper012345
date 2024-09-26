// ProductTile.jsx
import React from 'react';

const ProductTile = ({ image, name, price, subtext }) => {
  return (
    <div className="border p-4 rounded shadow flex flex-col">
    <img src={image} alt={name} className="w-full h-64 object-cover mb-2 rounded" />
    <h4 className="font-semibold">{name}</h4>
    <p className="text-gray-600">Price: ${price}</p>
    <p className="text-gray-500">{subtext}</p>
    <button className="mt-2 bg-blue-600 text-white rounded px-4 py-2 w-full text-center">
      Contact Now
    </button>
  </div>
  );
};

export default ProductTile;
