import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// eslint-disable-next-line react/prop-types
const PrivateRouter = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    console.log(location)

    if (loading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <span className="loading loading-ring loading-lg text-white"></span>
            </div>
        );
    }

    if (user) {
        return children
    }

    return <Navigate to="/signIn" state={location?.pathname}></Navigate>
};

export default PrivateRouter;