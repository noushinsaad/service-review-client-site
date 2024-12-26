/* eslint-disable react/prop-types */
import ReactRating from "react-rating";

const Card = ({ review, service }) => {
    return (
        <div>
            <div
                className="bg-blue-50 shadow-lg rounded-lg p-6 border"
            >
                <h3 className="text-2xl font-bold text-gray-800">
                    <strong>Service Title: </strong>  {service[review.serviceId] || "Service Title Not Available"}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                    <strong>Reviewed on:</strong> {review.postedDate || "Unknown Date"}
                </p>

                <p className="text-gray-700 mb-4">{review.text}</p>
                <p className="text-gray-700 mb-4"><strong>Added Review By:</strong> {review.userEmail}</p>

                <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-700">Rating:</span>
                    <ReactRating
                        emptySymbol={<span className="text-gray-400 text-2xl">☆</span>}
                        fullSymbol={<span className="text-yellow-500 text-2xl">★</span>}
                        initialRating={review.rating}
                        readonly
                    />
                </div>

            </div>
        </div>
    );
};

export default Card;