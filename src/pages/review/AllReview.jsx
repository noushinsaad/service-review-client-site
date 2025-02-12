/* eslint-disable react/prop-types */
import axios from "axios";
import Card from "./Card";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const AllReview = ({ title }) => {
    const [reviews, setReviews] = useState([]);
    const [services, setServices] = useState({});
    const [loading, setLoading] = useState(true);

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
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="my-6 mx-10">
            <Helmet>
                <title>{title || "Reviews | ServeInsight"}</title>
            </Helmet>

            <h2 className="text-3xl font-bold text-center mb-6">User Reviews and Ratings</h2>
            {loading ? (
                <div className="flex justify-center items-center h-40">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : reviews.length === 0 ? (
                <p className="text-gray-500">No reviews till now</p>
            ) : (
                <div className="space-y-6">
                    {reviews.map((review) => (
                        <Card
                            key={review._id}
                            review={review}
                            service={services}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllReview;
