import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Register from "../pages/loginAndRegistration/Register";
import SignIn from "../pages/loginAndRegistration/SignIn";
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Route not found</h2>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'signIn',
                element: <SignIn></SignIn>
            },
            {
                path: 'services',
                element: <Services></Services>
            }
        ]
    }
])

export default Router;