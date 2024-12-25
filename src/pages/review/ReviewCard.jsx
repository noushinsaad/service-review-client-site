/* eslint-disable react/prop-types */

import ReactRating from "react-rating";


const ReviewCard = ({ review, services, onUpdate, onDelete }) => {

    return (
        <div
            key={review._id}
            className="bg-white shadow-lg rounded-lg p-6 border"
        >
            <h3 className="text-xl font-bold text-gray-800">
                <strong>Service Title: </strong>  {services[review.serviceId] || "Service Title Not Available"}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
                <strong>Reviewed on:</strong> {review.postedDate || "Unknown Date"}
            </p>

            <p className="text-gray-700 mb-4">{review.text}</p>

            <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-700">Rating:</span>
                <ReactRating
                    emptySymbol={<span className="text-gray-400 text-2xl">☆</span>}
                    fullSymbol={<span className="text-yellow-500 text-2xl">★</span>}
                    initialRating={review.rating}
                    readonly
                />
            </div>

            <div className="flex space-x-4 mt-3">
                <button
                    onClick={() => onUpdate(review)}
                    className="btn bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
                >
                    Update
                </button>
                <button
                    onClick={() => onDelete(review._id)}
                    className="btn bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ReviewCard;