import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Viewer from '../components/Viewer';
import Navbar from '../components/Navbar';
import FloatingButton from '../components/FloatingButton';
import RoundButton from '../components/RoundButton';
import TypingCard from '../components/TypingCard';
import blogPosts from '../data/blogPosts'; // Import blog data
import Expand from '../components/Expand'; //Import Expand Component
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
                            padding: '2erm'
                        }}
                    >
                        <div style={{ position: 'absolute', bottom: '2rem', left: '3rem' }}>
                            <h1 style={{ fontSize: '8rem', marginBottom: '2rem', lineHeight: '7rem' }}>
                                PAKETPOST <br /> AREAL VISION
                            </h1>
                        </div>
                        <div>
                            {/* Other Components */}
                            {/* Typing Card with Custom Message */}
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
                            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '-4rem' }}> 
                                <Expand
                                    title="STRUCTURE"
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

                        {/* Big Text: HOW IT WORKS (Positioned in the Right Corner) */}
                        <h2 
                            style={{
                                position: 'absolute',
                                bottom: '2rem', // Distance from the bottom
                                right: '3rem', // Distance from the right
                                fontSize: '8rem', // Large text size
                                fontWeight: 'bold',
                                color: '#0f01ea', // Adjust color if needed
                                opacity: 1, // Slight transparency for a modern feel
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


{/* Section 2 - User Groups */}
<div
    style={{
        width: '100%',
        minHeight: '100vh',
        background: 'rgba(248, 248, 248, 0.8)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
        textAlign: 'center',
    }}
>
    {/* Big Header */}
    <h2
        style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            maxWidth: '1500px',
            lineHeight: '1.4',
            color: '#000',
            marginBottom: '2rem',
            marginTop: '-19rem',
            textAlign: 'left',
        }}
    >
Let's determine if we are the right place for your next chapter, whether you are looking for a perfect place for your business or living.    </h2>

    {/* User Groups Grid */}
    <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1200px',
            width: '100%',
        }}
    >
        {[
            {
                title: 'For Property Managers',
                description:
                    'It enhances operational efficiency with features like self-guided virtual tours, remote purchasing, and advanced tools for tenant communication, rent collection, and property maintenance.',
            },
            {
                title: 'For Business Owners',
                description:
                    'The website serves as a collaborative hub, offering tools for stakeholder engagement, advertising, and smart dashboards to guide investment decisions and highlight opportunities within the masterplan.',
            },
            {
                title: 'For Renters',
                description:
                    'The platform acts as a central hub for neighborhood information, events, and news, while simplifying rental processes like payments, deposits, and maintenance requests.',
            },
        ].map((card, index) => (
            <div
                key={index}
                style={{
                    background: '#ffffff',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                }}
            >
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#0f01ea' }}>
                    {card.title}
                </h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333' }}>
                    {card.description}
                </p>
            </div>
        ))}
    </div>
</div>


{/* NEW SECTION 3 - Latest News (Moved to the correct place) */}
<div
    style={{
        width: '100%',
        minHeight: '100vh',
        background: 'rgba(240, 240, 240, 0.9)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem',
    }}
>
    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#333', textAlign: 'center' }}>
        Latest News
    </h2>

    <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            width: '100%',
        }}
    >
        {blogPosts.map((post) => (
            <div
                key={post.id}
                style={{
                    background: '#ffffff',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    textAlign: 'left',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {/* Blog Image */}
                <img 
                    src={post.image} 
                    alt={post.title} 
                    style={{ 
                        width: '100%', 
                        height: '200px', 
                        objectFit: 'cover', 
                        borderRadius: '8px',
                        marginBottom: '1rem' 
                    }} 
                />

                {/* Blog Title */}
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: '#0f01ea' }}>
                    {post.title}
                </h3>

                {/* Blog Date */}
                <p style={{ fontSize: '0.9rem', color: '#777', marginBottom: '1rem' }}>
                    {post.date}
                </p>

                {/* Blog Summary */}
                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333', flexGrow: 1 }}>
                    {post.summary}
                </p>

                {/* Read More Button */}
                <a 
                    href={`/blog/${post.id}`} 
                    style={{
                        marginTop: '1rem',
                        padding: '0.8rem 1.5rem',
                        backgroundColor: '#0f01ea',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        display: 'inline-block',
                        textAlign: 'center',
                        fontSize: '1rem',
                    }}
                >
                    Read More
                </a>
            </div>
                            ))}
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
