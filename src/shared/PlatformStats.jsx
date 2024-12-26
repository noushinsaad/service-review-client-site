import axios from 'axios';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const PlatformStats = () => {
    const [stats, setStats] = useState({
        userCount: 0,
        reviewsCount: 0,
        servicesCount: 0,
    });

    useEffect(() => {
        axios.get("https://service-review-server-site-five.vercel.app/counts")
            .then(res => setStats(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="flex flex-wrap justify-around bg-blue-50 p-8 rounded-lg shadow-md mx-10 my-4">
            <div className="text-center m-4">
                <h3 className="text-2xl font-bold text-primary">Users</h3>
                <p className="text-4xl font-semibold text-gray-700">
                    <CountUp end={stats.userCount} duration={2} />
                </p>
            </div>
            <div className="text-center m-4">
                <h3 className="text-2xl font-bold text-primary">Reviews</h3>
                <p className="text-4xl font-semibold text-gray-700">
                    <CountUp end={stats.reviewsCount} duration={2} />
                </p>
            </div>
            <div className="text-center m-4">
                <h3 className="text-2xl font-bold text-primary">Services</h3>
                <p className="text-4xl font-semibold text-gray-700">
                    <CountUp end={stats.servicesCount} duration={2} />
                </p>
            </div>
        </div>
    );
};

export default PlatformStats;