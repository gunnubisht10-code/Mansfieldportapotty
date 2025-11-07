
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Service Areas', path: '/service-areas' },
        { name: 'Local Attractions', path: '/local-attractions' },
        { name: 'Contact', path: '/contact' },
    ];

    const linkClass = "text-gray-700 hover:text-primary transition duration-300 font-medium px-3 py-2 rounded-md";
    const activeLinkClass = "text-primary bg-blue-100";

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center space-x-2">
                             <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6" />
                            </svg>
                            <span className="text-xl font-bold text-dark font-heading">{BUSINESS_INFO.name}</span>
                        </Link>
                    </div>
                    <nav className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <NavLink key={link.name} to={link.path} className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`}>
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </nav>
                     <div className="hidden md:flex items-center">
                        <a href={BUSINESS_INFO.phoneHref} className="flex items-center space-x-2 bg-secondary text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300">
                           <Phone size={18} />
                           <span>{BUSINESS_INFO.phone}</span>
                        </a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                             <NavLink key={link.name} to={link.path} onClick={() => setIsOpen(false)} className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${linkClass} ${isActive ? activeLinkClass : ''}`}>
                                {link.name}
                            </NavLink>
                        ))}
                         <a href={BUSINESS_INFO.phoneHref} className="flex items-center space-x-2 bg-secondary text-white px-3 py-2 mt-2 rounded-md hover:bg-green-700 transition duration-300 w-full justify-center">
                           <Phone size={18} />
                           <span>Call Now</span>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
