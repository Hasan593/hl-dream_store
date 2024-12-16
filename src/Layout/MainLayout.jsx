import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";
import Loading from "../components/Loading";

const MainLayout = () => {
    const navigation = useNavigation();
    return (
        <>
            <Header />
            <div>
                { navigation.state === "loading" ? <Loading /> : <Outlet /> }
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;