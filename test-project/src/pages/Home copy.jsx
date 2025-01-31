import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Viewer from '../components/Viewer';
import Navbar from '../components/Navbar';
import FloatingButton from '../components/FloatingButton';
import RoundButton from '../components/RoundButton';
import TypingCard from '../components/TypingCard';
import blogPosts from '../data/blogPosts'; // Import blog data
import Expand from '../components/Expand'; // ✅ Import Expand Component
import IFCViewer_simple from '../components/IFCViewer_simple';

const Home = () => {
    const navigate = useNavigate();
    const [showOverlays, setShowOverlays] = useState(true);

    const toggleOverlays = () => {
        setShowOverlays((prev) => !prev);
    };

    const handleArchiwalksClick = () => {
        navigate('/map');
    };

    return (
        <div style={{ width: '100vw', overflowX: 'hidden' }}>
            {/* Fixed Navigation Bar */}
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 10 }}>
                <Navbar />
            </div>

            {/* Background Viewer */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    zIndex: 0,
                    pointerEvents: showOverlays ? 'none' : 'auto',
                }}
            >
                <Viewer />
            </div>

            {/* Overlays */}
            {showOverlays && (
                <div style={{ position: 'relative', zIndex: 1 }}>
                    {/* Hero Section */}
                    <div
                        style={{
                            position: 'relative',
                            width: '100%',
                            height: '100vh',
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-start',
                            color: 'black',
                            background: 'rgba(248, 248, 248, 0.7)',
                            textAlign: 'left',
                            padding: '2rem'
                        }}
                    >
                        <div style={{ position: 'absolute', bottom: '2rem', left: '3rem' }}>
                            <h1 style={{ fontSize: '8rem', marginBottom: '2rem', lineHeight: '7rem' }}>
                                PAKETPOST <br /> AREAL VISION
                            </h1>
                        </div>
                        <div>
                            {/* Other Components */}
                            <TypingCard 
                                message={`
                                    Welcome to PaketPost Areal Vision!<br>
                                    Explore the future of urban living in <b>Munich</b> with us.<br>
                                    Let's determine if we are the right place for your next chapter, whether you are looking for a perfect place for your <b>business</b> or <b>living</b>.
                                `}
                                style={{ position: 'absolute', top: '10rem', right: '10rem' }} 
                            />
                        </div>
                    </div>

                    {/* Section 1 */}
                    <div
                        style={{
                            width: '100%',
                            height: '100vh',
                            background: 'rgba(248, 248, 248, 0.8)',
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            padding: '4rem',
                            position: 'relative',
                        }}
                    >
                        <div style={{ maxWidth: '1000px', textAlign: 'left', color: '#333' }}>
                            {/* ✅ Normal Paragraph Before Expandable Sections */}
                            <p style={{ fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '-1rem', marginTop: '-3rem',  maxWidth: "800px", }}>
                                The future of urban development is shaped by a commitment to sustainability, 
                                smart technology, and a deep integration of nature into our built environment. 
                                We are dedicated to creating spaces that promote innovation, efficiency, and well-being. 
                                Below, you’ll find key aspects of our vision that define the **next generation of city living**.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '-4rem'}}> 
                                <Expand
                                    title="GREEN MASTERPLAN"
                                    content="Our vision for a sustainable future includes innovative energy solutions, smart mobility, and eco-friendly infrastructure. The Green Masterplan integrates nature with urban living to create a healthier, greener, and more livable environment."
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '-4rem' }}> 
                                <Expand
                                    title="SMART INFRASTRUCTURE"
                                    content="Our masterplan and buildings will be equipped with IoT sensors, enabling real-time data collection for deep analysis and smarter decision-making. These sensors will optimize energy usage, mobility patterns, environmental monitoring, and overall urban efficiency."
                                />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", marginBottom: "-4rem" }}>
                                <Expand
                                    title="EXPLORE"
                                    content={<IFCViewer_simple />}
                                />
                            </div>
                        </div>

                        {/* Big Text: HOW IT WORKS */}
                        <h2 
                            style={{
                                position: 'absolute',
                                bottom: '2rem',
                                right: '3rem',
                                fontSize: '8rem',
                                fontWeight: 'bold',
                                color: '#0f01ea',
                                opacity: 1,
                                textAlign: 'right',
                            }}
                        >
                            HOW IT WORKS
                        </h2>

                        {/* Image on the Right */}
                        <div style={{ 
                            maxWidth: '50%', 
                            display: 'flex', 
                            justifyContent: 'flex-end',
                            paddingLeft: '10rem',
                            marginTop: '-0.5rem'
                        }}>
                            <img 
                                src="/img/placeholder.png" 
                                alt="placeholder" 
                                style={{ 
                                    width: '100%', 
                                    maxWidth: '700px', 
                                    borderRadius: '8px',
                                    marginRight: 'auto'
                                }} 
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Button */}
            <FloatingButton text="Archiwalks" onClick={handleArchiwalksClick} />

            {/* Round Button */}
            <RoundButton onClick={toggleOverlays} />
        </div>
    );
};

export default Home;
