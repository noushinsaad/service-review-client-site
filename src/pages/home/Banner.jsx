import banner01 from '../../assets/banner/HomeAndMaintainence.jpg';
import banner02 from '../../assets/banner/EducationalServicesa.jpeg';
import banner03 from '../../assets/banner/IT_Service.jpg';
import banner04 from '../../assets/banner/TransportationServices.jpg';
import { useEffect, useState } from 'react';
import { easeOut, motion } from "framer-motion";

const Banner = () => {
    const banners = [
        {
            id: 1,
            image: banner01,
            title: "Reliable Home and Maintenance Services",
            description: "Get professional help for plumbing, electrical repairs, and other home maintenance needs. Ensure your home stays in perfect condition with trusted services."
        },
        {
            id: 2,
            image: banner02,
            title: "Empowering Minds Through Education",
            description: "Unlock a brighter future with expert tutoring, skill development programs, and personalized learning solutions. Transform your potential into success with our trusted educational services."
        },
        {
            id: 3,
            image: banner03,
            title: "Innovative IT Solutions for Your Success",
            description: "Stay ahead in the digital world with reliable IT services, including software development, cybersecurity, and technical support. Let us help you transform your ideas into powerful solutions."
        },
        {
            id: 4,
            image: banner04,
            title: "Effortless and Reliable Transportation",
            description: "Experience hassle-free travel with professional transportation services. Whether it’s logistics, commuting, or leisure trips, we’ve got you covered for a smooth journey."
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 4);
        }, 5000); // Change every 5 seconds
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [4]);



    return (
        <div className="md:m-8 shadow-2xl p-8 rounded-lg bg-blue-50">
            <div className="carousel w-full">
                {banners.map((banner, index) => (
                    <div
                        key={banner.id}
                        id={`item${index + 1}`}
                        className={`flex flex-col-reverse md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                            } gap-2 carousel-item w-full relative ${currentSlide === index ? "block" : "hidden"
                            }`}
                    >
                        <div className="w-full md:w-1/2">
                            <img
                                src={banner.image}
                                alt={`Banner ${index + 1}`}
                                className="w-full h-[350px] rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6">
                            <motion.h2
                                animate={{ color: ['#022ef0', '#857303', '#ff6133'] }}
                                transition={{ duration: 3, ease: easeOut, repeat: Infinity }}
                                className="text-3xl font-bold text-blue-900 text-center">
                                {banner.title}
                            </motion.h2>
                            <p className="text-gray-700 mt-4 text-center">
                                {banner.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>


            {/* Navigation */}
            <div className="flex justify-center gap-2 py-2">
                {banners.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)} // Updates the current slide
                        className={`btn btn-xs rounded-full ${currentSlide === index
                            ? "bg-green-700 text-white"
                            : "bg-green-500 text-white hover:bg-green-700"
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Banner;
