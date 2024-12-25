import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const MyServices = () => {
    const [services, setServices] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        axios.get(`http://localhost:5000/services?email=${user.email}`)
            .then(res => setServices(res.data));
    }, [user.email]);

    return (
        <div className="bg-light-blue p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-primary mb-6">My Services</h2>
            <div className="overflow-x-auto bg-white rounded-lg shadow-md p-4">
                <table className="w-full text-left border-collapse">
                    {/* Table Header */}
                    <thead>
                        <tr className="bg-primary text-white">
                            <th className="p-4">Index</th>
                            <th className="p-4">Service Title</th>
                            <th className="p-4">Added Date</th>
                            <th className="p-4">Price per Month (in BDT)</th>
                            <th className="p-4">Actions</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {
                            services.map((service, index) => (
                                <tr
                                    key={service._id}
                                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                                        } hover:bg-light-gray`}
                                >
                                    <td className="p-4 text-gray-700 font-medium">{index + 1}</td>
                                    <td className="p-4 text-gray-800">{service.title}</td>
                                    <td className="p-4 text-gray-600">{service.addedDate}</td>
                                    <td className="p-4 text-gray-600">{service.price}</td>
                                    <td className="p-4">
                                        <div className="flex space-x-4">
                                            <button
                                                className="btn btn-accent"
                                            >
                                                Update
                                            </button>
                                            <button
                                                className="btn btn-error"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {services.length === 0 && (
                    <p className="text-center text-gray-500 mt-4">No services added for this user yet!.</p>
                )}
            </div>
        </div>
    );
};

export default MyServices;
