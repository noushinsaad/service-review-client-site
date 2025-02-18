/* eslint-disable react/prop-types */
import Lottie from "lottie-react";
import registerLottieData from '../../assets/lottie/register.json';
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import SocialLogin from "../../shared/SocialLogin";
import logo from '../../assets/logo/large-logo.png';
import axios from "axios";
import { Helmet } from "react-helmet";

const Register = ({ title }) => {
    const { createUser, setUser, updateUserProfile } = useAuth();
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.target);

        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        if (password.length <= 6) {
            setError({ ...error, password: "Must be 6 or more characters long" });
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).*$/;
        if (!passwordRegex.test(password)) {
            setError({ ...error, password: "At least one uppercase and one lowercase needed" });
            return;
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                const createdAt = result?.user?.metadata?.creationTime;

                const newUser = { name, email, createdAt }

                axios.post('https://service-review-server-site-five.vercel.app/users', newUser)
                    .then(data => {
                        if (data.data.insertedId) {
                            console.log("Data added in the database");
                        }
                    });

                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "Registration Successful",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => setError({ ...error, register: err.code }));
    };

    return (
        <div className="hero bg-blue-100 min-h-screen flex flex-col items-center justify-center">
            <Helmet>
                <title>{title || "Register | ServeInsight"}</title>
            </Helmet>

            <div className="text-center my-4">
                <img className="w-16 mx-auto" src={logo} alt="ServeInsight Logo" />
                <Link to="/" className="text-3xl md:text-4xl font-bold text-blue-800">
                    ServeInsight
                </Link>
            </div>

            <div className="hero-content flex-col lg:flex-row-reverse p-4">
                <div className="text-center lg:text-left w-full md:w-96">
                    <Lottie animationData={registerLottieData}></Lottie>
                </div>
                <div className="card bg-blue-50 w-full shadow-2xl py-6 px-6">
                    <h1 className="text-center text-4xl font-bold text-green-800 mb-4">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">

                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Name */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-gray-800">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Full Name" className="input input-bordered w-full" required />
                            </div>

                            {/* Photo URL */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-gray-800">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="form-control mt-4">
                            <label className="label">
                                <span className="label-text text-gray-800">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>

                        {/* Password */}
                        <div className="form-control mt-4">
                            <label className="label">
                                <span className="label-text text-gray-800">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            {error.password && (
                                <label className="label text-xs text-red-500">{error.password}</label>
                            )}
                        </div>

                        {/* Register Button */}
                        <div className="form-control mt-4">
                            <button className="btn btn-primary text-white font-semibold bg-[#34A853] hover:bg-[#2c8b4a]">
                                Register
                            </button>
                        </div>
                    </form>

                    {/* Already Have Account */}
                    <p className="font-semibold text-center text-gray-700 mt-2">
                        Already Have An Account?
                        <Link to="/signIn">
                            <span className="text-[#D14334]"> Login</span>
                        </Link>
                    </p>

                    {/* Social Login */}
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;
