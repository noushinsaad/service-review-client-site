import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";


const MainLayout = () => {
    return (
        <div className="bg-blue-100">
            <header className="sticky top-0 z-50 shadow-md">
                <nav>
                    <NavBar />
                </nav>
            </header>
            <main className="min-h-screen">
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayout;