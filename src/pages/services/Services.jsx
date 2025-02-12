/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { FcSearch } from "react-icons/fc";
import { Helmet } from "react-helmet";

const Services = ({ title }) => {
    const [services, setServices] = useState([]);
    const [filteredServices, setFilteredServices] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState("asc");

    const servicesPerPage = 4;

    useEffect(() => {
        setLoading(true);
        axios.get("https://service-review-server-site-five.vercel.app/services")
            .then(res => {
                setServices(res.data);
                setFilteredServices(res.data);

                const uniqueCategories = ["All", ...new Set(res.data.map(service => service.category))];
                setCategories(uniqueCategories);
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    const handleSearch = async (e) => {
        const query = e.target.value.trim();
        setSearchQuery(query);

        setLoading(true);

        try {
            const res = await axios.get(`https://service-review-server-site-five.vercel.app/services/search?query=${query}`);
            let updatedServices = res.data;

            if (selectedCategory !== "All") {
                updatedServices = updatedServices.filter(service => service.category === selectedCategory);
            }

            setFilteredServices(updatedServices);
            setCurrentPage(1);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);

        let updatedServices = services;

        if (searchQuery) {
            updatedServices = updatedServices.filter(service =>
                service.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (category !== "All") {
            updatedServices = updatedServices.filter(service => service.category === category);
        }

        setFilteredServices(updatedServices);
        setCurrentPage(1);
    };

    const handleSort = () => {
        const sortedServices = [...filteredServices].sort((a, b) => {
            return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
        });
        setFilteredServices(sortedServices);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    const indexOfLastService = currentPage * servicesPerPage;
    const indexOfFirstService = indexOfLastService - servicesPerPage;
    const currentServices = filteredServices.slice(indexOfFirstService, indexOfLastService);

    const totalPages = Math.ceil(filteredServices.length / servicesPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="mx-10 my-10">
            <Helmet>
                <title>{title || "Services | ServeInsight"}</title>
            </Helmet>

            <h2 className="text-3xl font-bold mb-10">Services You’ll Love</h2>

            <div className="w-3/4 md:w-1/2 mx-auto my-8 flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
                <label className="input input-bordered flex items-center gap-2 grow">
                    <input
                        type="text"
                        className="grow"
                        value={searchQuery}
                        onChange={handleSearch}
                        placeholder="Search with Service Title"
                    />
                    <FcSearch />
                </label>

                <select
                    className="select select-bordered"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            <div className="flex justify-center mb-6">
                <button
                    className="btn bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={handleSort}
                >
                    Sort by Price ({sortOrder === "asc" ? "Ascending" : "Descending"})
                </button>
            </div>

            {loading ? ( 
                <div className="flex justify-center items-center h-40">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : (
                <div>
                    <div className="grid gap-6">
                        {currentServices.length > 0 ? (
                            currentServices.map(service => (
                                <ServiceCard key={service._id} service={service}></ServiceCard>
                            ))
                        ) : (
                            <p>No services found</p>
                        )}
                    </div>

                    <div className="flex justify-center mt-8">
                        {[...Array(totalPages).keys()].map(pageNumber => (
                            <button
                                key={pageNumber + 1}
                                onClick={() => handlePageChange(pageNumber + 1)}
                                className={`btn ${currentPage === pageNumber + 1 ?
                                    "bg-[#34A853] hover:bg-[#2c8b4a] text-white" :
                                    "bg-amber-500 hover:bg-amber-600 text-white"} mx-1`}
                            >
                                {pageNumber + 1}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Services;
