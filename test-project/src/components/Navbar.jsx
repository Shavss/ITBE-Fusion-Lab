import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [language, setLanguage] = useState('DE'); // Track the current language

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            const threshold = window.innerHeight; // Change color after the first section
            setIsScrolled(scrollY >= threshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'DE' ? 'EN' : 'DE'));
    };

    return (
        <nav
            style={{
                position: 'fixed',
                top: '0',
                right: '0',
                width: '100%',
                zIndex: 10,
                padding: '0.5rem 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end', // Align items to the right
                gap: '40px', // Add spacing between groups
                transition: 'background-color 0.3s ease',
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
                boxShadow: isScrolled ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
            }}
        >
            {/* Navigation Links */}
            <ul
                style={{
                    display: 'flex',
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                    gap: '20px',
                }}
            >
                <li>
                    <Link
                        to="/"
                        style={{
                            textDecoration: 'none',
                            color: isScrolled ? '#333' : '#fff',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                        }}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        style={{
                            textDecoration: 'none',
                            color: isScrolled ? '#333' : '#fff',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                        }}
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <Link
                        to="/ifc-viewer"
                        style={{
                            textDecoration: 'none',
                            color: isScrolled ? '#333' : '#fff',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                        }}
                    >
                        IFC Viewer
                    </Link>
                </li>
                {/* New Blog Link */}
                <li>
                    <Link
                        to="/blog"
                        style={{
                            textDecoration: 'none',
                            color: isScrolled ? '#333' : '#fff',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                        }}
                    >
                        Blog
                    </Link>
                </li>
            </ul>

            {/* For Sale Button */}
            <button
                style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    backgroundColor: '#fff',
                    color: '#000',
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.2s',
                }}
                onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
                onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
            >
                Login
            </button>

            {/* Language Toggle */}
            <div
                onClick={toggleLanguage}
                style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#fff',
                    color: '#666',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.2s',
                }}
                onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
                onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
            >
                {language}
            </div>
        </nav>
    );

};

export default Navbar;
