import Lottie from "lottie-react";
import loginLottieJSON from '../../assets/lottie/login.json'
import { Link } from "react-router-dom";
import { useState } from "react";


const SignIn = () => {

    const [error, setError] = useState({})

    const handleSignIn = e => {
        e.preventDefault();
    }

    return (
        <div className="hero bg-gradient-to-b from-green-500 to-gray-100 h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={loginLottieJSON}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-4">
                    <h1 className="ml-8 mt-4 text-5xl font-bold">Login now!</h1>
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="font-semibold text-center">Don’t Have An Account?
                        <Link to="/register"><span className="text-red-500">Register</span></Link>
                    </p>
                    {/* <SocialLogin></SocialLogin> */}
                </div>
            </div>
        </div>
    );
};

export default SignIn;