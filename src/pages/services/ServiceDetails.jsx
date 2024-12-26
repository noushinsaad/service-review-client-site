import { useLoaderData } from "react-router-dom";
import AddReview from "../review/AddReview";
import Review from "../review/Review";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";


const ServiceDetails = () => {
    const { user } = useAuth();
    const [service, setService] = useState(useLoaderData());
    const id = service._id
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get(`https://service-review-server-site-five.vercel.app/reviews?id=${id}`)
            .then(res => {
                setReviews(res.data)
            })
    }, [id]);

    const handleAddReview = (newReview) => {
        setReviews((prevReviews) => [newReview, ...prevReviews]);
    };



    return (
        <div className="container mx-auto py-12 px-6">
            {/* Service Details */}
            <div className="bg-blue-50 shadow-lg rounded-lg p-6 mb-6">
                <h1 className="text-3xl font-bold text-gray-800">{service.title}</h1>
                <img src={service.image} alt={service.title} className="w-full h-64 object-cover rounded-lg mt-4" />
                <p className="text-gray-600 mt-4">{service.description}</p>
                <p className="mt-2">
                    <strong>Category:</strong> {service.category}
                </p>
                <p className="mt-2">
                    <strong>Company Name:</strong> {service.companyName}
                </p>
                <p className="mt-2">
                    <strong>Website:</strong> <a className="text-blue-700" href={service.website}>{service.website}</a>
                </p>
                <p className="mt-2">
                    <strong>Price:</strong> BDT {service.price}
                </p>
                <p className="mt-2">
                    <strong>Added By:</strong> {service.userEmail}
                </p>
                <p className="mt-2">
                    <strong>Added On:</strong> {service.addedDate}
                </p>
                <p className="mt-2">
                    <strong>Total Reviews:</strong> {service.reviewCount ?? 0}
                </p>
            </div>


            {/* Reviews Section */}
            <div>
                <Review reviews={reviews}></Review>
            </div>

            {/* Add Review */}
            {
                user && <div>
                    <AddReview id={id} onAddReview={handleAddReview} setService={setService}></AddReview>
                </div>
            }
        </div>
    );
};

export default ServiceDetails;