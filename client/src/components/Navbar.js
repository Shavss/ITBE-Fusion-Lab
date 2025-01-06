import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router for navigation

const Navbar = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ marginRight: '20px' }}>
          <Link to="/">Home</Link> {/* Link to the home page (Viewer) */}
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/contact">Contact</Link> {/* Link to the contact page */}
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/ifc-viewer">IFC 3D Viewer</Link> {/* Link to the IFC 3D Viewer page */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
