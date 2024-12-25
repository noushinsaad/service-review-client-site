/* eslint-disable react/prop-types */
import ReactRating from "react-rating";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const UpdateReview = ({ currentReview, onClose, onSubmit, serviceTitle }) => {

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            text: currentReview?.text,
            rating: currentReview?.rating
        }
    });

    const rating = watch("rating");


    useEffect(() => {
        if (currentReview) {
            setValue("text", currentReview.text);
            setValue("rating", currentReview.rating);
        }
    }, [currentReview, setValue]);

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
            <div className="h-3/4 w-full overflow-y-auto max-w-2xl bg-blue-50 rounded-3xl shadow-lg p-8 relative">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Update Your Review for: {serviceTitle}</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Update Review Text
                        </label>
                        <textarea
                            {...register("text", {
                                required: "Review text is required",
                                minLength: {
                                    value: 10,
                                    message: "Review must be at least 10 characters long",
                                },
                            })}
                            className="textarea textarea-bordered w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Update your review..."
                            rows="4"
                        ></textarea>
                        {errors.text && (
                            <p className="text-sm text-red-500 mt-1">{errors.text.message}</p>
                        )}
                    </div>


                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Update Rating</label>
                        <ReactRating
                            {...register("rating", {
                                required: "Rating is required",
                            })}
                            emptySymbol={<span className="text-gray-400 text-2xl">☆</span>}
                            fullSymbol={<span className="text-yellow-500 text-2xl">★</span>}
                            initialRating={rating || 0}
                            onChange={(value) =>
                                setValue("rating", value, { shouldValidate: true })
                            }
                        />
                        {errors.rating && (
                            <p className="text-sm text-red-500 mt-1">{errors.rating.message}</p>
                        )}
                    </div>


                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-400 transition"
                        >
                            ❌ Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full shadow-md hover:opacity-90"
                        >
                            🚀 Update Review
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;
