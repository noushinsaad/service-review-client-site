import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        axios.get('https://service-review-server-site-five.vercel.app/services')
            .then(res => {
                setServices(res.data)
            })
    }, [])

    return (
        <div className="mx-10 my-10">
            <h2 className="text-3xl font-bold mb-10">Services You’ll Love</h2>
            <div className="grid gap-6">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;