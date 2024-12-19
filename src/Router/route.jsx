import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home";
import SignIn from "../pages/auth/Signin/SignIn";
import SignUp from "../pages/auth/signUp/SignUp";
import AuthLayout from "../Layout/AuthLayout";
import NotFound from "../pages/notfound/NotFound";
import About from "../pages/about/About";
import Contact from "../pages/Contact/Contact";
import Cart from "../pages/cart/Cart";
import WishList from "../pages/wishList/WishList";
import Details from "../pages/Products/Product/Details";
import Products from "../pages/Products/Products";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Navigate to="/books" replace />
            },
            {
                path: ":key",
                element: <Home />
            },
            {
                path: "product",
                element: <Products />,
            },
            {
                path: "products/:key",
                element: <Products />,
            },
            {
                path: "product/:id",
                element: <Details />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "wishList",
                element: <WishList />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                path: "sign-in",
                element: <SignIn />,
            },
            {
                path: "sign-up",
                element: <SignUp />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
