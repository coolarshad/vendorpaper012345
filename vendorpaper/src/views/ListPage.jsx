import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import ListCompanyTile from '../components/ListCompanyTile';
import ListProductTile from '../components/ListProductTile';

const ListPage = () => {
  const [searchOption, setSearchOption] = useState("products");

  const handleSearchOptionChange = (option) => {
    setSearchOption(option);
  };

  return (
    <div>
      <Navbar onSearchOptionChange={handleSearchOptionChange} />

      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-[0.3fr_0.7fr] lg:grid-cols-[0.25fr_0.75fr] gap-4">
        {/* Column 1: Filters */}
        <div className="p-2 sm:p-6 lg:p-8 bg-gray-100 rounded-lg max-h-[80vh] sm:max-h-[70vh] lg:max-h-[60vh] overflow-y-auto">
          <h2 className="text-lg font-bold mb-4">Filters</h2>

          {/* Section: Super September */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Super September</h3>
            <p className="text-sm">180-day lowest price</p>
          </div>

          {/* Section: Supplier features */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Supplier Features</h3>
            <label className="block mb-1">
              <input type="checkbox" className="mr-2" /> Supplier ≤1h response time
            </label>
            <label className="block mb-1">
              <input type="checkbox" className="mr-2" /> Merge results by supplier
            </label>
            <label className="block mb-1">
              <input type="checkbox" className="mr-2" /> Store reviews (4.0 & up)
            </label>
          </div>

          {/* Section: Price */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Price</h3>
            <div className="flex space-x-2">
              <input type="text" placeholder="Min" className="w-1/2 p-1 border rounded" />
              <input type="text" placeholder="Max" className="w-1/2 p-1 border rounded" />
            </div>
            <button className="mt-2 p-1 bg-blue-500 text-white rounded">OK</button>
          </div>

          {/* Section: Supplier country/region */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Supplier Country/Region</h3>
            <input type="text" placeholder="Search" className="w-full p-1 mb-2 border rounded" />
            <label className="block mb-1">
              <input type="checkbox" className="mr-2" /> China
            </label>
            <label className="block mb-1">
              <input type="checkbox" className="mr-2" /> India
            </label>
            {/* Add more supplier countries as needed */}
          </div>

          {/* Section: Certifications */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Product Certifications</h3>
            <input type="text" placeholder="Search" className="w-full p-1 mb-2 border rounded" />
            <label className="block mb-1">
              <input type="checkbox" className="mr-2" /> CE
            </label>
            <label className="block mb-1">
              <input type="checkbox" className="mr-2" /> ROHS
            </label>
            {/* Add more certifications as needed */}
          </div>
        </div>

        {/* Column 2: Products or Companies */}
        <div className="p-2">
          {searchOption === "products" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Product Tiles */}
              <ListProductTile
                image="https://via.placeholder.com/150"
                title="Women's Shoes Accessories Crystal Women's Shoes Upper Sandals Rhinestone Slippers Upper Decoration Factory Price Rhinestone"
                price="$1.84"
                originalPrice="$2.30"
                discount="20% off"
                minOrder="300 meters"
                deliveryDate="Oct 23"
                supplier="Ruian Huazhen Shoes Material Co., Ltd."
                supplierYears="10 yrs"
                supplierCountry="CN"
                rating="4.7"
                reviews="3"
              />
              <ListProductTile
                image="https://via.placeholder.com/150"
                title="Women's Shoes Accessories Crystal Women's Shoes Upper Sandals Rhinestone Slippers Upper Decoration Factory Price Rhinestone"
                price="$1.84"
                originalPrice="$2.30"
                discount="20% off"
                minOrder="300 meters"
                deliveryDate="Oct 23"
                supplier="Ruian Huazhen Shoes Material Co., Ltd."
                supplierYears="10 yrs"
                supplierCountry="CN"
                rating="4.7"
                reviews="3"
              />
              <ListProductTile
                image="https://via.placeholder.com/150"
                title="Women's Shoes Accessories Crystal Women's Shoes Upper Sandals Rhinestone Slippers Upper Decoration Factory Price Rhinestone"
                price="$1.84"
                originalPrice="$2.30"
                discount="20% off"
                minOrder="300 meters"
                deliveryDate="Oct 23"
                supplier="Ruian Huazhen Shoes Material Co., Ltd."
                supplierYears="10 yrs"
                supplierCountry="CN"
                rating="4.7"
                reviews="3"
              />
              <ListProductTile
                image="https://via.placeholder.com/150"
                title="Women's Shoes Accessories Crystal Women's Shoes Upper Sandals Rhinestone Slippers Upper Decoration Factory Price Rhinestone"
                price="$1.84"
                originalPrice="$2.30"
                discount="20% off"
                minOrder="300 meters"
                deliveryDate="Oct 23"
                supplier="Ruian Huazhen Shoes Material Co., Ltd."
                supplierYears="10 yrs"
                supplierCountry="CN"
                rating="4.7"
                reviews="3"
              />
              {/* Add more product tiles as needed */}
            </div>
          ) : (
            <div className="space-y-4">
              {/* Company Tiles */}
              <ListCompanyTile
                companyName="Xingtai Dalisi Toys Co., Ltd."
                details={["2 yrs", "#12 featured manufacturer", "Rating: 4.8/5 (19 reviews)"]}
                images={["https://via.placeholder.com/400", "https://via.placeholder.com/400"]}
              />
               <ListCompanyTile
                companyName="Xingtai Dalisi Toys Co., Ltd."
                details={["2 yrs", "#12 featured manufacturer", "Rating: 4.8/5 (19 reviews)"]}
                images={["https://via.placeholder.com/400", "https://via.placeholder.com/400"]}
              />
               <ListCompanyTile
                companyName="Xingtai Dalisi Toys Co., Ltd."
                details={["2 yrs", "#12 featured manufacturer", "Rating: 4.8/5 (19 reviews)"]}
                images={["https://via.placeholder.com/400", "https://via.placeholder.com/400"]}
              />
               <ListCompanyTile
                companyName="Xingtai Dalisi Toys Co., Ltd."
                details={["2 yrs", "#12 featured manufacturer", "Rating: 4.8/5 (19 reviews)"]}
                images={["https://via.placeholder.com/400", "https://via.placeholder.com/400"]}
              />
              {/* Add more company tiles as needed */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListPage;
