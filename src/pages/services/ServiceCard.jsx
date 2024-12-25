/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { _id, title, image, description, price, category } = service;

    return (
        <div className="flex flex-col md:flex-row justify-center items-center relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-lg overflow-hidden group transform hover:scale-105 transition-transform duration-300 border border-gray-200">
            <div className="p-6 md:w-1/2">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-72 object-cover border-4 border-blue-400 rounded-md shadow-md"
                />
            </div>
            <div className="p-6 md:w-1/2 flex flex-col justify-between">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-gray-600 mb-4 text-justify">
                    {description}
                </p>
                <p className="text-blue-500 text-md font-semibold mb-2">
                    Category: <span className="font-bold">{category}</span>
                </p>
                <p className="text-green-600 text-lg font-semibold mb-4">
                   Price: {price} BDT
                </p>
                <Link to={`/services/${_id}`}>
                    <button
                        className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-lg shadow-md hover:from-blue-500 hover:to-green-400 transition-all duration-300">
                        See Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;