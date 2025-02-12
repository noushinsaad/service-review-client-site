import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "../services/ServiceCard";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const FeaturedServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('https://service-review-server-site-five.vercel.app/services?featured=true')
            .then(res => setServices(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="mx-10">
            <h2 className="text-3xl font-bold my-10">Exceptional Services at a Glance</h2>
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                    768: {
                        slidesPerView: 4,
                    },
                }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {services.map(service => (
                    <SwiperSlide key={service._id}>
                        <ServiceCard service={service} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex justify-end mt-4">
                <Link to="/services" className="mr-4 font-semibold text-blue-700">See More...</Link>
            </div>
        </div>
    );
};

export default FeaturedServices;
