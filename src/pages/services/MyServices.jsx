import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { FcSearch } from "react-icons/fc";
import Swal from "sweetalert2";
import UpdateServices from "./updateServices";


const MyServices = () => {
    const [services, setServices] = useState([]);
    const [filteredServices, setFilteredServices] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [currentService, setCurrentService] = useState(null);


    const { user } = useAuth();

    useEffect(() => {
        axios.get(`https://service-review-server-site-five.vercel.app/services?email=${user.email}`)
            .then(res => {
                setServices(res.data)
                setFilteredServices(res.data);
            });
    }, [user.email]);



    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);


        const filtered = services.filter(service =>
            service.title.toLowerCase().includes(query)
        );
        setFilteredServices(filtered);

    }

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
                axios.delete(`https://service-review-server-site-five.vercel.app/services/${id}`)
                    .then(res => {
                        setFilteredServices(prevServices =>
                            prevServices.filter(service => service._id !== id)
                        );
                        // console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Service has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const handleUpdate = (service) => {
        setModalVisible(true);
        setCurrentService(service);
    };

    const handleModalSubmit = (updatedService) => {
        axios.put(`https://service-review-server-site-five.vercel.app/services/${currentService._id}`, updatedService)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    setServices(prevServices =>
                        prevServices.map(service =>
                            service._id === currentService._id ? { ...service, ...updatedService } : service
                        )
                    );
                    setFilteredServices(prevServices =>
                        prevServices.map(service =>
                            service._id === currentService._id ? { ...service, ...updatedService } : service
                        )
                    );
                    Swal.fire({
                        title: "Updated!",
                        text: "Service information has been updated.",
                        icon: "success"
                    });
                }
                setModalVisible(false);
            });
    };

    return (
        <div className="bg-blue-50 p-8 rounded-lg shadow-md m-6">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">My Services</h2>
            <div className="w-3/4 md:w-1/2 mx-auto my-4">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" value={searchQuery}
                        onChange={handleSearch} placeholder="Search with Service Title" />
                    <FcSearch />
                </label>
            </div>
            <div className="overflow-x-auto bg-white rounded-lg shadow-md p-4">
                <table className="table-auto w-full text-left border-collapse">
                    {/* Table Header */}
                    <thead>
                        <tr className="bg-primary text-white">
                            <th className="p-4 text-sm md:text-base">Index</th>
                            <th className="p-4 text-sm md:text-base">Service Title</th>
                            <th className="p-4 text-sm md:text-base">Added Date</th>
                            <th className="p-4 text-sm md:text-base">Price (in BDT)</th>
                            <th className="p-4 text-sm md:text-base">Actions</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {filteredServices.map((service, index) => (
                            <tr
                                key={service._id}
                                className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                                    } hover:bg-gray-200`}
                            >
                                <td className="p-4 text-gray-700 text-xs md:text-sm">{index + 1}</td>
                                <td className="p-4 text-gray-800 text-xs md:text-sm">{service.title}</td>
                                <td className="p-4 text-gray-600 text-xs md:text-sm">{service.addedDate}</td>
                                <td className="p-4 text-gray-600 text-xs md:text-sm">{service.price}</td>
                                <td className="p-4">
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => handleUpdate(service)}
                                            className="btn btn-accent btn-xs md:btn-sm">
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleDelete(service._id)}
                                            className="btn btn-error btn-xs md:btn-sm">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredServices.length === 0 && (
                    <p className="text-center text-gray-500 mt-4">
                        {searchQuery
                            ? "No services match your search query!"
                            : "No services added yet! Please add a service to get started."}
                    </p>
                )}
            </div>

            {modalVisible && currentService && (
                <UpdateServices
                    currentService={currentService}
                    onClose={() => setModalVisible(false)}
                    onSubmit={handleModalSubmit}
                />
            )}
        </div>
    );
};

export default MyServices;
