import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingCard = ({ message, style }) => { // Accept "style" as a prop
    const [showCard, setShowCard] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setShowCard(true);
        }, 3000);
    }, []);

    useEffect(() => {
        if (showCard) {
            let index = 0;
            setText(''); // Clear text before typing
            const interval = setInterval(() => {
                setText((prev) => prev + message[index]);
                index++;
                if (index === message.length) clearInterval(interval);
            }, 50); // Adjust speed of typing here

            return () => clearInterval(interval);
        }
    }, [showCard, message]);

    return (
        <>
            {showCard && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{
                        background: 'white',
                        padding: '1.5rem',
                        borderRadius: '8px',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        maxWidth: '600px',
                        fontSize: '1.2rem',
                        color: '#333',
                        ...style // Apply custom styles from parent
                    }}
                >
                    {/* Render text with HTML formatting */}
                    <span dangerouslySetInnerHTML={{ __html: text }} />
                </motion.div>
            )}
        </>
    );
};

export default TypingCard;
