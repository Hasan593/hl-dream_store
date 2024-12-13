import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";

const MainLayout = () => {
    return (
        <>
            <Header />
            <div className="h-screen">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;