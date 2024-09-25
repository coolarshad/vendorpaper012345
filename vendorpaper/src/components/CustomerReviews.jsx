import { useState } from 'react';

const CustomerReviews = ({ product }) => {
    const [newReview, setNewReview] = useState({
        text: '',
        author: '',
        rating: 0,
        experience: '',
        media: [],
    });

    const handleMediaChange = (e) => {
        setNewReview({ ...newReview, media: [...e.target.files] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the new review submission logic here
    };

    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
            {product.reviews.map((review) => (
                <div key={review.id} className="border-b py-2 flex flex-col">
                    <div className="flex items-center mb-2">
                        {/* Render stars based on rating */}
                        <div className="flex items-center mr-2">
                            {Array.from({ length: 5 }, (_, index) => (
                                <span key={index} className={`text-${index < review.rating ? 'yellow-500' : 'gray-300'}`}>
                                    ★
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-700 italic">"{review.text}"</p>
                        <p className="text-gray-500 text-sm ml-2">- {review.author}</p>
                    </div>
                    {review.experience && <p className="text-gray-600">{review.experience}</p>}
                    {review.media && review.media.map((mediaItem, index) => (
                        <div key={index} className="mt-2">
                            {mediaItem.type.startsWith('image/') ? (
                                <img src={URL.createObjectURL(mediaItem)} alt={`Uploaded Media ${index}`} className="max-w-xs rounded mb-2" />
                            ) : (
                                <video controls className="max-w-xs rounded mb-2">
                                    <source src={URL.createObjectURL(mediaItem)} type={mediaItem.type} />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </div>
                    ))}
                </div>
            ))}
            <h3 className="text-lg font-bold mt-6">Add Your Review</h3>
            <form onSubmit={handleSubmit} className="flex flex-col mt-4">
                <textarea
                    className="border border-gray-300 rounded p-2 mb-2"
                    placeholder="Your review..."
                    value={newReview.text}
                    onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                />
                <input
                    type="text"
                    className="border border-gray-300 rounded p-2 mb-2"
                    placeholder="Your name..."
                    value={newReview.author}
                    onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                />
                <div className="flex mb-2">
                    {Array.from({ length: 5 }, (_, index) => (
                        <label key={index} className="cursor-pointer">
                            <input
                                type="radio"
                                name="rating"
                                value={index + 1}
                                onChange={() => setNewReview({ ...newReview, rating: index + 1 })}
                                className="hidden"
                            />
                            <span className={`text-${index < newReview.rating ? 'yellow-500' : 'gray-300'}`}>★</span>
                        </label>
                    ))}
                </div>
                <textarea
                    className="border border-gray-300 rounded p-2 mb-2"
                    placeholder="Describe your experience..."
                    value={newReview.experience}
                    onChange={(e) => setNewReview({ ...newReview, experience: e.target.value })}
                />
                <input
                    type="file"
                    accept="image/*,video/*"
                    multiple
                    onChange={handleMediaChange}
                    className="mb-2"
                />
                <button type="submit" className="bg-blue-500 text-white rounded p-2">Submit Review</button>
            </form>
        </div>
    );
};

export default CustomerReviews;
