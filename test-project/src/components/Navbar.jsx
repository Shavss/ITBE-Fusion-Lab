import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '/img/logo.png'; 

const Navbar = () => {
    const navigate = useNavigate(); // ✅ Initialize useNavigate hook

    const [isScrolled, setIsScrolled] = useState(false);
    const [language, setLanguage] = useState('DE'); // Track the current language
    

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            const threshold = window.innerHeight; // Change visibility after first section
            setIsScrolled(scrollY >= threshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'DE' ? 'EN' : 'DE'));
    };

    const scrollToHowItWorks = () => {
        const section = document.getElementById('how-it-works');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleLoginClick = () => {
        navigate('/login'); // ✅ Navigate programmatically
    };

    return (
        <nav
            style={{
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                zIndex: 10,
                padding: '0.5rem 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: isScrolled ? 'flex-end' : 'space-between',
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0)' : 'transparent',
                transition: 'background-color 0.3s ease',
            }}
        >
            {/* Show Logo and Links Only If Not Scrolled */}
            {!isScrolled && (
                <>
                    {/* LOGO */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                            <img 
                                src={logo} 
                                alt="Logo" 
                                style={{ height: '40px', marginRight: '10px' }}
                            />
                            <span 
                                style={{
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    color: isScrolled ? '#171614' : '#fff',
                                }}
                            >
                                Amazing <br/> House
                            </span>
                        </Link>
                    </div>

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
                        <li><Link to="/" style={{ textDecoration: 'none', color: '#fff', fontSize: '14px' }}>HOME</Link></li>
                        <li>
                            <span
                                onClick={() => {
                                    if (window.location.pathname === '/') {
                                        const section = document.getElementById('contact-us');
                                        if (section) {
                                            section.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    } else {
                                        window.location.href = '/#contact-us';
                                    }
                                }}
                                style={{
                                    textDecoration: 'none',
                                    color: '#fff',
                                    fontSize: '14px',
                                    cursor: 'pointer',
                                }}
                            >
                                CONTACT
                            </span>
                        </li>
                        <li>
                            <span 
                                onClick={scrollToHowItWorks} 
                                style={{ textDecoration: 'none', color: '#fff', fontSize: '14px', cursor: 'pointer' }}
                            >
                                HOW IT WORKS
                            </span>
                        </li>
                        <li><Link to="/ifc-viewer" style={{ textDecoration: 'none', color: '#fff', fontSize: '14px' }}>URBANWALKS</Link></li>
                        <li><Link to="/ifc-viewer" style={{ textDecoration: 'none', color: '#fff', fontSize: '14px' }}>ARCHIWALKS</Link></li>
                        <li><Link to="/blog" style={{ textDecoration: 'none', color: '#fff', fontSize: '14px' }}>BLOG</Link></li>
                    </ul>
                </>
            )}

            {/* Always Show These Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {/* Login Button */}
                <button
                onClick={handleLoginClick} // ✅ Use navigate
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
            </div>
        </nav>
    );
};

export default Navbar;
