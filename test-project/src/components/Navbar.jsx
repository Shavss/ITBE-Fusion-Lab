import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '/img/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState('DE');
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const threshold = window.innerHeight;
      setIsScrolled(scrollY >= threshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'DE' ? 'EN' : 'DE'));
  };

  const scrollToHowItWorks = () => {
    const section = document.getElementById('how-it-works');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  // Determine link style based on current route and hover state.
  const getLinkStyle = (linkName) => {
    const defaultColor = isHomePage ? '#fff' : '#000';
    const dimColor = '#aaa'; // Dimmed color for non-hovered links
    return {
      textDecoration: 'none',
      color: hoveredLink && hoveredLink !== linkName ? dimColor : defaultColor,
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
    };
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
        justifyContent: 'space-between',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0)' : 'transparent',
        transition: 'background-color 0.3s ease',
      }}
    >
      {/* Logo on the left */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link
          to="/"
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ height: '40px', marginRight: '10px' }}
          />
          {/* Show text only when not scrolled */}
          {!isScrolled && (
            <span
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: isHomePage ? '#fff' : '#000',
              }}
            >
              Paketpost <br /> Vision
            </span>
          )}
        </Link>
      </div>

      {/* Right side: Navigation Links and Always Shown Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        {/* Navigation Links – only show when not scrolled */}
        {!isScrolled && (
          <ul
            style={{
              display: 'flex',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              gap: '40px',
            }}
          >
            <li>
              <Link
                to="/"
                onMouseEnter={() => setHoveredLink('HOME')}
                onMouseLeave={() => setHoveredLink(null)}
                style={getLinkStyle('HOME')}
              >
                HOME
              </Link>
            </li>
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
                onMouseEnter={() => setHoveredLink('CONTACT')}
                onMouseLeave={() => setHoveredLink(null)}
                style={getLinkStyle('CONTACT')}
              >
                CONTACT
              </span>
            </li>
            <li>
              <span
                onClick={scrollToHowItWorks}
                onMouseEnter={() => setHoveredLink('HOW IT WORKS')}
                onMouseLeave={() => setHoveredLink(null)}
                style={getLinkStyle('HOW IT WORKS')}
              >
                HOW IT WORKS
              </span>
            </li>
            <li>
              <Link
                to="/map"
                onMouseEnter={() => setHoveredLink('URBANWALKS')}
                onMouseLeave={() => setHoveredLink(null)}
                style={getLinkStyle('URBANWALKS')}
              >
                URBANWALKS
              </Link>
            </li>
            <li>
              <Link
                to="/ifc-viewer"
                onMouseEnter={() => setHoveredLink('ARCHIWALKS')}
                onMouseLeave={() => setHoveredLink(null)}
                style={getLinkStyle('ARCHIWALKS')}
              >
                ARCHIWALKS
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                onMouseEnter={() => setHoveredLink('BLOG')}
                onMouseLeave={() => setHoveredLink(null)}
                style={getLinkStyle('BLOG')}
              >
                BLOG
              </Link>
            </li>
          </ul>
        )}

        {/* Always Shown Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={handleLoginClick}
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
      </div>
    </nav>
  );
};

export default Navbar;
