import { Link } from "react-router-dom";

const CallToAction = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-12 px-6 text-center rounded-lg shadow-md my-6 mx-10">
            <h2 className="text-4xl font-bold mb-4">
                Join the Community of Trusted Reviews!
            </h2>
            <p className="text-lg mb-8">
                Discover services you can trust, share your experiences, and contribute to a thriving community of users. Your voice matters!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Link to="/add-services">
                    <button className="btn bg-white text-blue-500 font-bold px-6 py-2 rounded-lg shadow-md hover:bg-blue-100 transition-all">
                        Add a Service
                    </button>
                </Link>
                <Link to="/services">
                    <button className="btn bg-white text-blue-500 font-bold px-6 py-2 rounded-lg shadow-md hover:bg-blue-100 transition-all">
                        Explore Services
                    </button>
                </Link>
                <Link to="/reviews">
                    <button className="btn bg-white text-blue-500 font-bold px-6 py-2 rounded-lg shadow-md hover:bg-blue-100 transition-all">
                        Read Reviews
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CallToAction;
