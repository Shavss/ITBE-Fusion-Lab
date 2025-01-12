import React from 'react';
import Viewer from '../components/Viewer'; // Adjust the path if needed
import Navbar from '../components/Navbar'; // Import your navigation bar
import FloatingButton from '../components/FloatingButton'; // Import the floating button

const Home = () => {
    const handleButtonClick = () => {
        alert('Archiwalks button clicked!'); // Replace this with your desired functionality
    };

    return (
        <div style={{ width: '100vw', overflowX: 'hidden' }}>
            {/* Fixed Navigation Bar */}
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 10 }}>
                <Navbar />
            </div>

            {/* Full-screen Viewer Section */}
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100vh', // Full viewport height
                    zIndex: 1,
                }}
            >
                {/* Render the Viewer only here */}
                <Viewer />
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        textAlign: 'center',
                        background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for text
                        padding: '1rem 2rem',
                        borderRadius: '8px',
                        zIndex: 2, // Ensure it appears above the Viewer
                    }}
                >
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>PaketPost-Areal Vision</h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
                        Conscious living for sustainable future
                    </p>
                </div>
            </div>

            {/* Scrollable Section 1 */}
            <div
                style={{
                    width: '100%',
                    height: '100vh', // Full viewport height
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor non aliquet blandit,
                        ligula nulla malesuada lectus, vitae scelerisque massa risus id justo.
                    </p>
                </div>
            </div>

            {/* Scrollable Section 2 */}
            <div
                style={{
                    width: '100%',
                    height: '100vh', // Full viewport height
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
                        Phasellus in lacus nec elit pulvinar sodales sit amet nec nunc. Integer dapibus erat et nulla
                        mollis, at tincidunt risus malesuada.
                    </p>
                </div>
            </div>

            {/* Floating Button */}
            <FloatingButton text="Archiwalks" onClick={handleButtonClick} />
        </div>
    );
};

export default Home;
