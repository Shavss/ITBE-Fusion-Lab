//import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import IFCViewerPage from './pages/IFCViewerPage';
import MapPage from './pages/MapPage'; // Import the MapPage component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<div className="home-page"><Home /></div>} />
          <Route path="/contact" element={<div className="contact-page"><Contact /></div>} />
          <Route path="/ifc-viewer" element={<div className="ifc-viewer-page"><IFCViewerPage /></div>} />
          <Route path="/map" element={<div className="map-page"><MapPage /></div>} /> {/* New route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
