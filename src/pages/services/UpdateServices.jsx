/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

const UpdateServices = ({ currentService, onClose, onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            image: currentService.image,
            companyName: currentService.companyName,
            website: currentService.website,
            description: currentService.description,
            category: currentService.category,
            price: currentService.price,
        },
    });

    const onSubmitHandler = (data) => {
        onSubmit(data); // Pass updated data to parent component
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
            <div className="h-3/4 w-full overflow-y-auto max-w-2xl bg-blue-50 rounded-3xl shadow-lg p-8 relative">
                <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-6">🔄 Update Service Information</h1>
                <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-6">
                    {/* Service Title */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">🔖 Service Title</label>
                        <input
                            type="text"
                            defaultValue={currentService.title}
                            readOnly
                            className="input input-bordered w-full border-2 border-gray-300 rounded-lg focus:outline-none bg-gray-100 cursor-not-allowed"
                        />
                    </div>

                    {/* Service Image */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">📸 Service Image</label>
                        <input
                            type="text"
                            {...register("image", {
                                required: "Service image URL is required",
                                pattern: {
                                    value: /^https?:\/\/.+/,
                                    message: "Invalid URL format",
                                },
                            })}
                            className="input input-bordered w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
                        />
                        {errors.image && <p className="text-sm text-red-500 mt-1">{errors.image.message}</p>}
                    </div>

                    {/* Company Name */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">🏢 Company Name</label>
                        <input
                            type="text"
                            {...register("companyName", {
                                required: "Company name is required",
                            })}
                            className="input input-bordered w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        {errors.companyName && <p className="text-sm text-red-500 mt-1">{errors.companyName.message}</p>}
                    </div>

                    {/* Website */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">🌐 Website</label>
                        <input
                            type="url"
                            {...register("website", {
                                required: "Website is required",
                                pattern: {
                                    value: /^https?:\/\/.+/,
                                    message: "Invalid URL format",
                                },
                            })}
                            className="input input-bordered w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        {errors.website && <p className="text-sm text-red-500 mt-1">{errors.website.message}</p>}
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">📝 Description</label>
                        <textarea
                            {...register("description", {
                                required: "Description is required",
                                minLength: { value: 20, message: "Description must be at least 20 characters" },
                            })}
                            className="textarea textarea-bordered w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            rows="4"
                        ></textarea>
                        {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description.message}</p>}
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">📂 Category</label>
                        <select
                            {...register("category")}
                            disabled
                            className="select select-bordered w-full border-2 border-gray-300 rounded-lg focus:outline-none cursor-not-allowed"
                        >
                            <option value="">Select a category</option>
                            <option value="IT">IT</option>
                            <option value="Health">Health</option>
                            <option value="Education">Education</option>
                            <option value="Finance">Finance</option>
                            <option value="Retail">Retail</option>
                            <option value="Events">Events</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.category && <p className="text-sm text-red-500 mt-1">{errors.category.message}</p>}
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">💰 Price in BDT</label>
                        <input
                            type="number"
                            {...register("price", {
                                required: "Price is required",
                                min: { value: 0, message: "Price must be a positive number" },
                            })}
                            className="input input-bordered w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                        />
                        {errors.price && <p className="text-sm text-red-500 mt-1">{errors.price.message}</p>}
                    </div>

                    {/* Action Buttons */}
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
                            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:opacity-90 transition"
                        >
                            🚀 Update Service
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateServices;
