import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import Modal from '../components/Modal';
import { FaTimes, FaChevronDown } from 'react-icons/fa';

const regions = [
  {
    name: 'North America',
    countries: ['United States', 'Canada', 'Mexico', 'Guatemala', 'Cuba', 'Honduras', 'El Salvador'],
  },
  {
    name: 'Caribbean',
    countries: ['Cuba', 'Jamaica', 'Dominican Republic', 'Haiti', 'Trinidad and Tobago', 'Barbados', 'Saint Lucia', 'Bahamas'],
  },
  {
    name: 'Central America',
    countries: ['Belize', 'Costa Rica', 'Panama', 'Nicaragua', 'Honduras', 'Guatemala', 'El Salvador'],
  },
  {
    name: 'South America',
    countries: ['Brazil', 'Argentina', 'Chile', 'Colombia', 'Peru', 'Venezuela', 'Ecuador', 'Paraguay', 'Uruguay'],
  },
  {
    name: 'Europe',
    countries: ['United Kingdom', 'Germany', 'France', 'Italy', 'Spain', 'Netherlands', 'Sweden', 'Norway', 'Belgium', 'Switzerland', 'Austria', 'Poland', 'Czech Republic', 'Portugal', 'Finland', 'Denmark', 'Hungary', 'Ireland', 'Greece'],
  },
  {
    name: 'Asia',
    countries: ['China', 'India', 'Japan', 'South Korea', 'Indonesia', 'Pakistan', 'Bangladesh', 'Vietnam', 'Thailand', 'Philippines', 'Malaysia', 'Singapore', 'Myanmar', 'Sri Lanka', 'Nepal', 'Mongolia', 'Afghanistan', 'Kazakhstan', 'Uzbekistan', 'Turkmenistan', 'Kyrgyzstan', 'Tajikistan'],
  },
  {
    name: 'Middle East',
    countries: ['Saudi Arabia', 'United Arab Emirates', 'Israel', 'Iran', 'Iraq', 'Qatar', 'Kuwait', 'Jordan', 'Oman', 'Bahrain', 'Yemen', 'Syria', 'Lebanon', 'Palestine'],
  },
  {
    name: 'Africa',
    countries: ['Nigeria', 'Egypt', 'South Africa', 'Kenya', 'Ethiopia', 'Ghana', 'Uganda', 'Tanzania', 'Morocco', 'Algeria', 'Sudan', 'Angola', 'Zimbabwe', 'Namibia', 'Senegal', 'Cameroon', 'Mali', 'Rwanda', 'Togo', 'Sierra Leone'],
  },
  {
    name: 'Australia and Oceania',
    countries: ['Australia', 'New Zealand', 'Papua New Guinea', 'Fiji', 'Solomon Islands', 'Samoa', 'Vanuatu', 'Kiribati', 'Tonga', 'Micronesia', 'Palau', 'Tuvalu', 'Marshall Islands'],
  },
  {
    name: 'Southeast Asia',
    countries: ['Vietnam', 'Thailand', 'Malaysia', 'Singapore', 'Indonesia', 'Philippines', 'Myanmar', 'Cambodia', 'Laos', 'Brunei', 'Timor-Leste'],
  },
  {
    name: 'Central Asia',
    countries: ['Kazakhstan', 'Uzbekistan', 'Turkmenistan', 'Kyrgyzstan', 'Tajikistan'],
  },
];

const HomePage = () => {
  const [selectedRegion, setSelectedRegion] = useState('USA');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSelectCountry = (country) => {
    setSelectedRegion(country); // Update selected region
    handleCloseModal(); // Close the modal
  };

  return (
    <div>
      <Navbar />
      {/* Main Container */}
      <div className="max-w-7xl mx-auto p-4">
       {/* Select Region Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleOpenModal}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded">
          <span>Select Region: {selectedRegion}</span>
          <FaChevronDown className="ml-2" />
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Select a Region">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {regions.map((region, index) => (
              <div key={index} className="p-2">
                <h3 className="font-semibold text-lg">{region.name}</h3>
                <ul className="list-disc pl-4">
                  {region.countries.map((country, idx) => (
                    <li 
                      key={idx} 
                      className="cursor-pointer hover:text-blue-500" 
                      onClick={() => handleSelectCountry(country)} // Add onClick handler
                    >
                      {country}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Modal>
        
        {/* Header */}
       
        {/* Grid layout for Company Overview */}
        <div className="flex flex-col md:flex-row md:space-x-6 mb-4">
          {/* Featured Company Categories */}
          <div className="flex-1 space-y-2">
            <h2 className="text-xl font-bold text-gray-800">Company Overview</h2>

            {/* Featured Companies */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              <div className="bg-gray-100 p-2">
                <h3 className="text-md font-semibold">Electronics</h3>
                <p className="text-xs text-gray-600">
                  Top electronics companies like Apple, Samsung, Sony offering cutting-edge products.
                </p>
              </div>
              <div className="bg-gray-100 p-2">
                <h3 className="text-md font-semibold">Clothing & Fashion</h3>
                <p className="text-xs text-gray-600">
                  Brands like Gucci, Zara, Nike providing trendy fashion and apparel worldwide.
                </p>
              </div>
              <div className="bg-gray-100 p-2">
                <h3 className="text-md font-semibold">Furniture & Home</h3>
                <p className="text-xs text-gray-600">
                  Discover top home decor brands like IKEA, Ashley Furniture for all your needs.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Section for Promotions */}
          <div className="flex-none w-64">
            <div className="bg-blue-100 p-2 text-center rounded-lg">
              <h3 className="text-lg font-bold text-blue-600">Special Offers</h3>
              <p className="text-xs text-gray-600">
                Up to 50% off on selected electronics and fashion items. Hurry up!
              </p>
              <p className="text-xs text-gray-600">
                Up to 50% off on selected electronics and fashion items. Hurry up!
              </p>
              <p className="text-xs text-gray-600">
                Up to 50% off on selected electronics and fashion items. Hurry up!
              </p>
            </div>
          </div>
        </div>

        {/* Product Categories Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mb-4">
          <div className="col-span-3 mb-1">
            <h2 className="text-xl font-bold text-gray-800">Product Categories</h2>
          </div>
          {/* Electronics Products */}
          <div className="bg-gray-100 p-2">
            <h3 className="text-md font-semibold">Electronics</h3>
            <ul className="list-disc pl-3 text-xs">
              <li>Smartphones: Apple, Samsung, Google</li>
              <li>Laptops: Dell, HP, Lenovo</li>
              <li>Home Appliances: LG, Bosch, Whirlpool</li>
            </ul>
          </div>
          {/* Fashion Products */}
          <div className="bg-gray-100 p-2">
            <h3 className="text-md font-semibold">Fashion</h3>
            <ul className="list-disc pl-3 text-xs">
              <li>Men's Wear: Nike, Adidas, Uniqlo</li>
              <li>Women's Wear: Zara, H&M, Gucci</li>
              <li>Accessories: Ray-Ban, Fossil, Louis Vuitton</li>
            </ul>
          </div>
          {/* Furniture & Home */}
          <div className="bg-gray-100 p-2">
            <h3 className="text-md font-semibold">Furniture & Home</h3>
            <ul className="list-disc pl-3 text-xs">
              <li>Living Room: Ashley, Wayfair, IKEA</li>
              <li>Kitchen: West Elm, Pottery Barn, Target</li>
              <li>Outdoor: Home Depot, Lowe's, Overstock</li>
            </ul>
          </div>
        </div>

        {/* Upcoming Products Section */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800 mb-1">Upcoming Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="bg-gray-100 p-2 border rounded-lg">
              <h3 className="text-md font-semibold">Apple Watch Series 8</h3>
              <p className="text-xs text-gray-600">The latest smartwatch with advanced health features.</p>
            </div>
            <div className="bg-gray-100 p-2 border rounded-lg">
              <h3 className="text-md font-semibold">Samsung Galaxy Z Fold 4</h3>
              <p className="text-xs text-gray-600">A foldable smartphone with cutting-edge technology.</p>
            </div>
            <div className="bg-gray-100 p-2 border rounded-lg">
              <h3 className="text-md font-semibold">Nike Air Zoom Pegasus 39</h3>
              <p className="text-xs text-gray-600">The newest version of Nike's popular running shoes.</p>
            </div>
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800 mb-1">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
            <div className="bg-white p-2 border border-gray-200 shadow-sm">
              <h3 className="text-md font-semibold">Apple iPhone 13</h3>
              <p className="text-xs text-gray-600">Latest smartphone from Apple with A15 chip.</p>
              <p className="text-blue-600 font-semibold">$999.99</p>
            </div>
            <div className="bg-white p-2 border border-gray-200 shadow-sm">
              <h3 className="text-md font-semibold">Dell XPS 13</h3>
              <p className="text-xs text-gray-600">Top-tier laptop with Intel i7 processor.</p>
              <p className="text-blue-600 font-semibold">$1,199.99</p>
            </div>
            <div className="bg-white p-2 border border-gray-200 shadow-sm">
              <h3 className="text-md font-semibold">Nike Air Max</h3>
              <p className="text-xs text-gray-600">Popular running shoes with max comfort.</p>
              <p className="text-blue-600 font-semibold">$149.99</p>
            </div>
            <div className="bg-white p-2 border border-gray-200 shadow-sm">
              <h3 className="text-md font-semibold">Sony 4K TV</h3>
              <p className="text-xs text-gray-600">Ultra HD 55-inch TV with HDR support.</p>
              <p className="text-blue-600 font-semibold">$799.99</p>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800 mb-1">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="bg-gray-50 p-2 border rounded-lg">
              <h3 className="text-md font-semibold">John Doe</h3>
              <p className="text-xs text-gray-600">"Fantastic products, great customer service! Highly recommend the smartphones."</p>
            </div>
            <div className="bg-gray-50 p-2 border rounded-lg">
              <h3 className="text-md font-semibold">Jane Smith</h3>
              <p className="text-xs text-gray-600">"Amazing deals on electronics! The website is easy to navigate."</p>
            </div>
            <div className="bg-gray-50 p-2 border rounded-lg">
              <h3 className="text-md font-semibold">Alex Johnson</h3>
              <p className="text-xs text-gray-600">"Bought furniture for my new house. Quality is top-notch and delivery was on time."</p>
            </div>
          </div>
        </div>

        {/* Recent Blogs Section */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800 mb-1">Recent Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="bg-gray-100 p-2 border rounded-lg">
              <h3 className="text-md font-semibold">Top Gadgets to Look For in 2024</h3>
              <p className="text-xs text-gray-600">Stay ahead of the curve with these innovative gadgets.</p>
            </div>
            <div className="bg-gray-100 p-2 border rounded-lg">
              <h3 className="text-md font-semibold">Fashion Trends to Watch in 2024</h3>
              <p className="text-xs text-gray-600">Explore the latest trends in clothing and accessories.</p>
            </div>
            <div className="bg-gray-100 p-2 border rounded-lg">
              <h3 className="text-md font-semibold">Creating a Smart Home on a Budget</h3>
              <p className="text-xs text-gray-600">Tips and tricks to upgrade your home without breaking the bank.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
