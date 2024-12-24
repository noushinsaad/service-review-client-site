import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import userIcon from "../assets/user.png"
import logo from '../assets/logo/large-logo.png'


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
    </>

    return (
        <div className="navbar bg-base-100 px-16">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img className='w-12' src={logo} alt="" />
                    <Link to='/' className="text-3xl">ServeInsight</Link>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="flex items-center gap-2">
                        <div>
                            {user?.photoURL ? (
                                <img className="w-[40px] h-[40px] rounded-full" src={user?.photoURL} alt="User" />
                            ) : (
                                <img className="w-[40px] h-[40px] rounded-full" src={userIcon} alt="Default" />
                            )}
                        </div>
                        <button onClick={handleSignOut} className="btn">Sign out</button>
                    </div> :
                        <div className="flex gap-2">
                            <Link to="/register">
                                <button className="btn">Register</button>
                            </Link>
                            <Link to="/signIn">
                                <button className="btn">Sign In</button>
                            </Link>
                        </div>
                }


            </div>
        </div>
    );
};

export default NavBar;