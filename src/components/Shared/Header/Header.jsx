import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/HL-full-Logo.png';

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
                            <button type="submit" className="ml-2 px-3 py-2 bg-amber-900 text-white rounded-md hover:bg-amber-950">
                                Search
                            </button>
                        </form>

                        {/* Navbar Links for Desktop */}
                        <div className="hidden sm:flex sm:items-center sm:space-x-4">
                            <NavLink to="/" className={({ isActive }) => isActive ? 'bg-fuchsia-500 px-3 py-2 rounded-md font-medium text-lg' : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white"}>
                                Home
                            </NavLink>
                            <NavLink to="/about" className={({ isActive }) => isActive ? 'bg-fuchsia-500 px-3 py-2 rounded-md font-medium text-lg' : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white"}>
                                About
                            </NavLink>
                            <NavLink to="/product" className={({ isActive }) => isActive ? 'bg-fuchsia-500 px-3 py-2 rounded-md font-medium text-lg' : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white"}>
                                Product
                            </NavLink>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? 'bg-fuchsia-500 px-3 py-2 rounded-md font-medium text-lg' : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white"}>
                                Contact
                            </NavLink>
                            <NavLink to="/auth/sign-in" className={({ isActive }) => isActive ? 'bg-fuchsia-500 px-3 py-2 rounded-md font-medium text-lg' : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white"}>
                                Sign-In
                            </NavLink>
                            <NavLink to="/auth/sign-up" className={({ isActive }) => isActive ? 'bg-fuchsia-500 px-3 py-2 rounded-md font-medium text-lg' : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white"}>
                                Sign-Up
                            </NavLink>
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
                        <NavLink to="/" className={({ isActive }) => isActive ? 'bg-fuchsia-500 text-center w-full py-2 rounded-md font-medium text-lg' : "text-white text-center w-full py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white"}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'bg-fuchsia-500 text-center w-full py-2 rounded-md font-medium text-lg' : "text-white text-center w-full py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white"}>
                            About
                        </NavLink>
                        <NavLink to="/product" className={({ isActive }) => isActive ? 'bg-fuchsia-500 text-center w-full py-2 rounded-md font-medium text-lg' : "text-white text-center w-full py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white"}>
                            Product
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
                            <button type="submit" className="w-full mt-2 px-3 py-2 bg-fuchsia-500 text-white rounded-md hover:bg-fuchsia-600">
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
