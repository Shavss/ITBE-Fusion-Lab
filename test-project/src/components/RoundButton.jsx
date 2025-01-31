import React, { useState } from 'react';

const RoundButton = ({ onClick }) => {
    const [position, setPosition] = useState({ top: '50%', left: '50%' });

    const handleDragEnd = (e) => {
        const { clientX, clientY } = e;
        setPosition({ top: `${clientY}px`, left: `${clientX}px` });
    };

    return (
        <div
            style={{
                position: 'fixed',
                top: position.top,
                left: position.left,
                transform: 'translate(-50%, -50%)',
                zIndex: 20,
                cursor: 'grab',
            }}
            draggable="true"
            onDragEnd={handleDragEnd}
        >
            <button
                onClick={onClick}
                style={{
                    backgroundColor: '#0f01ea',
                    color: '#fff',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    border: 'none',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease',
                }}
            >
                ⬤
            </button>
        </div>
    );
};

export default RoundButton;
