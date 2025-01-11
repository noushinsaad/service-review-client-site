import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const SocialLogin = () => {

    const { signInWithGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                const createdAt = user.metadata?.creationTime;
                const newUser = {
                    name: user.displayName,
                    email: user.email,
                    createdAt
                };

                axios.post('https://service-review-server-site-five.vercel.app/users', newUser)
                    .then(data => {
                        if (data.data.insertedId) {
                            console.log("Data added in then database")
                        }
                    })
                navigate(from);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="text-center px-8">
            <div className="divider my-6">or</div>
            <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline flex items-center justify-center w-full rounded-md"
            >
                <FcGoogle className="text-2xl" />
                Login with Google
            </button>
        </div>
    );
};

export default SocialLogin;