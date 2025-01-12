import React from 'react';

const FloatingButton = ({ text = 'Button', onClick }) => {
    const buttonStyle = {
        position: 'fixed',
        right: '20px', // Distance from the right edge
        top: '50%', // Vertically centered
        transform: 'translateY(-50%)', // Proper vertical centering
        zIndex: 1000, // Make sure it's on top of other elements
        backgroundColor: '#000', // Background color
        color: '#fff', // Text color
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        borderRadius: '20px 0 0 20px', // Rounded left corners
        border: 'none',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        outline: 'none',
    };

    return (
        <button style={buttonStyle} onClick={onClick}>
            {text}
        </button>
    );
};

export default FloatingButton;
