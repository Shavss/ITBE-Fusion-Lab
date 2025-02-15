import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Viewer from '../components/Viewer';
import Navbar from '../components/Navbar';
import FloatingButton from '../components/FloatingButton';
import RoundButton from '../components/RoundButton';
import blogPosts from '../data/blogPosts'; // Import blog data
import Expand from '../components/Expand'; //Import Expand Component
import ScrollingText from '../components/infinitetext'; // Adjust the path based on your file structure

const Home = () => {
    const navigate = useNavigate();
    const [showOverlays, setShowOverlays] = useState(true);

    const toggleOverlays = () => {
        setShowOverlays((prev) => !prev);
    };

    const handleArchiwalksClick = () => {
        navigate('/map');
    };

    const handleExploreClick = () => {
        navigate('/ifc-viewer'); // This will navigate to the /IFCviewer route
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
                            background: 'rgba(242, 240, 237, 0.5)',
                            textAlign: 'left',
                            padding: '2erm'
                        }}
                    >
                        <div style={{ position: 'absolute', bottom: '2rem', left: '3rem' }}>
                            <h1 style={{ fontSize: '6.5rem', marginBottom: '-1rem', lineHeight: '7rem' }}>
                                PAKETPOST <br /> AREAL VISION
                            </h1>
                        </div>
                        <div>
                            {/* Other Components */}

                        </div>

                    </div>
                    {/* Section 1 */}
                    <div
                        style={{
                            width: '100%',
                            height: '200vh',
                            background: 'rgba(242, 240, 237, 0.9)',
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            padding: '4rem',
                            position: 'relative',
                        }}
                    >
                    <div style={{ maxWidth: '1000px', textAlign: 'left', color: '#000000', position: 'relative' }}>
                        {/* ✅ Normal Paragraph */}
                        <p style={{ fontSize: '15px', lineHeight: '23px', marginBottom: '5rem', marginTop: '-1rem', maxWidth: '600px' }}>
                            The future of urban development is shaped by a commitment to sustainability, 
                            smart technology, and a deep integration of nature into our built environment. 
                            We are dedicated to creating spaces that promote innovation, efficiency, and well-being. 
                            Below, you’ll find key aspects of our vision that define the <b>next generation of city living</b>. 
                            The future of urban development is shaped by a commitment to sustainability, 
                            smart technology, and a deep integration of nature into our built environment. 
                            We are dedicated to creating spaces that promote innovation, efficiency, and well-being. 
                            Below, you’ll find key aspects of our vision that define the <b>next generation of city living</b>.
                        </p>

                        {/* Right-Aligned Button  */}
                        <button
                            style={{
                                position: 'absolute',
                                top: '10px', // Adjust to align vertically
                                right: '-24.5rem', // Align to the right
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '0.8rem 1.5rem',
                                fontSize: '0.9rem', // Adjust font size for single-line text
                                fontWeight: 'bold',
                                border: '1px solid black',
                                borderRadius: '50px',
                                backgroundColor: 'transparent',
                                color: 'black',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease-in-out',
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'black';
                                e.target.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.color = 'black';
                            }}
                            onClick={handleExploreClick} // Call the navigation function on click
                        >
                            EXPLORE THE DEVELOPMENT <span style={{ marginLeft: '0.5rem' }}>&#8594;</span>
                        </button>

                        {/* Expandable Sections */}
                        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '-4rem' }}>
                            <Expand
                                title="GREEN MASTERPLAN"
                                content="Our vision for a sustainable future includes innovative energy solutions, smart mobility, and eco-friendly infrastructure. The Green Masterplan integrates nature with urban living to create a healthier, greener, and more livable environment."
                                image="/img/placeholder.png"
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '-4rem' }}>
                            <Expand
                                title="SMART INFRASTRUCTURE"
                                content="Our masterplan and buildings will be equipped with IoT sensors, enabling real-time data collection for deep analysis and smarter decision-making. These sensors will optimize energy usage, mobility patterns, environmental monitoring, and overall urban efficiency."
                                image="/img/placeholder.png"
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '-4rem' }}>
                            <Expand
                                title="STRUCTURE"
                                content="Our masterplan and buildings will be equipped with IoT sensors, enabling real-time data collection for deep analysis and smarter decision-making. These sensors will optimize energy usage, mobility patterns, environmental monitoring, and overall urban efficiency."
                                image="/img/placeholder.png"
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '-4rem' }}>
                            <Expand title="EXPLORE" content="EXPLORE" />
                        </div>
                    </div>


                        {/* Big Text: HOW IT WORKS (Positioned in the Right Corner) */}
                        <h2 
                            style={{
                                position: 'absolute',
                                bottom: '2rem', // Distance from the bottom
                                right: '3rem', // Distance from the right
                                fontSize: '6rem', // Large text size
                                fontWeight: 'bold',
                                color: '#000000', // Adjust color if needed
                                opacity: 1, // Slight transparency for a modern feel
                                textAlign: 'right',
                            }}
                        >
                            HOW IT WORKS
                        </h2>
                    </div>


{/* Section 2 - User Groups */}
<div id = "how-it-works"
    style={{
        width: '100%',
        height: '100vh',
        background: 'rgba(242, 240, 237, 0.9)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem', // Increased top padding for spacing
        textAlign: 'left',
    }}
>
    {/* Big Header */}
    <h2
        style={{
            fontSize: '48px',
            fontWeight: 'bold',
            maxWidth: '800px',
            lineHeight: '58px',
            color: 'rgb(23, 22, 20)',
            marginBottom: '0rem', // Increased margin bottom for spacing
            textAlign: 'left',
            marginLeft: '-36rem', // Increased margin bottom for spacing
        }}
    >
        Let's determine if we are the right place for your next chapter.
    </h2>
    

    <div
        style={{
            fontSize: '15px',
            lineHeight: '23px',
            color: '#333',
            maxWidth: '500px',
            textAlign: 'left',
            marginLeft: '-54rem',
            marginBottom: '-1rem',
            
        }}
    >
        Wheter you are looking for a place perfect place for your business or living, we offer comprehensive solutions for various user groups. Choose your path and explore the benefits tailored for your needs.
    </div>
{/* User Groups Grid */}
<div
    style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        flexWrap: 'wrap',
        padding: '4rem 2rem',
    }}
>
    {[
        {
            title: 'FOR PROPERTY MANAGERS',
            description:
                'It Boost operational efficiency with self-guided touring and smart home automation solutions, advanced tools for tenant communication, rent collection, and property maintenance.',
            image: '/img/for_property.png', 
        },
        {
            title: 'FOR BUSINESS OWNERS',
            description:
                'The website serves as a collaborative hub, offering tools for stakeholder engagement, advertising, and smart dashboards to guide investment decisions and highlight opportunities within the masterplan.',
            image: '/img/business.png', 
        },
        {
            title: 'FOR RENTERS',
            description:
                'The platform acts as a central hub for neighborhood information, events, and news, while simplifying rental processes like payments, deposits, and maintenance requests. Search for available rentals and schedule your secure self-guided tour now.',
            image: '/img/for_renters.png',
        },
    ].map((card, index) => (
        <div
            key={index}
            style={{
                background: 'rgb(242, 240, 237)',
                padding: '2rem',
                borderRadius: '16px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                maxWidth: '350px',
                width: '100%',
                minHeight: '400px', // Ensuring all cards have the same height
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: '1px solid #ddd',
                
            }}
        >
            {/* Title */}
            <h3 style={{ fontSize: '1.0rem', fontWeight: 'bold', color: '#000', textAlign: 'left', width: '100%' }}>
                {card.title}
            </h3>

            {/* Image/Diagram Section */}
            <div
                style={{
                    width: '60%',
                    height: '200px', // Fixed height for diagrams
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    backgroundColor: card.image ? 'transparent' : '#e0e0e0', // If image exists, remove background
                }}
            >
                {card.image ? (
                    <img
                        src={card.image}
                        alt={card.title}
                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    />
                ) : (
                    <span style={{ fontSize: '1rem', color: '#555' }}>Diagram Placeholder</span>
                )}
            </div>

            {/* Description */}
            <p style={{ fontSize: '13px', lineHeight: '20px', color: '#333', textAlign: 'left' }}>
                {card.description}
            </p>

            {/* Button */}
            <button
                onClick={() => navigate('/form')}
                style={{
                    padding: '0.8rem 1.5rem',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: '#fff',
                    backgroundColor: '#000',
                    border: '1px solid #000',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#fff';
                    e.target.style.color = '#000';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#000';
                    e.target.style.color = '#fff';
                }}
            >
                Start →
            </button>
        </div>
    ))}
</div>

</div>


<div
            style={{
                width: '100%',
                minHeight: '100vh',
                background: 'rgba(242, 240, 237, 0.9)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4rem'
            }}
        >
            <h2
                style={{
                    fontSize: '48px',
                    fontWeight: 'bold',
                    color: 'rgb(23, 22, 20)',
                    textAlign: 'center',
                    marginBottom: '10rem',
                }}
            >
                LATEST NEWS
            </h2>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1300px',
                    minHeight: '400px',
                    width: '100%',
                }}
                >
                {blogPosts.map((post) => (
                    <div
                    key={post.id}
                    onClick={() => navigate(`/blog/${post.id}`)}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    style={{
                        background: 'rgba(242, 240, 237, 1)',
                        padding: '1rem',
                        borderRadius: '16px',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        border: '1px solid #ddd',
                        transition: 'transform 0.3s ease',
                        cursor: 'pointer',
                    }}
                    >
                    <img
                        src={post.image}
                        alt={post.title}
                        style={{
                        width: '100%',
                        height: '180px',
                        objectFit: 'cover',
                        borderRadius: '0px',
                        marginBottom: '1rem',
                        }}
                    />
                    <h3
                        style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#000',
                        textAlign: 'left',
                        width: '100%',
                        }}
                    >
                        {post.title}
                    </h3>
                    <p style={{ fontSize: '10px', color: '#777' }}>{post.date}</p>
                    <p style={{ fontSize: '13px', lineHeight: '20px', color: '#333' }}>
                        {post.summary}
                    </p>
                    </div>
                ))}
                </div>

        </div>

{/* Footer Section */}
<div id = "contact-us"
    style={{
        width: '100%',
        backgroundColor: 'rgb(23, 22, 20, 0.9)', // Footer background color
        color: 'rgb(242, 240, 237)', // Footer font color
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem 2em',
    }}
>
    {/* Large Title - Replaced with ScrollingText */}
    <div style={{ width: '100%', marginBottom: '2rem' }}>
        <ScrollingText />
    </div>

    {/* Contact Section */}
    <div
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            height: '400px',
            maxWidth: '1200px',
            padding: '4rem',
            border: '1px solid rgba(242, 240, 237)', // Subtle border for contact
            borderRadius: '32px',
        }}
    >
        {/* Left Column */}
        <div
        style={{
            flex: 1,
            marginRight: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', // Space between the icon and text
        }}
    >
        {/* Icon at the top-left */}
        <img
            src="/img/logo.png" // Placeholder for your icon
            alt="Contact Icon"
            style={{ height: '40%', width: '20%', marginBottom: '1rem' }}
        />
        {/* Text at the bottom */}
        <p
            style={{
                fontSize: '13px',
                lineHeight: '20px',
                maxWidth: '300px', // Restrict the width to 200px
                wordWrap: 'break-word', // Ensure long words are wrapped
                overflowWrap: 'break-word', // Ensure long content is wrapped
                marginBottom: 0,
            }}
        >
            The future of urban development is shaped by a commitment to sustainability, smart technology, and a deep integration of nature into our built environment.
        </p>
    </div>
        {/* Right Column */}
        <div style={{ flex: 1, textAlign: 'left' }}>
            <h2 style={{ fontSize: '64px', color: 'rgb(242, 240, 237)' , fontWeight: 'bold', marginBottom: '2rem' }}>CONTACT</h2>
            <p style={{ fontSize: '15px', color: 'rgb(242, 240, 237)' , lineHeight: '23px', margin: 0 }}>+49 157 33352473&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Georg-Lindau-Strasse 12,</p>
            <p style={{ fontSize: '15px',color: 'rgb(242, 240, 237)'  , lineHeight: '23px', margin: 0 }}>info@paketpostaeral.de&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;80634 Munich</p>
            <button
                style={{
                    marginTop: '1rem',
                    padding: '0.8rem 1.5rem',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: 'rgb(23, 22, 20)', // Matches background for hover effect
                    backgroundColor: 'rgb(242, 240, 237)', // Button background
                    border: 'none',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgb(23, 22, 20)';
                    e.target.style.color = 'rgb(242, 240, 237)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgb(242, 240, 237)';
                    e.target.style.color = 'rgb(23, 22, 20)';
                }}
                onClick={() => navigate('/contact')} // Navigate to Contact Page
            >
                FORM →
            </button>
        </div>
    </div>
    

    {/* Footer Links */}
    <div
        style={{
            width: '100%',
            maxWidth: '1200px',
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '1rem',
        }}
    >
        <p style={{fontSize: '13px', lineHeight: '20px',  margin: 0 }}>© Paket Post Aeral Vision 2025</p>

        <p style={{ fontSize: '13px', lineHeight: '20px', margin: 0 }}>Project author: Group 1</p>
    </div>
</div>

                </div>
            )}

 

            {/* Floating Button */}
            <FloatingButton text="⬤" onClick={toggleOverlays} />

            {/* Round Button 
            <RoundButton onClick={toggleOverlays} />*/}
        </div>
        
    );
};

export default Home;
