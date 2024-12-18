import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home";
import SignIn from "../pages/auth/Signin/SignIn";
import SignUp from "../pages/auth/signUp/SignUp";
import AuthLayout from "../Layout/AuthLayout";
import NotFound from "../pages/notfound/NotFound";
import About from "../pages/about/About";
import Products from "../pages/products/Products";
import Contact from "../pages/Contact/Contact";
import axios from "axios";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Navigate to="/books" replace />,
            },
            {
                path: ':key', // ক্যাটাগরি URL দিয়ে রাউট করবেন
                element: <Home /> // Home পেজে সেখানেই Tabs রেন্ডার হবে
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'product',
                element: <Products />,
                loader: async () => {
                    const response = await axios.get('https://sunnah-store-server-azure.vercel.app/products');
                    return response.data;
                },
            },
            {
                path: 'products/:key',
                element: <Products />,
                loader: async ({params}) => {
                    const response = await axios.get(`https://sunnah-store-server-azure.vercel.app/products/${params.key}`);
                    return response.data;
                }
            },
            {
                path: 'contact',
                element: <Contact />
            },
        ]
    },
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'sign-in',
                element: <SignIn />
            },
            {
                path: 'sign-up',
                element: <SignUp />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;
