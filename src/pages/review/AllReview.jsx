import axios from "axios";
import Card from "./Card";
import { useEffect, useState } from "react";


const AllReview = () => {
    const [reviews, setReviews] = useState([]);
    const [services, setServices] = useState({});

    useEffect(() => {
        axios.get('https://service-review-server-site-five.vercel.app/reviews')
            .then(res => {
                setReviews(res.data);
                const serviceIds = [...new Set(res.data.map(review => review.serviceId))];

                Promise.all(
                    serviceIds.map(serviceId =>
                        axios.get(`https://service-review-server-site-five.vercel.app/services/${serviceId}`)
                    )
                ).then(serviceResponses => {
                    const servicesMap = {};
                    serviceResponses.forEach(response => {
                        servicesMap[response.data._id] = response.data.title;
                    });
                    setServices(servicesMap);
                });
            })
    }, [])

    return (
        <div className="my-6 mx-10">
            <h2 className="text-3xl font-bold text-center mb-6">User Reviews and Ratings</h2>
            {reviews.length === 0 ? (
                <p className="text-gray-500">No reviews till now</p>
            ) : (
                <div className="space-y-6">
                    {reviews.map((review) => (
                        <Card
                            key={review._id}
                            review={review}
                            service={services}
                        ></Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllReview;