import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IFCViewer from '../components/IFCViewer_copy'; // Your IFC viewer
import Navbar from '../components/Navbar';            // Your fixed nav
import FloatingButton from '../components/FloatingButton';
import ThreeFusionEmbed from '../components/ThreeFusionEmbed'; // 3D embed

const IFCViewerPage = () => {
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(true);

  const handleButtonClick = () => {
    navigate('/map'); 
  };

  const handleHideOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div style={{ width: '100vw', overflowX: 'hidden' }}>
      {/* 1) Fixed Navigation Bar at the top */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 10 }}>
        <Navbar />
      </div>

      {/* 3) Three.js 3D Fusion Embed */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <ThreeFusionEmbed />

        {showOverlay && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay
              zIndex: 2,
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(8px)',
                padding: '2rem',
                borderRadius: '8px',
                maxWidth: '400px',
                textAlign: 'center',
                color: '#fff',
              }}
            >
              <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>POSTPAKET AREAL VISION</h2>
              <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Here you can interact with the masterplan.  
                Use your mouse or touch to explore the scene.  
              </p>
              <button
                onClick={handleHideOverlay}
                style={{
                  fontSize: '0.9rem',
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Explore
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 4) Floating Button */}
      <FloatingButton text="Urbanwalks" onClick={handleButtonClick} />
    </div>
  );
};

export default IFCViewerPage;
