import Lottie from "lottie-react";
import loginLottieJSON from '../../assets/lottie/login.json'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import SocialLogin from "../../shared/SocialLogin";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const SignIn = () => {
    const { setUser, signInUser } = useAuth();
    const [error, setError] = useState({})
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';

    const handleSignIn = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Logged in Successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate(from);
            })
            .catch(err => {
                setError({ ...error, login: err.code })
            })
    }

    return (
        <div className="hero bg-blue-100 h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={loginLottieJSON}></Lottie>
                </div>
                <div className="card bg-blue-50 w-full  shadow-2xl py-6 px-4">
                    <h1 className="ml-8 mt-4 text-5xl font-bold text-green-800">Login now!</h1>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            {
                                error.login &&
                                <label className="label text-sm text-red-500">
                                    {error.login}
                                </label>
                            }

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-[#34A853] hover:bg-[#2c8b4a]">Login</button>
                        </div>
                    </form>
                    <p className="font-semibold text-center">Don’t Have An Account?
                        <Link to="/register"><span className="text-red-500"> Register</span></Link>
                    </p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignIn;