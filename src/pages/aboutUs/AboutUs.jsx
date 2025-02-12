/* eslint-disable react/prop-types */
import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AboutUs = ({title}) => {
    const { user } = useAuth();

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

    const handleStartExploringClick = (e) => {
        if (user) {
            e.preventDefault();
            Swal.fire({
                title: 'You are already logged in!',
                text: 'Redirecting to the HomePage...',
                icon: 'info',
                confirmButtonText: 'OK'
            }).then(() => {
                
                window.location.href = '/';
            });
        }
   
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-12 space-y-20">
            <Helmet>
                <title>{title || "About Us | ServeInsight"}</title>
            </Helmet>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: 'spring' }}
                className="relative bg-gradient-to-br from-blue-50 to-blue-100 text-center rounded-2xl shadow-2xl py-20 px-6 overflow-hidden"
            >
                <h2 className="text-5xl font-extrabold text-blue-800 drop-shadow-md">
                    About ServeInsight
                </h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-gray-700 mt-6 max-w-2xl mx-auto leading-relaxed"
                >
                    Discover, review, and explore services with insights from our trusted community of experts
                </motion.p>
                <div className="mt-8 flex justify-center space-x-4">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="w-4 h-4 bg-blue-300 rounded-full"
                    />
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="w-4 h-4 bg-blue-400 rounded-full"
                    />
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="w-4 h-4 bg-blue-500 rounded-full"
                    />
                </div>
            </motion.div>


            <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-blue-100 rounded-lg">
                            <span className="text-3xl">👥</span>
                        </div>
                        <h3 className="text-3xl font-semibold text-blue-700">Who We Are</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        ServeInsight is a <span className="font-bold text-blue-800">community-driven platform </span> 
                        where authentic experiences shape service discovery.
                        We empower users with <span className="bg-blue-100 px-2 rounded">real-time insights</span> 
                        and <span className="bg-blue-100 px-2 rounded">verified reviews</span> to make confident decisions.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-blue-100 rounded-lg">
                            <span className="text-3xl">🎯</span>
                        </div>
                        <h3 className="text-3xl font-semibold text-blue-700">Our Mission</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        To create a <span className="font-bold text-blue-800">transparent ecosystem</span> where every review matters. 
                        We&apos;re building bridges between 
                        <span className="border-b-2 border-blue-300"> quality services </span> 
                         and <span className="border-b-2 border-blue-300">informed users</span> through genuine community engagement.
                    </p>
                </motion.div>
            </div>

 
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="space-y-16"
            >
                <h3 className="text-3xl font-semibold text-blue-700 text-center">Our Journey</h3>
                <div className="relative">
                    <div className="absolute left-1/2 h-full w-1 bg-blue-100 -translate-x-1/2"></div>
                    <div className="space-y-20">
                        {[
                            { year: '2022', emoji: '🚀', text: 'Founded with a mission to revolutionize service reviews' },
                            { year: '2023', emoji: '🌱', text: `${stats.userCount-1}+ trusted users & ${stats.servicesCount-1}+ services reviewed` },
                            { year: '2024', emoji: '🏆', text: 'Most trusted service review platform in the region' }
                        ].map((item, idx) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                className="relative grid grid-cols-5 items-center"
                            >
                                <div className="col-span-2 text-right pr-8">
                                    {idx % 2 === 0 && (
                                        <div className="space-y-2">
                                            <h4 className="text-2xl font-bold text-blue-800">{item.emoji} {item.year}</h4>
                                            <p className="text-gray-600">{item.text}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="col-span-1 flex justify-center">
                                    <div className="w-8 h-8 bg-blue-500 rounded-full shadow-lg flex items-center justify-center text-white">
                                        {idx + 1}
                                    </div>
                                </div>
                                <div className="col-span-2 text-left pl-8">
                                    {idx % 2 !== 0 && (
                                        <div className="space-y-2">
                                            <h4 className="text-2xl font-bold text-blue-800">{item.emoji} {item.year}</h4>
                                            <p className="text-gray-600">{item.text}</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

  
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="grid md:grid-cols-2 gap-8"
            >
                <div className="md:col-span-2 text-center mb-12">
                    <h3 className="text-3xl font-semibold text-blue-700">Why Choose ServeInsight?</h3>
                </div>
                {[
                    { icon: '✅', title: 'Trusted Reviews', text: 'Real user insights with AI-powered authenticity checks' },
                    { icon: '📊', title: 'Smart Analytics', text: 'Data-driven insights for informed decision making' },
                    { icon: '🛡️', title: 'Secure Platform', text: 'Military-grade encryption for all user data' },
                    { icon: '💬', title: 'Live Community', text: '24/7 support and real-time Q&A forum' }
                ].map((feature, idx) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
                    >
                        <div className="flex items-start gap-4">
                            <span className="text-3xl">{feature.icon}</span>
                            <div>
                                <h4 className="text-xl font-semibold text-blue-800">{feature.title}</h4>
                                <p className="text-gray-700 mt-2">{feature.text}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>


            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-500 animate-gradient-x"></div>
                <div className="relative py-16 px-8 text-center">
                    <h3 className="text-4xl font-bold text-white mb-6">
                        Join {stats.userCount - 1}+ Trusted Members
                    </h3>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <motion.a
                            href={user ? "#" : "/register"} 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold flex items-center gap-2"
                            onClick={handleStartExploringClick}
                        >
                            Start Exploring 🌟
                        </motion.a>
                        <motion.a
                            href="/services"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold flex items-center gap-2"
                        >
                            Share Your Experience 💬
                        </motion.a>
                    </div>
                    <div className="mt-8 flex justify-center space-x-2">
                        {Array(5).fill().map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, delay: i * 0.2 }}
                                className="w-2 h-2 bg-white/50 rounded-full"
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutUs;