import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AddService = () => {
    const { user } =useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const addedDate = new Date().toLocaleDateString();

   

    const onSubmit = (data) => {
        const newService = {
            ...data,
            addedDate,
            userEmail: user.email,
        };

        // console.log(newService);

        fetch("http://localhost:5000/services", {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(newService),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire("Success!", "Service added successfully", "success");
                    reset();
                }
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

            <div className="w-full max-w-2xl bg-blue-50 rounded-3xl shadow-lg p-8">
                <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
                    🛠️ Add a New Service
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

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
                            placeholder="http://example.com"
                        />
                        {errors.image && <p className="text-sm text-red-500 mt-1">{errors.image.message}</p>}
                    </div>

                    {/* Service Title */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">🔖 Service Title</label>
                        <input
                            type="text"
                            {...register("title", { required: "Service title is required" })}
                            className="input input-bordered w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                            placeholder="Enter the service title"
                        />
                        {errors.title && <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>}
                    </div>

                    {/* Company Name */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">🏢 Company Name</label>
                        <input
                            type="text"
                            {...register("companyName", { required: "Company name is required" })}
                            className="input input-bordered w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Enter the company name"
                        />
                        {errors.companyName && <p className="text-sm text-red-500 mt-1">{errors.companyName.message}</p>}
                    </div>

                    {/* Website */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">🌐 Website</label>
                        <input
                            type="text"
                            {...register("website", {
                                required: "Website is required",
                                pattern: {
                                    value: /^https?:\/\/.+/,
                                    message: "Invalid URL format",
                                },
                            })}
                            className="input input-bordered w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="http://example.com"
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
                            placeholder="Write a brief description of the service"
                        ></textarea>
                        {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description.message}</p>}
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">📂 Category</label>
                        <select
                            {...register("category", { required: "Category is required" })}
                            className="select select-bordered w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                        >
                            <option value="">Select a category</option>
                            <option value="IT">IT</option>
                            <option value="Health">Health</option>
                            <option value="Education">Education</option>
                            <option value="Finance">Finance</option>
                            <option value="Retail">Retail</option>
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
                            placeholder="Enter the service price"
                        />
                        {errors.price && <p className="text-sm text-red-500 mt-1">{errors.price.message}</p>}
                    </div>

                    {/* Added Date (Read-only) */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">📅 Added Date</label>
                        <input
                            type="text"
                            value={addedDate}
                            className="input input-bordered w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 bg-gray-100"
                            readOnly
                        />
                    </div>

                    {/* User Email (Read-only) */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">✉️ User Email</label>
                        <input
                            type="text"
                            value={user.email}
                            className="input input-bordered w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 bg-gray-100"
                            readOnly
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-md hover:opacity-90"
                        >
                            🚀 Add Service
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};



export default AddService;
