import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";

const MainLayout = () => {
    const location = useLocation();
    const hideNavAndFooterRoutes = ["/signIn", "/register"];

    return (
        <div className="bg-blue-100">
            {!hideNavAndFooterRoutes.includes(location.pathname) && (
                <header className="sticky top-0 z-50 shadow-md">
                    <nav>
                        <NavBar />
                    </nav>
                </header>
            )}
            <main className="min-h-screen">
                <Outlet />
            </main>
            {!hideNavAndFooterRoutes.includes(location.pathname) && (
                <footer>
                    <Footer />
                </footer>
            )}
        </div>
    );
};

export default MainLayout;
