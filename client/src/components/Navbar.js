import React from 'react';
import { Link } from 'react-router-dom'; // For navigation

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
