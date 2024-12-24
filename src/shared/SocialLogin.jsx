import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const { signInWithGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(from);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="text-center">
            <div className="divider my-6">or</div>
            <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline flex items-center justify-center w-full rounded-md"
            >
                <FcGoogle className="mr-2 text-2xl" />
                Login with Google
            </button>
        </div>
    );
};

export default SocialLogin;