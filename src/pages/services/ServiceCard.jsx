/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, title, image, description, price, category } = service;

    return (
        <div className="relative group w-full h-96 rounded-lg shadow-lg overflow-hidden">

            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />


            <div className="absolute bottom-4 left-4 z-10">
                <h3 className="text-xl font-bold text-white
                 bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 rounded-lg">
                    {title}
                </h3>
            </div>


            <div
                className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 
                group-hover:opacity-100 transition-opacity duration-500 text-white p-4"
            >
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-sm mb-2 text-center">{description}</p>
                <p className="text-md mb-1">
                    <span className="font-semibold">Category:</span> {category}
                </p>
                <p className="text-lg font-semibold mb-4">
                    Price: {price} BDT
                </p>
                <Link to={`/service-details/${_id}`}>
                    <button
                        className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold 
                        rounded-lg shadow-md hover:from-blue-500 hover:to-green-400 transition-all duration-300"
                    >
                        See Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
