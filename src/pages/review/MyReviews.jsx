import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import ReviewCard from "./ReviewCard";
import Swal from "sweetalert2";
import UpdateReview from "./UpdateReview";


const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [services, setServices] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [currentReview, setCurrentReview] = useState(null)
    const { user } = useAuth();

    useEffect(() => {
        axios.get(`https://service-review-server-site-five.vercel.app/reviews?email=${user.email}`)
            .then(res => {
                setReviews(res.data);

                const serviceIds = [...new Set(res.data.map(review => review.serviceId))];

                // Fetch service details for these IDs
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
            });
    }, [user.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://service-review-server-site-five.vercel.app/reviews/${id}`)
                    .then(res => {
                        setReviews(prevReviews => prevReviews.filter(
                            review => review._id !== id
                        ));
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Service has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        })
    }

    const handleUpdate = (review) => {
        setModalVisible(true);
        setCurrentReview(review);
    }

    const handleModalSubmit = (updatedReview) => {
        axios.put(`https://service-review-server-site-five.vercel.app/reviews/${currentReview._id}`, updatedReview)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    setReviews(prevReviews =>
                        prevReviews.map(review =>
                            review._id === currentReview._id ? { ...review, ...updatedReview } : review
                        )
                    );
                    Swal.fire({
                        title: "Updated!",
                        text: "Review information has been updated.",
                        icon: "success"
                    });
                }
                setModalVisible(false);
            })
    }

    return (
        <div className="container mx-auto py-12 px-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">My Reviews</h1>
            {reviews.length === 0 ? (
                <p className="text-gray-500">You haven&apos;t submitted any reviews yet!</p>
            ) : (
                <div className="space-y-6">
                    {reviews.map((review) => (
                        <ReviewCard
                            key={review._id}
                            review={review}
                            services={services}
                            onUpdate={handleUpdate}
                            onDelete={handleDelete}
                        ></ReviewCard>
                    ))}
                </div>
            )}

            {modalVisible && currentReview && (
                <UpdateReview
                    currentReview={currentReview}
                    serviceTitle={services[currentReview.serviceId]}
                    onClose={() => setModalVisible(false)}
                    onSubmit={handleModalSubmit}
                />
            )}
        </div>
    );
};

export default MyReviews;
