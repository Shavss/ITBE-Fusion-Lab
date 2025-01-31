// src/components/BlogTile.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const BlogTile = ({ title, excerpt, image, link }) => {
    return (
        <div style={styles.blogTile}>
            <Link to={link} style={styles.link}>
                <img
                    src={image}
                    alt={title}
                    style={styles.image}
                />
                <h2 style={styles.blogTitle}>{title}</h2>
                <p style={styles.blogExcerpt}>{excerpt}</p>
            </Link>
        </div>
    );
};

const styles = {
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

export default BlogTile;
