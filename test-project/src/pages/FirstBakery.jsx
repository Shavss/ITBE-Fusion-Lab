// src/pages/FirstBakery.jsx

import React from 'react';

const FirstBakery = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>First Bakery Opened in the Neighbourhood</h1>
            <img
                src="https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=800&q=80"
                alt="First Bakery"
                style={styles.image}
            />
            <p style={styles.content}>
                Nestled in the heart of our bustling neighbourhood, the first bakery opened its doors in 1985. What started as a small family-owned shop has grown into a beloved local staple, known for its delicious pastries, warm atmosphere, and friendly staff.

                The founder, Maria Schmidt, moved to our area with a dream of bringing authentic German baked goods to her new home. With recipes passed down through generations, Maria baked with love and dedication, quickly earning the trust and affection of the community.

                Over the years, the bakery has expanded its offerings to include a variety of breads, cakes, and specialty items, all while maintaining the high quality and traditional flavors that made it famous. The bakery's signature sourdough bread and apple strudel remain customer favorites, attracting both locals and visitors alike.

                Beyond its culinary delights, the bakery has served as a community hub, hosting events, supporting local causes, and providing a welcoming space for everyone to gather. Its enduring legacy is a testament to the power of passion, community, and the simple joy of freshly baked bread.

                Today, as the bakery celebrates its 40th anniversary, it continues to uphold Maria's original vision, ensuring that each loaf and pastry carries the same heart and soul that started it all. Whether you're grabbing a morning coffee or enjoying a leisurely afternoon treat, the first bakery remains a cherished landmark in our neighbourhood.
            </p>
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
    },
    title: {
        textAlign: 'center',
        marginBottom: '1.5rem',
    },
    image: {
        width: '100%',
        height: '400px',
        objectFit: 'cover',
        borderRadius: '8px',
        marginBottom: '1.5rem',
    },
    content: {
        fontSize: '1.1rem',
        lineHeight: '1.6',
        color: '#333',
    },
};

export default FirstBakery;
