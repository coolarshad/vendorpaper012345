import React from 'react';

const ListProductTile = ({
  image,
  title,
  price,
  originalPrice,
  discount,
  minOrder,
  deliveryDate,
  supplier,
  supplierYears,
  supplierCountry,
  rating,
  reviews,
}) => {
  return (
    <div className="border p-4 rounded-lg shadow">
      {/* Full-width image at the top */}
      <img src={image} alt={title} className="w-full mb-4 rounded" />

      {/* Title */}
      <h3 className="font-semibold mb-2 overflow-hidden max-h-12 line-clamp-2">{title}</h3>

      {/* Price details in one line */}
      <div className="flex items-center mb-2">
        <p className="text-2xl font-bold mr-2">${price}</p>
        <p className="text-sm text-red-500 line-through">${originalPrice}</p>
        {discount && (
          <p className="text-sm text-green-500 ml-2">{discount}</p>
        )}
      </div>

      {/* Additional info in one line */}
     

      {/* Other details */}
      <p className="text-sm">Min. order: {minOrder}</p>
     

      {/* Supplier info */}
      <p className="mt-4 font-semibold">{supplier}</p>
      <div className="flex justify-between text-sm mb-2">
        <p>
          {supplierYears} | {supplierCountry}
        </p>
        <p>
          Rating: {rating} / 5.0 ({reviews} reviews)
        </p>
      </div>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 mt-2 sm:gap-4">
        <button className="p-2 w-full sm:w-1/2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Add to cart
        </button>
        <button className="p-2 w-full sm:w-1/2 bg-gray-200 text-black rounded hover:bg-gray-300">
          Chat now
        </button>
      </div>
    </div>
  );
};

export default ListProductTile;
