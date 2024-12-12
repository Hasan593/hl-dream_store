import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home";
import SignIn from "../pages/auth/Signin/SignIn";
import SignUp from "../pages/auth/signUp/SignUp";
import AuthLayout from "../Layout/AuthLayout";
import NotFound from "../pages/notfound/NotFound";
import About from "../pages/about/About";
import Products from "../pages/products/Products";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'product',
                element: <Products />
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