import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import userIcon from "../assets/user.png"
import logo from '../assets/logo/large-logo.png'
import { motion } from "framer-motion";


const NavBar = () => {

    const { user, signOutUser } = useAuth();

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Log Out Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/aboutUs">About Us</NavLink></li>
        {user && (
            <>
                <li><NavLink to="/add-services">Add Services</NavLink></li>
                <li><NavLink to="/my-services">My Services</NavLink></li>
                <li><NavLink to="/my-reviews">My Reviews</NavLink></li>
            </>
        )}
    </>

    return (
        <div className="navbar bg-blue-50 rounded-lg shadow-md md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden text-gray-700 hover:text-blue-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-blue-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-md">
                        {links}
                    </ul>
                </div>
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                    className="btn btn-ghost text-xl text-blue-800">
                    <img className="w-6 md:w-8 md:block" src={logo} alt="" />
                    <Link to="/" className="text-lg md:text-3xl hover:text-blue-600">ServeInsight</Link>
                </motion.div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-4 py-2 space-x-6 text-gray-900">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="flex items-center gap-2">
                        <div>
                            {user?.photoURL ? (
                                <img
                                    className="w-[64px] h-[64px] rounded-full border-2 border-blue-500"
                                    src={user?.photoURL}
                                    alt="User"
                                />
                            ) : (
                                <img
                                    className="w-[64px] h-[64px] rounded-full border-2 border-blue-500"
                                    src={userIcon}
                                    alt="Default"
                                />
                            )}
                        </div>
                        <button
                            onClick={handleSignOut}
                            className="btn bg-[#34A853] hover:bg-[#2c8b4a] text-white">
                            Sign out
                        </button>
                    </div>
                ) : (
                    <div className="flex gap-2">
                        <Link to="/register">
                            <button className="btn bg-[#34A853] hover:bg-[#2c8b4a] text-white">Register</button>
                        </Link>
                        <Link to="/signIn">
                            <button className="btn bg-[#34A853] hover:bg-[#2c8b4a] text-white">Sign In</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>

    );
};

export default NavBar;