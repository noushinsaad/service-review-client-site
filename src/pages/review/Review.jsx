/* eslint-disable react/prop-types */
import ReactRating from "react-rating";

const Review = ({ reviews }) => {

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Reviews</h2>
            {reviews.length === 0 ? (
                <p className="text-gray-500">No reviews yet. Be the first to add a review!</p>
            ) : (
                <div className="space-y-4">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="border p-4 rounded-lg flex items-start space-x-4 bg-gray-50"
                        >
                            <img
                                src={review.userPhoto}
                                alt={review.userName}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="font-semibold text-gray-800">{review.userName}</h3>
                                <p className="text-gray-600 text-sm">{review.postedDate}</p>
                                <p className="text-gray-700 mt-2">{review.text}</p>
                                <ReactRating
                                    emptySymbol={<span className="text-gray-400 text-2xl">☆</span>}
                                    fullSymbol={<span className="text-yellow-500 text-2xl">★</span>}
                                    initialRating={review.rating}
                                    readonly
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Review;