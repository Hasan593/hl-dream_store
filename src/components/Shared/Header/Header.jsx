import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/HL-full-Logo.png'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-gray-500 text-white shadow-md">
            <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-between">
                        <div className="flex-shrink-0">
                            <Link to={'/'}>
                                <img className='h-[44px] w-[150px]' src={logo} alt="HL Dream Store" />
                            </Link>
                        </div>
                        {/* Navbar Links for Desktop */}
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <NavLink to="/" className={({ isActive, isPending }) => isActive ? 'bg-fuchsia-500 px-3 py-2 rounded-md font-medium text-lg' : isPending ? 'bg-green-300' : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white"}>
                                    Home
                                </NavLink>
                                <NavLink to="/about" className={({ isActive, isPending }) => isActive ? 'bg-fuchsia-500 px-3 py-2 rounded-md font-medium text-lg' : isPending ? 'bg-green-300' : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white"}>
                                    About
                                </NavLink>
                                <NavLink to="/product" className={({ isActive, isPending }) => isActive ? 'bg-fuchsia-500 px-3 py-2 rounded-md font-medium text-lg' : isPending ? 'bg-green-300' : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white"}>
                                    Product
                                </NavLink>
                                <NavLink to="/contact" className={({ isActive, isPending }) => isActive ? 'bg-fuchsia-500 px-3 py-2 rounded-md font-medium text-lg' : isPending ? 'bg-green-300' : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white"}>
                                    Contact
                                </NavLink>
                                <NavLink to="/auth/sign-in" className={({ isActive, isPending }) => isActive ? 'bg-fuchsia-500 px-3 py-2 rounded-md font-medium text-lg' : isPending ? 'bg-green-300' : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white"}>
                                    Sign-In
                                </NavLink>
                                <NavLink to="/auth/sign-up" className={({ isActive, isPending }) => isActive ? 'bg-fuchsia-500 px-3 py-2 rounded-md font-medium text-lg' : isPending ? 'bg-green-300' : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white"}>
                                    Sign-Up
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="sm:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu - Hidden by default */}
                <div className={`sm:hidden ${menuOpen ? 'block' : 'hidden'} bg-gray-500 p-4`}>
                    <div className="flex flex-col space-y-4 items-center">
                        <NavLink to="/" className={({ isActive, isPending }) => isActive ? 'bg-fuchsia-500 text-center w-full py-2 rounded-md font-medium text-lg' : isPending ? 'bg-green-300' : "text-white text-center w-full py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white"}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={({ isActive, isPending }) => isActive ? 'bg-fuchsia-500 text-center w-full py-2 rounded-md font-medium text-lg' : isPending ? 'bg-green-300' : "text-white text-center w-full py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white"}>
                            About
                        </NavLink>
                        <NavLink to="/product" className={({ isActive, isPending }) => isActive ? 'bg-fuchsia-500 text-center w-full py-2 rounded-md font-medium text-lg' : isPending ? 'bg-green-300' : "text-white text-center w-full py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white"}>
                            Product
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive, isPending }) => isActive ? 'bg-fuchsia-500 text-center w-full py-2 rounded-md font-medium text-lg' : isPending ? 'bg-green-300' : "text-white text-center w-full py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white"}>
                            Contact
                        </NavLink>
                        <NavLink to="/auth/sign-in" className={({ isActive, isPending }) => isActive ? 'bg-fuchsia-500 text-center w-full py-2 rounded-md font-medium text-lg' : isPending ? 'bg-green-300' : "text-white text-center w-full py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white"}>
                            Sign-In
                        </NavLink>
                        <NavLink to="/auth/sign-up" className={({ isActive, isPending }) => isActive ? 'bg-fuchsia-500 text-center w-full py-2 rounded-md font-medium text-lg' : isPending ? 'bg-green-300' : "text-white text-center w-full py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white"}>
                            Sign-Up
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
