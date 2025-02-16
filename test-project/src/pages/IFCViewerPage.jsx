import React from 'react';
import { useNavigate } from 'react-router-dom';
import IFCViewer from '../components/IFCViewer_copy'; // Your IFC viewer
import Navbar from '../components/Navbar';       // Your fixed nav
import FloatingButton from '../components/FloatingButton';
import ThreeFusionEmbed from '../components/ThreeFusionEmbed'; // Import the 3D embed

const IFCViewerPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/map'); 
  };

  return (
    <div style={{ width: '100vw', overflowX: 'hidden' }}>
      {/* 1) Fixed Navigation Bar at the top */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 10 }}>
        <Navbar />
      </div>

      {/* 2) Full-height IFC Viewer Section, offset below Nav */}
      <div
        style={{
          marginTop: '60px', // Adjust if your navbar is taller
          position: 'relative',
          width: '100%',
          height: '100vh',
          zIndex: 1,
        }}
      >
        {/* IFC Viewer */}
        <IFCViewer ifcFilePath="/dummy.ifc" />
      </div>

      {/* 2.5) Three.js 3D Fusion Embed */}
      <div
        style={{
          width: '100%',
          height: '100vh',
          position: 'relative',
        }}
      >
        <ThreeFusionEmbed />
      </div>

      {/* 3) Scrollable Section 1 */}
      <div
        style={{
          width: '100%',
          height: '100vh',
          background: '#f9f9f9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <div style={{ maxWidth: '800px', textAlign: 'center', color: '#333' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Section 1</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed euismod, tortor non aliquet blandit, ligula nulla malesuada lectus,
            vitae scelerisque massa risus id justo.
          </p>
        </div>
      </div>

      {/* 4) Scrollable Section 2 */}
      <div
        style={{
          width: '100%',
          height: '100vh',
          background: '#e0e0e0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <div style={{ maxWidth: '800px', textAlign: 'center', color: '#333' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Section 2</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
            Phasellus in lacus nec elit pulvinar sodales sit amet nec nunc. 
            Integer dapibus erat et nulla mollis, at tincidunt risus malesuada.
          </p>
        </div>
      </div>

      {/* 5) Floating Button */}
      <FloatingButton text="Archiwalks" onClick={handleButtonClick} />
    </div>
  );
};

export default IFCViewerPage;
