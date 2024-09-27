import React from 'react';

const ListCompanyTile = ({ companyName, details, images }) => {
  return (
    <div className="border p-4 rounded-lg shadow w-full grid gap-1 grid-cols-1 md:grid-cols-[1.5fr_1.5fr_0.75fr]">
      {/* Column 1: Company Name and Details */}
      <div className="flex flex-col">
        <h3 className="font-semibold text-xl">{companyName}</h3>
        <div className="flex flex-col md:flex-row mt-2 space-y-2 md:space-y-0 md:space-x-6">
          {details.map((detail, index) => (
            <p key={index} className="text-sm text-gray-600">
              <span>{detail}</span>
            </p>
          ))}
        </div>
        <h4 className="mt-4 font-semibold">Capabilities</h4>
        <ul className="text-sm text-gray-600 list-disc ml-4">
          <li>Socially responsible</li>
          <li>ODM service available</li>
          <li>OEM for well-known brands</li>
          <li>Finished product inspection</li>
          <li>Full customization</li>
        </ul>
      </div>

      {/* Column 2: Larger Company Images */}
      <div className="flex flex-wrap justify-center md:justify-center items-center gap-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Company Product ${index + 1}`}
            className="w-48 h-48 object-cover rounded"
          />
        ))}
      </div>

      {/* Column 3: Smaller Action Buttons */}
      <div className="flex flex-col justify-center items-start space-y-2">
        <button className="p-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600">Chat</button>
        <button className="p-2 w-full bg-gray-200 text-black rounded hover:bg-gray-300">Contact</button>
        <button className="p-2 w-full bg-gray-200 text-black rounded hover:bg-gray-300">View Profile</button>
      </div>
    </div>
  );
};

export default ListCompanyTile;
