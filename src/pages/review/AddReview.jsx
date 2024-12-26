/* eslint-disable react/prop-types */
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import ReactRating from "react-rating";
import { useForm } from "react-hook-form";


const AddReview = ({ id, onAddReview, setService }) => {
    const { user } = useAuth()
    // const [reviews, setReviews] = useState([]);
    const { register, handleSubmit, watch, reset, setValue, formState: { errors } } = useForm();
    const postedDate = new Date().toLocaleDateString();
    const rating = watch("rating");

    const onSubmit = (data) => {

        const newReview = {
            ...data,
            rating: parseInt(data.rating),
            userPhoto: user?.photoURL,
            userName: user?.displayName,
            userEmail: user?.email,
            postedDate,
            serviceId: id,
        };

        // console.log(newReview);
        fetch(`https://service-review-server-site-five.vercel.app/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newReview),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire("Success!", "Review added successfully", "success");
                    // setReviews((prev) => [...prev, newReview]);
                    reset();
                    onAddReview(newReview)
                    setService(data.updatedService)
                }
            });
    };

    return (
        <div className="mt-8 bg-blue-50 p-6 rounded-md shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Add a Review</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Write a Review
                    </label>
                    <textarea
                        {...register("text", {
                            required: "Review text is required",
                            minLength: {
                                value: 10,
                                message: "Review must be at least 10 characters long",
                            },
                        })}
                        className="textarea textarea-bordered w-full border-2 border-gray-300 rounded-lg focus:outline-none"
                        placeholder="Write your review..."
                        rows="4"
                    ></textarea>
                    {errors.text && <p className="text-sm text-red-500 mt-1">{errors.text.message}</p>}
                </div>


                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Rating</label>
                    <ReactRating
                        {...register("rating", {
                            required: "Rating is required",
                        })}
                        emptySymbol={<span className="text-gray-400 text-2xl">☆</span>}
                        fullSymbol={<span className="text-yellow-500 text-2xl">★</span>}
                        initialRating={rating || 0}
                        onChange={(value) => setValue("rating", value, { shouldValidate: true })}
                    />
                    {errors.rating && <p className="text-sm text-red-500 mt-1">{errors.rating.message}</p>}
                </div>




                <div>
                    <button
                        type="submit"
                        className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full shadow-md hover:opacity-90"
                    >
                        Submit Review
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddReview;