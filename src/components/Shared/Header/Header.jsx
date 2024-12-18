import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/HL-full-Logo.png';
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search Query:", searchQuery);
        // Add your search functionality here
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

                        {/* Search Bar */}
                        <form onSubmit={handleSearch} className="hidden sm:flex sm:items-center">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="px-3 py-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                            />
                            <button type="submit" className="ml-2 px-3 py-2 bg-sky-900 text-white rounded-md hover:bg-sky-950">
                                Search
                            </button>
                        </form>

                        {/* Navbar Links for Desktop */}
                        <div className="hidden sm:flex sm:items-center sm:space-x-4">
                            <NavLink to="/product" className={({ isActive }) => isActive ? 'bg-pink-700 px-3 py-2 rounded-md font-medium text-lg' : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-pink-500 hover:text-white"}>
                                Product
                            </NavLink>
                            <NavLink to="/about" className={({ isActive }) => isActive ? 'bg-pink-700 px-3 py-2 rounded-md font-medium text-lg' : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-pink-500 hover:text-white"}>
                                About
                            </NavLink>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? 'bg-pink-700 px-3 py-2 rounded-md font-medium text-lg' : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-pink-500 hover:text-white"}>
                                Contact
                            </NavLink>
                            <NavLink to="/auth/sign-in" className={({ isActive }) => isActive ? 'bg-pink-700 px-3 py-2 rounded-md font-medium text-lg' : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-pink-500 hover:text-white"}>
                                Sign-In
                            </NavLink>
                            <NavLink to="/auth/sign-up" className={({ isActive }) => isActive ? 'bg-pink-700 px-3 py-2 rounded-md font-medium text-lg' : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-pink-500 hover:text-white"}>
                                Sign-Up
                            </NavLink>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="sm:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none relative flex items-center justify-center h-10 w-10">
                            {
                                menuOpen ? (
                                    <RxCross2 className="h-8 w-8" />
                                ) : (
                                    <FiMenu className="h-8 w-8" />
                                )
                            }
                        </button>
                    </div>
                </div>

                {/* Mobile Menu - Hidden by default */}
                <div className={`sm:hidden overflow-hidden transition-all duration-1000 ease-in-out ${menuOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                    <div className="flex flex-col space-y-4 items-center p-4 bg-gray-500">
                        <NavLink to="/product" className={({ isActive }) => isActive ? 'bg-pink-700 text-center w-full py-2 rounded-md font-medium text-lg' : "text-white text-center w-full py-2 rounded-md text-lg font-medium hover:bg-pink-500 hover:text-white"}>
                            Product
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'bg-fuchsia-500 text-center w-full py-2 rounded-md font-medium text-lg' : "text-white text-center w-full py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white"}>
                            About
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'bg-fuchsia-500 text-center w-full py-2 rounded-md font-medium text-lg' : "text-white text-center w-full py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white"}>
                            Contact
                        </NavLink>
                        <NavLink to="/auth/sign-in" className={({ isActive }) => isActive ? 'bg-fuchsia-500 text-center w-full py-2 rounded-md font-medium text-lg' : "text-white text-center w-full py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white"}>
                            Sign-In
                        </NavLink>
                        <NavLink to="/auth/sign-up" className={({ isActive }) => isActive ? 'bg-fuchsia-500 text-center w-full py-2 rounded-md font-medium text-lg' : "text-white text-center w-full py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white"}>
                            Sign-Up
                        </NavLink>

                        {/* Mobile Search Bar */}
                        <form onSubmit={handleSearch} className="w-full mt-4">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-3 py-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                            />
                            <button type="submit" className="w-full mt-2 px-3 py-2 bg-sky-900 text-white rounded-md hover:bg-sky-950">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
