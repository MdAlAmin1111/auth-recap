import React from 'react';
import techNest from '../../assets/TechNest Gizmo 2.png'
import { NavLink, useLocation, useNavigate } from 'react-router';

const Navbar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <header className="p-4 bg-gray-200 text-gray-800">
            <div className="container flex justify-between h-16 mx-auto">
                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                    <img src={techNest} className="max-w-50 h-8 dark:text-violet-600" alt="" />
                </a>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink to={'/'} className="flex items-center px-4 -mb-1">Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to={'/allProducts'} className="flex items-center px-4 -mb-1 ">All Products</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to={'/about'} className="flex items-center px-4 -mb-1">About</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to={'/blog'} className="flex items-center px-4 -mb-1 ">Blog</NavLink>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex space-x-2">
                    <button onClick={() => navigate('/signin')} className={`self-center px-8 py-3 font-semibold rounded cursor-pointer bg-blue-400 text-gray-50 ${pathname == '/signin' ? 'bg-rose-900' : ''}`}>Sign in</button>
                    <button onClick={() => navigate('/signup')} className={`self-center px-8 py-3 font-semibold rounded bg-blue-400 text-gray-50 cursor-pointer ${pathname == '/signup' ? 'bg-rose-900' : ''}`}>Sign up</button>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Navbar;