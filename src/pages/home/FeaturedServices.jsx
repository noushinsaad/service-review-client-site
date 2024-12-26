import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "../services/ServiceCard";
import { Link } from "react-router-dom";


const FeaturedServices = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        axios.get('https://service-review-server-site-five.vercel.app/services?featured=true')
            .then(res => {
                setServices(res.data)
            })
    }, [])

    return (
        <div className="mx-10">
            <h2 className="text-3xl font-bold mb-10">Exceptional Services at a Glance</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className="flex justify-end mt-4" data-aos="fade-right">
                <Link to='/services' className="mr-4 font-semibold text-blue-700">See More...</Link>
            </div>
        </div>
    );
};

export default FeaturedServices;