// src/Blog.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Blog</h1>
            <div style={styles.blogGrid}>
                {/* Blog Tile */}
                <div style={styles.blogTile}>
                    <Link to="/blog/first-bakery" style={styles.link}>
                        <img
                            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
                            alt="First Bakery"
                            style={styles.image}
                        />
                        <h2 style={styles.blogTitle}>First Bakery Opened in the Neighbourhood</h2>
                        <p style={styles.blogExcerpt}>
                            Discover the story behind the first bakery that sweetened our community...
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    title: {
        textAlign: 'center',
        marginBottom: '2rem',
    },
    blogGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'center',
    },
    blogTile: {
        width: '300px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
    image: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
    },
    blogTitle: {
        fontSize: '1.5rem',
        margin: '1rem',
    },
    blogExcerpt: {
        fontSize: '1rem',
        margin: '0 1rem 1rem 1rem',
        color: '#555',
    },
};

export default Blog;
