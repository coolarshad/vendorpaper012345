import { FaStar } from 'react-icons/fa';
import React, { useState } from 'react';
import CustomerReviews from '../components/CustomerReviews';
import ReactImageMagnify from 'react-image-magnify';

const ProductPage = () => {
    const product = {
        name: 'China Factory Air Quality Sensor Multi Function Smart Home HEPA UV Air Purifier',
        price: 'US$129.99-149.99 / Piece',
        description: 'This is a powerful air purifier with HEPA UV filtration, designed to improve indoor air quality for homes and offices.',
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
        highlights: [
            '12 GB RAM | 256 GB ROM',
            '17.02 cm (6.7 inch) Full HD+ Display',
            '50MP + 13MP | 32MP Front Camera',
            '5000 mAh Battery',
            '7s Gen 2 Processor',
            'Easy Payment Options',
            'EMI starting from ₹879/month',
            'Net banking & Credit/Debit/ATM card',
        ],
        details: {
            customization: 'Available',
            structure: 'Floor Standing',
            usage: 'Home',
            dimensions: '18 x 12 x 30 inches',
            weight: '5 kg',
            warranty: '1 Year Manufacturer Warranty',
            color: 'White',
        },
        rating: 4.5,
        reviews :[
            {
                id: 1,
                text: 'Great product! Highly recommend it.',
                author: 'John Doe',
                description: 'I’ve been using this product for a month and it has exceeded my expectations in quality and performance.'
            },
            {
                id: 2,
                text: 'Good value for the price.',
                author: 'Jane Smith',
                description: 'The product is reliable and works as advertised. Definitely worth the investment.'
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
    // Array to hold the product categories
    const productCategories = [
        { title: "General", content: product.general },
        { title: "Display", content: product.display },
        { title: "OS and Processor", content: product.osAndProcessor },
        { title: "Memory and Storage", content: product.memoryAndStorage },
        { title: "Camera", content: product.camera },
        { title: "Connectivity", content: product.connectivity },
        { title: "Battery", content: product.battery },
        { title: "Dimensions", content: product.dimensions },
        { title: "Warranty", content: product.warranty },
    ];

    const [selectedMedia, setSelectedMedia] = useState(product.media[0]);
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

    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className="flex flex-col md:flex-row md:space-x-6">
                <div className="md:w-1/2">
                    {/* Magnifier for selected media */}
                    {selectedMedia.type === 'image' ? (
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: product.name,
                                isFluidWidth: true,
                                src: selectedMedia.src,
                            },
                            largeImage: {
                                src: selectedMedia.src,
                                width: 1200,
                                height: 1800
                            },
                            isHintEnabled: true,
                            shouldHideHintAfterFirstActivation: false
                        }} />
                    ) : (
                        <video className="w-full h-auto rounded-lg shadow-lg" controls>
                            <source src={selectedMedia.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}

                    {/* Thumbnails */}
                    <div className="grid grid-cols-4 gap-2 mt-4">
                        {product.media.map((media, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer p-1 border-2 rounded-lg ${media === selectedMedia ? 'border-blue-500' : 'border-gray-300'}`}
                                onClick={() => setSelectedMedia(media)}
                            >
                                {media.type === 'image' ? (
                                    <img
                                        src={media.src}
                                        alt={`${product.name} ${index + 1}`}
                                        className="w-full h-20 object-cover rounded-lg"
                                    />
                                ) : (
                                    <video className="w-full h-20 object-cover rounded-lg" muted>
                                        <source src={media.src} type="video/mp4" />
                                    </video>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="md:w-1/2">
                    <h1 className="text-2xl font-bold mb-2">{product.name}</h1>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                        <span className="text-yellow-500">
                            {[...Array(5)].map((_, index) => (
                                <span key={index} className={index < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'}>
                                    ★
                                </span>
                            ))}
                        </span>
                        <span className="ml-2 text-gray-600">({product.reviews.length} Ratings & Reviews)</span>
                    </div>

                    {/* Price */}
                    <p className="text-2xl font-semibold mb-4">{product.price}</p>

                    {/* Description */}
                    <p className="text-gray-700 mb-4">{product.description}</p>

                    {/* Product Highlights */}
                    <div className="p-4 rounded-lg mb-4">
                        <h3 className="text-lg font-bold mb-2">Product Highlights</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="text-md font-semibold mb-2 text-gray-600">Performance & Display</h4>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li className='text-sm'>12 GB RAM | 256 GB ROM</li>
                                    <li className='text-sm'>17.02 cm (6.7 inch) Full HD+ Display</li>
                                    <li className='text-sm'>50MP + 13MP | 32MP Front Camera</li>
                                    <li className='text-sm'>5000 mAh Battery</li>
                                    <li className='text-sm'>7s Gen 2 Processor</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-md font-semibold mb-2 text-gray-600">Payment & Offers</h4>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li className='text-sm'>Easy Payment Options</li>
                                    <li className='text-sm'>EMI starting from ₹879/month</li>
                                    <li className='text-sm'>Net banking & Credit/Debit/ATM card</li>
                                    <li className='text-sm'>Cash on Delivery available</li>
                                    <li className='text-sm'>Exchange offers applicable</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="p-4 rounded-lg">
                        <h3 className="text-lg font-bold mb-2">Product Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <p><span className="text-gray-600 font-semibold">Customization:</span> {product.details.customization}</p>
                            <p><span className="text-gray-600 font-semibold">Structure:</span> {product.details.structure}</p>
                            <p><span className="text-gray-600 font-semibold">Usage:</span> {product.details.usage}</p>
                            <p><span className="text-gray-600 font-semibold">Dimensions:</span> {product.details.dimensions}</p>
                            <p><span className="text-gray-600 font-semibold">Weight:</span> {product.details.weight}</p>
                            <p><span className="text-gray-600 font-semibold">Warranty:</span> {product.details.warranty}</p>
                            <p><span className="text-gray-600 font-semibold">Color:</span> {product.details.color}</p>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-red-600 transition duration-200">
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Product Specification and Additional Info Section */}


            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Product Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {productCategories.map((category, index) => (
                        <div key={index} className="p-4 border rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                            <ul className="list-disc list-inside text-gray-700">
                                {Object.entries(category.content).map(([key, value]) => (
                                    <li key={key} className="text-sm">
                                        <span className="font-semibold">{key.replace(/([A-Z])/g, ' $1')}: </span>
                                        {typeof value === 'object' ? JSON.stringify(value) : value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <section className="my-10">
                <h2 className="text-2xl font-bold mb-6">Company Section</h2>

                {/* Company Profile */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold mb-4">Company Profile</h3>
                    <p className="mb-4">
                        {/* Intro paragraph */}
                        Your introductory paragraph goes here. It should provide a brief overview of the company, its mission, and values.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {/* Video */}
                        <div>
                            <video controls className="w-full">
                                <source src="your-video-source.mp4" type="video/mp4" />
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {/* Trade Capacity */}
                    <div>
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
                    <div>
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
                <h3 className="text-xl font-semibold mb-4">Gallery</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {product.media.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={`Gallery ${index + 1}`}
                            className="cursor-pointer rounded-lg"
                            onClick={() => openModal(image)}
                        />
                    ))}
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




            {/* Customer Reviews Section */}
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
                {product.reviews.map((review) => (
                    <div key={review.id} className="border-b py-2">
                        {/* Render stars based on rating */}
                        <div className="flex items-center mr-2">
                            {Array.from({ length: 5 }, (_, index) => (
                                <span key={index} className={`text-${index < review.rating ? 'yellow-500' : 'gray-300'}`}>
                                    ★
                                </span>
                            ))}<span className="text-gray-700 italic mx-2">{review.text}</span>
                        </div>
                        
                        
                        <p className="text-gray-600 mt-1">{review.description}</p> {/* Added description here */}
                        <p className="text-gray-500 text-sm ml-2">- {review.author}</p>
                    </div>
                ))}

                {/* User Experience Description and Media Upload */}
                <div className="mt-4">
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
    );
};

export default ProductPage;
