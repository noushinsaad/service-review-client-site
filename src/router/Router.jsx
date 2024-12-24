import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Register from "../pages/loginAndRegistration/Register";
import SignIn from "../pages/loginAndRegistration/SignIn";
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";
import ErrorPages from "../pages/ErrorPages/ErrorPages";
import MyServices from "../pages/services/MyServices";
import PrivateRouter from "./PrivateRouter";
import AddServices from "../pages/services/AddServices";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPages></ErrorPages>,
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
            },
            {
                path: 'my-services',
                element: <PrivateRouter><MyServices></MyServices></PrivateRouter>
            },
            {
                path: 'add-services',
                element: <PrivateRouter><AddServices></AddServices></PrivateRouter>
            }
        ]
    }
])

export default Router;