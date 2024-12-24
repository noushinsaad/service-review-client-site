import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";


const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;