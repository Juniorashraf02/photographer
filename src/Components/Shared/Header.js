import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <div>
            <>
                <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-800 ">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between ">
                        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start duration-700 ease-out">
                            <Link
                                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" to='/home'
                            >
                                Wildlife capturer
                            </Link>
                            <button
                                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                type="button"
                                onClick={() => setNavbarOpen(!navbarOpen)}
                            >
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>
                        <div
                            className={
                                "lg:flex flex-grow items-center" +
                                (navbarOpen ? " flex" : " hidden")
                            }
                            id="example-navbar-danger"
                        >
                            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                <li className="nav-item">
                                    <Link to="/home" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/home" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">SERVICES</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/home" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">PROJECTS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/home" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">BLOGS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/home" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">CONTACTS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/home" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">ABOUT ME</Link>
                                </li>
                                <li className="nav-item flex items-center">
                                    <Link to="/home" className="px-3 text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Log In
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>

        </div>
    );
};

export default Header;