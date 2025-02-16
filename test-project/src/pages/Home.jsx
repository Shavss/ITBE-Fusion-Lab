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
    const [expandedIndex, setExpandedIndex] = useState(null);
  
    const toggleOverlays = () => {
      setShowOverlays((prev) => !prev);
    };
  
  
    const handleExploreClick = () => {
      navigate('/ifc-viewer'); // Navigate to the IFC viewer route
    };

    // Array of expandable sections
    const expansions = [
        {
        title: "DESIGN CONCEPT",
        content:
            "The core idea revolves around strengthening public access while creating a harmonious and environmentally responsive urban environment. By stepping down the massing model of the buildings, the design ensures a smooth transition from public spaces at the ground level to semi-public and private areas higher up. Larger, connected public areas encourage social interaction and community activities, while open pathways and plazas replace narrow, isolated corridors. Clear sightlines are established through the repositioning of high-rise buildings, creating open connectivity and visible access points to public amenities. The building heights are staggered to reduce overshadowing and allow more sun exposure, improving daylight potential and reducing noise through buffer zones and green areas.",
        image: "/img/renders/1739644044157.jpg",
        },
        {
        title: "HARMONY TOWERS",
        content:
            "The site offers expansive, interconnected areas that foster vibrant public life. The arrangement of the two high-rise buildings, known as the 'Harmony Towers', eliminates narrow pathways, opening the site visually and physically. These towers are characterized by their rotated and twisted forms, ensuring a unique elevation from every direction and reinforcing the visual appeal of the development. The façade design is responsive to orientation: the south-facing façades have reduced glass ratios to mitigate solar heat gain, while the north-facing façades feature higher glazing ratios to maximize daylight potential. The height staggering creates a visually appealing gradient, softening the skyline.",
        image: "/img/renders/1739644044452.jpg",
        },
        {
        title: "CULTURAL IDENTITY",
        content:
            "To reflect the cultural and historical context of Munich, the project integrates elements inspired by Bavarian identity. The site and building design incorporate blue and white motifs, paying homage to Bavaria’s iconic flag. This distinctive pattern creates a visual contrast with the site’s abundant greenery, enhancing aesthetic appeal and reinforcing a strong local identity.",
        image: "/img/renders/1739644044639.jpg",
        },
        {
        title: "GREEN DESIGN",
        content:
            "The proposal embodies principles of green design, ensuring ecological responsibility and long-term sustainability. Optimized façade materials and glazing ratios tailored to orientation improve energy efficiency, while sustainable, locally sourced materials reduce the project’s carbon footprint. Green roofs and vertical gardens help mitigate the heat island effect and enhance biodiversity, and rainwater harvesting systems are integrated into the landscape design to promote responsible water management.",
        image: "/img/renders/1739644044825.jpg",
        },
        {
        title: "STRUCTURE",
        content:
            "The main challenge in the tower’s design stemmed from the variation in the area of the square-shaped floor slabs along the tower’s height, along with the changes in rotational angles between the slabs. The rotational angles range from 1.5 to 3.5 degrees between floors, giving the tower its dynamic architectural design. To address this challenge, the rotating floor slabs were supported by spiral reinforced concrete at the corners only, while maintaining a vertical core and inner columns. This arrangement, originally inspired by the Evolution Tower in Moscow, was found to be highly efficient in maximizing the usable floor area. In addition to its efficiency in space utilization, the proposed structural system offers significant benefits in reducing torsional effects under gravity and lateral loads. Moreover, it is simpler to construct compared to designs featuring twisting inner columns or a twisting exoskeleton.",
        image: "/img/Strucutre.png",
        },
    ];


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
              minHeight: '200vh',
              background: 'rgba(242, 240, 237, 0.9)',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              padding: '4rem',
              position: 'relative',
            }}
          >
            <div style={{ maxWidth: '1000px', textAlign: 'left', color: '#000', position: 'relative' }}>
              {/* Normal Paragraph */}
              <p style={{ fontSize: '15px', lineHeight: '23px', marginBottom: '5rem', marginTop: '-1rem', maxWidth: '600px' }}>
                The proposed design aims to create a dynamic and inviting urban environment in the heart of Munich by enhancing public access, improving environmental performance, and establishing a strong site identity. The massing model of the building is strategically stepped down to facilitate a continuous flow of public functions, seamlessly connecting the ground level to the uppermost areas of the structures. This concept promotes inclusivity, sustainability, and a unique architectural language. 
                Below, you’ll find key aspects of our vision that define the <b>next generation of city living</b>.
              </p>

              {/* Right-Aligned Explore Button */}
              <button
                style={{
                  position: 'absolute',
                  top: '30px',
                  right: '-24.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.8rem 1.5rem',
                  fontSize: '0.9rem',
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
                onClick={handleExploreClick}
              >
                EXPLORE THE DEVELOPMENT <span style={{ marginLeft: '0.5rem' }}>&#8594;</span>
              </button>
            {/* Expandable Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '-20rem' }}>
            {expansions.map((item, idx) => (
                <Expand
                key={idx}
                title={item.title}
                content={item.content}
                image={item.image}
                isExpanded={expandedIndex === idx}
                onToggle={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                />
            ))}
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
                    color: 'rgb(242, 240, 237)',
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
                    e.target.style.backgroundColor = 'rgb(242, 240, 237)';
                    e.target.style.color = '#000';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#000';
                    e.target.style.color = 'rgb(242, 240, 237)';
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
