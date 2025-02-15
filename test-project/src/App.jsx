// src/App.jsx

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import IFCViewerPage from './pages/IFCViewerPage';
import MapPage from './pages/MapPage'; // Existing MapPage component
import Blog from './pages/Blog'; // New Blog component
import FirstBakery from './pages/FirstBakery'; // New Blog Entry component
import Login from './pages/Login'; // New Blog Entry component
import Dashboard from './pages/dashboard'; // New Blog Entry component
import FormPage from './pages/FormPage'; // New Blog Entry component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Content Padding to Prevent Overlap with Fixed Navbar */}
        <div style={{ paddingTop: '0px' }}>
          <Routes>
            <Route
              path="/"
              element={
                <div className="home-page">
                  <Home />
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div className="contact-page">
                  <Contact />
                </div>
              }
            />
            <Route
              path="/ifc-viewer"
              element={
                <div className="ifc-viewer-page">
                  <IFCViewerPage />
                </div>
              }
            />
            <Route
              path="/map"
              element={
                <div className="map-page">
                  <MapPage />
                </div>
              }
            />
            {/* New Blog Routes */}
            <Route
              path="/blog"
              element={
                <div className="blog-page">
                  <Blog />
                </div>
              }
            />
            <Route
              path="/blog/first-bakery"
              element={
                <div className="first-bakery-page">
                  <FirstBakery />
                </div>
              }
            />
            <Route
              path="/form"
              element={
                <div className="form-page">
                  <FormPage/>
                </div>
              }
            />
            <Route 
              path="/login" 
              element={
                <div className="login-page">
                  <Login />
                </div>
              } 
            />
            <Route 
              path="/dashboard" 
              element={<Dashboard />} 
            />
            {/* Optional: Add a catch-all route for 404 Not Found */}
            <Route
              path="*"
              element={
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <h1>404 - Page Not Found</h1>
                  <p>The page you're looking for does not exist.</p>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
