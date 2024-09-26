import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons
import logocolor from '../assets/logo-color.png';
import Slider from 'react-slick'; // Import React Slick
import 'slick-carousel/slick/slick.css'; // Import Slick CSS
import 'slick-carousel/slick/slick-theme.css'; // Import Slick theme CSS
import ProductTile from '../components/ProductTile';

const StorePage = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openModal = (image) => {
        setSelectedImage(image);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedImage('');
    };

  const products = [
    {
      id: 1,
      image: 'https://www.concept-phones.com/wp-content/uploads/2021/11/Mobile-Phone-Accessories.jpg', // Replace with actual image URLs
      name: 'Product 1',
      price: '29.99',
      subtext: 'Best seller in category',
    },
    {
      id: 2,
      image: 'https://images.ctfassets.net/wcfotm6rrl7u/2VHKEff5KIxZ9ALbssfHvj/a12451ffd45431f95433db35aa66dab6/Accessories-catalogue-og_image.jpg',
      name: 'Product 2',
      price: '49.99',
      subtext: 'Limited edition',
    },
    {
      id: 1,
      image: 'https://www.concept-phones.com/wp-content/uploads/2021/11/Mobile-Phone-Accessories.jpg', // Replace with actual image URLs
      name: 'Product 1',
      price: '29.99',
      subtext: 'Best seller in category',
    },
    {
      id: 2,
      image: 'https://images.ctfassets.net/wcfotm6rrl7u/2VHKEff5KIxZ9ALbssfHvj/a12451ffd45431f95433db35aa66dab6/Accessories-catalogue-og_image.jpg',
      name: 'Product 2',
      price: '49.99',
      subtext: 'Limited edition',
    },
    {
      id: 1,
      image: 'https://www.concept-phones.com/wp-content/uploads/2021/11/Mobile-Phone-Accessories.jpg', // Replace with actual image URLs
      name: 'Product 1',
      price: '29.99',
      subtext: 'Best seller in category',
    },
    {
      id: 2,
      image: 'https://images.ctfassets.net/wcfotm6rrl7u/2VHKEff5KIxZ9ALbssfHvj/a12451ffd45431f95433db35aa66dab6/Accessories-catalogue-og_image.jpg',
      name: 'Product 2',
      price: '49.99',
      subtext: 'Limited edition',
    },
    {
      id: 1,
      image: 'https://www.concept-phones.com/wp-content/uploads/2021/11/Mobile-Phone-Accessories.jpg', // Replace with actual image URLs
      name: 'Product 1',
      price: '29.99',
      subtext: 'Best seller in category',
    },
    {
      id: 2,
      image: 'https://images.ctfassets.net/wcfotm6rrl7u/2VHKEff5KIxZ9ALbssfHvj/a12451ffd45431f95433db35aa66dab6/Accessories-catalogue-og_image.jpg',
      name: 'Product 2',
      price: '49.99',
      subtext: 'Limited edition',
    },
    // Add more products as needed
  ];
  const company = {
   
    media: [
        {
            type: 'image',
            src: 'https://www.concept-phones.com/wp-content/uploads/2021/11/Mobile-Phone-Accessories.jpg',
        },
        {
            type: 'image',
            src: 'https://images.ctfassets.net/wcfotm6rrl7u/2VHKEff5KIxZ9ALbssfHvj/a12451ffd45431f95433db35aa66dab6/Accessories-catalogue-og_image.jpg',
        },
        {
            type: 'video',
            src: 'https://www.w3schools.com/html/mov_bbb.mp4', // Example video source
        },
        {
            type: 'image',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoR4zSH4I3LjNkuRpW3wLApY2Pj5qppQ2yHA&s',
        },
    ],
   
    general: {
        inTheBox: 'Handset, 68W Charger, USB Cable, Sim Tool, Protective Cover, Guides',
        modelNumber: 'PB300004IN | PB300013IN',
        modelName: 'Edge 50 Fusion',
        color: 'Hot Pink',
        browseType: 'Smartphones',
        simType: 'Dual Sim',
        hybridSimSlot: 'No',
        touchscreen: 'Yes',
        otgCompatible: 'Yes',
        quickCharging: 'Yes',
        soundEnhancements: 'Stereo Speakers',
        sarValue: 'Head: 1.04 W/Kg (at 1 g), Body: 1.05 W/Kg (at 1 g)',
    },
    display: {
        displaySize: '17.02 cm (6.7 inch)',
        resolution: '2400 x 1080 Pixels',
        resolutionType: 'Full HD+',
        gpu: 'Adreno 710',
        displayType: 'Full HD+ pOLED Endless Edge Display',
        otherDisplayFeatures: '144Hz Refresh Rate, 10 Bit, 100% DCI P3, 1600 Peak Nits, 1200 HBM Nits, 360Hz Game Mode, Aqua Touch, 720Hz PWM/DC Dimming, Corning Glass 5, SGS Low Blue Light, SGS Low Motion Blur, Aspect Ratio: 20:9, Screen-to-Body Ratio: 92%',
    },
    osAndProcessor: {
        operatingSystem: 'Android 14',
        processorBrand: 'Snapdragon',
        processorType: '7s Gen 2',
        processorCore: 'Octa Core',
        primaryClockSpeed: '2.4 GHz',
        secondaryClockSpeed: '1.95 GHz',
        operatingFrequency: '5G NR: n1/n3/n5/n7/n8/n20/n28/n38/n40/n41/n77/n78, 4G LTE: B1/B2/B3/B5/B7/B8/B18/B19/B20/B26/B28/B32/B38/B40/B41/B42, 3G WCDMA: B1/B2/B5/B8/B19, 2G GSM: B2/B3/B5/B8',
    },
    memoryAndStorage: {
        internalStorage: '256 GB',
        ram: '12 GB',
    },
    camera: {
        primaryCamera: '50MP + 13MP',
        primaryCameraFeatures: 'Dual Camera Setup: 50MP Main Camera (Sony Lytia 700C, f/1.8 Aperture, 1.0um Pixel Size, Ultra Pixel Technology for 2.0um, Quad PDAF - All Pixel Focus, Optical Image Stabilization (OIS)) + 13MP Ultrawide Angle Camera (FOV: 120 Degree, Macro Vision, f/2.2 Aperture, 1.12um Pixel Size, PDAF)',
        secondaryCamera: '32MP Front Camera',
        flash: 'Single LED Flash',
        videoRecording: 'Yes',
    },
    connectivity: {
        networkType: '2G, 3G, 4G, 5G',
        supportedNetworks: '4G LTE, 5G, GSM, WCDMA',
        bluetooth: 'Yes, v5.2',
        wifi: 'Yes, Wi-Fi 802.11 a/b/g/n/ac (2.4 GHz | 5 GHz)',
        gps: 'Yes',
    },
    battery: {
        batteryCapacity: '5000 mAh',
    },
    dimensions: {
        width: '73.1 mm',
        height: '162 mm',
        depth: '7.9 mm',
        weight: '175 g',
    },
    warranty: {
        warrantySummary: '1 Year on Handset and 6 Months on Accessories',
        domesticWarranty: '1 Year',
    },

};
const [selectedMedia, setSelectedMedia] = useState(company.media[0]);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Full-width banner with background image */}
      <div
        className="w-screen h-[30vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('https://www.concept-phones.com/wp-content/uploads/2021/11/Mobile-Phone-Accessories.jpg')" }}
      >
        <div className="w-full h-full bg-black bg-opacity-40 flex items-center justify-between px-6 text-white gap-4 mx-0">
          {/* First column: Logo */}
          <div className="w-1/6 flex justify-center items-center p-4">
            <img
              src={logocolor}
              alt="Company Logo"
              className="h-16 w-auto"
            />
          </div>

          {/* Second column: Company info */}
          <div className="w-full sm:w-2/3 px-6 text-white text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold">Company Name</h1>
            <p className="mt-2">1234 Main Street, City, Country</p>
            <p>Main Products: Electronics, Gadgets, Accessories</p>
            <p className="mt-2 text-green-400 font-semibold">Verified Seller ✅</p>
          </div>

          {/* Third column: Buttons */}
          <div className="w-1/6 flex flex-col items-center space-y-4 p-4 ml-auto">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full">
              Contact Us
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded w-full">
              Chat with Us
            </button>
          </div>
        </div>
      </div>

      {/* Menu Bar with Search */}
      <nav className="bg-green-600 w-full flex justify-between items-center px-20 py-1">
        {/* Menu items on the left */}
        <ul className="flex space-x-8 text-white text-lg font-semibold">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">Products</li>
          <li className="hover:underline cursor-pointer">About Us</li>
          <li className="hover:underline cursor-pointer">Contact Us</li>
        </ul>

        {/* Search bar on the right */}
        <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-1 w-1/5 shadow-sm border border-gray-300">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow bg-transparent focus:outline-none text-black pl-2"
          />
          <button className="focus:outline-none">
            <FaSearch className="text-red-500 text-xl" />
          </button>
        </div>
      </nav>

      {/* Carousel section */}
      <div className="w-full">
        <Slider {...settings}>
          <div>
            <img
              src="https://images.ctfassets.net/wcfotm6rrl7u/2VHKEff5KIxZ9ALbssfHvj/a12451ffd45431f95433db35aa66dab6/Accessories-catalogue-og_image.jpg"
              alt="Slide 1"
              className="w-full h-[50vh]"
            />
          </div>
          <div>
            <img
              src="https://www.concept-phones.com/wp-content/uploads/2021/11/Mobile-Phone-Accessories.jpg"
              alt="Slide 2"
              className="w-full h-[50vh]"
            />
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/wcfotm6rrl7u/2VHKEff5KIxZ9ALbssfHvj/a12451ffd45431f95433db35aa66dab6/Accessories-catalogue-og_image.jpg"
              alt="Slide 3"
              className="w-full h-[50vh]"
            />
          </div>
        </Slider>
      </div>

      {/* Categories and Products section */}
      <div className="flex-grow bg-gray-100 p-6">
        <div className="container mx-auto">
          <div className="flex justify-center mt-4 gap-4 items-start"> {/* items-start ensures top alignment */}
            {/* Categories Column */}
            <div className="bg-white p-4 rounded shadow w-1/5 flex-none"> {/* flex-none ensures it only takes its content height */}
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li className="cursor-pointer hover:text-blue-500">Category 1</li>
                <li className="cursor-pointer hover:text-blue-500">Category 2</li>
                <li className="cursor-pointer hover:text-blue-500">Category 3</li>
                <li className="cursor-pointer hover:text-blue-500">Category 4</li>
                <li className="cursor-pointer hover:text-blue-500">Category 1</li>
                <li className="cursor-pointer hover:text-blue-500">Category 2</li>
                <li className="cursor-pointer hover:text-blue-500">Category 3</li>
                <li className="cursor-pointer hover:text-blue-500">Category 4</li>

              </ul>
            </div>

            {/* Products Column */}
            <div className=" flex-grow"> {/* This will grow to fill available space */}
              <div className='mb-4 bg-white p-4 rounded shadow'>
                <h3 className="text-lg font-bold mb-4">Best Products</h3>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  {products.map((product) => (
                    <ProductTile
                      key={product.id}
                      image={product.image}
                      name={product.name}
                      price={product.price}
                      subtext={product.subtext}
                    />
                  ))}
                </div>
              </div>
              <div className='mb-4 bg-white p-4 rounded shadow'>
                <h3 className="text-lg font-bold mb-4">New Products</h3>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  {products.map((product) => (
                    <ProductTile
                      key={product.id}
                      image={product.image}
                      name={product.name}
                      price={product.price}
                      subtext={product.subtext}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4 gap-4 items-start">
          <div className=" w-1/5 flex-none"></div>
          <div className=" flex-grow">
          <section className="my-10">
                {/* <h2 className="text-2xl font-bold mb-6">Company Section</h2> */}

                {/* Company Profile */}
                <div className="mb-10 className='mb-4 bg-white p-4 rounded shadow'">
                    <h3 className="text-xl font-semibold mb-4">Company Profile</h3>
                    <p className="mb-4">
                        {/* Intro paragraph */}
                        Your introductory paragraph goes here. It should provide a brief overview of the company, its mission, and values.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {/* Video */}
                        <div>
                            <video controls className="w-full">
                                <source src={company.media[2].src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        {/* Bullet Points */}
                        <div>
                            <ul className="list-disc pl-5">
                                <li><strong>Business Type:</strong> Manufacturer/Factory & Trading Company</li>
                                <li><strong>Business Range:</strong> Consumer Electronics, Electrical & Electronics, Health & Medicine, Manufacturing & ...</li>
                                <li><strong>Main Products:</strong> Air Purifier, Ozone Generator, Fruit and Vegetable Washer, Ozone Water Spray</li>
                                <li><strong>Management System Certification:</strong> ISO9001:2015, ISO14001:2015</li>
                                <li><strong>Main Markets:</strong> North America, South America, Europe, Southeast Asia/Mideast, East Asia (Japan/South Korea)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Trade and Production Capacity in Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 ">
                    {/* Trade Capacity */}
                    <div className='mb-4 bg-white p-4 rounded shadow'>
                        <h3 className="text-xl font-semibold mb-4">Trade Capacity</h3>
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="border px-4 py-2">Description</th>
                                    <th className="border px-4 py-2">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">International Commercial Terms (Incoterms):</td>
                                    <td className="border px-4 py-2">FOB</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Terms of Payment:</td>
                                    <td className="border px-4 py-2">LC, T/T</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Average Lead Time:</td>
                                    <td className="border px-4 py-2">Peak Season Lead Time: one month, Off Season Lead Time: within 15 workdays</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Number of Foreign Trading Staff:</td>
                                    <td className="border px-4 py-2">8</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Main Customer(s):</td>
                                    <td className="border px-4 py-2">
                                        <ul>
                                            <li>TECO, Japan - Air Purifier</li>
                                            <li>Lidl/Tempo, United States - Air Purifier</li>
                                            <li>AEG, Germany - ODM order</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Export Year:</td>
                                    <td className="border px-4 py-2">2001-03-20</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Export Percentage:</td>
                                    <td className="border px-4 py-2">71%~90%</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Main Markets:</td>
                                    <td className="border px-4 py-2">North America, South America, Europe, Southeast Asia/Mideast, East Asia (Japan/South Korea), Australia</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Nearest Port:</td>
                                    <td className="border px-4 py-2">Shenzhen Port</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Import & Export Mode:</td>
                                    <td className="border px-4 py-2">Have Own Export License</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Production Capacity */}
                    <div className='mb-4 bg-white p-4 rounded shadow'>
                        <h3 className="text-xl font-semibold mb-4">Production Capacity</h3>
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="border px-4 py-2">Description</th>
                                    <th className="border px-4 py-2">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">Average Lead Time:</td>
                                    <td className="border px-4 py-2">Peak Season Lead Time: one month, Off Season Lead Time: within 15 workdays</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Production Capacity:</td>
                                    <td className="border px-4 py-2">Your production capacity details go here.</td>
                                </tr>
                                {/* Additional production capacity details can be added here */}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Gallery */}
                {/* Gallery Section */}
                <div className='mb-4 bg-white p-4 rounded shadow'>
                <h3 className="text-xl font-semibold mb-4">Gallery</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {company.media.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={`Gallery ${index + 1}`}
                            className="cursor-pointer rounded-lg"
                            onClick={() => openModal(image)}
                        />
                    ))}
                </div>
                </div>

                {/* Modal for large image display */}
                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                        <div className="relative">
                            <button onClick={closeModal} className="p-10 absolute top-2 right-2 text-white text-2xl">✖</button>
                            <img src={selectedImage.src} alt="Large view" className="p-10 max-w-full max-h-screen" />
                        </div>
                    </div>
                )}
            </section>
            <div className="mt-4 bg-white p-4 rounded shadow">
                    <h3 className="text-lg font-semibold">Share Your Experience</h3>
                    <textarea
                        placeholder="Describe your experience here..."
                        className="w-full border rounded p-2 mt-2 mb-2"
                        rows="4" // Corrected line
                    />
                    <div className="flex items-center mb-2">
                        <input type="file" accept="image/*" multiple className="mr-2" />
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Upload</button>
                    </div>
                    <div className="flex items-center">
                        <label className="mr-2">Rating:</label>
                        <div className="flex items-center">
                            {Array.from({ length: 5 }, (_, index) => (
                                <span key={index} className="cursor-pointer text-gray-300 hover:text-yellow-500" onClick={() => setRating(index + 1)}>
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>
                    <button className="bg-green-500 text-white px-4 py-2 rounded mt-2">Submit Review</button>
                </div>
          </div>
          </div>
          

        </div>
      </div>



      
    </div>
  );
};

export default StorePage;
