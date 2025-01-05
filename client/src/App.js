// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router
import Viewer from './components/Viewer'; // Import the 3D viewer component
import Navbar from './components/Navbar'; // Import the Navbar component
import Contact from './pages/Contact'; // Import the Contact Us page component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Render the Navbar at the top */}
        <Routes>
          <Route path="/" element={<Viewer />} /> {/* Home route - shows the 3D viewer */}
          <Route path="/contact" element={<Contact />} /> {/* Contact Us route - shows the contact page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
