import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router
import Home from './pages/Home'; // Import the 3D viewer component
import Navbar from './components/Navbar'; // Import the Navbar component
import Contact from './pages/Contact'; // Import the Contact Us page component
import IFCViewerPage from './pages/IFCViewerPage'; // Import the new IFC Viewer page component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Render the Navbar at the top */}
        <Routes>
          <Route path="/" element={<div className="home-page"><Home /></div>} />
          <Route path="/contact" element={<div className="contact-page"><Contact /></div>} />
          <Route path="/ifc-viewer" element={<div className="ifc-viewer-page"><IFCViewerPage /></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
