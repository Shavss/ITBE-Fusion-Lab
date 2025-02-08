import React, { useEffect, useRef } from 'react';

const ScrollingText = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (textRef.current) {
                textRef.current.style.transform = `translateX(${-scrollTop * 0.2}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                fontSize: '5rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '150px', // Adjust height as needed
            }}
        >
            <div
                ref={textRef}
                style={{
                    display: 'inline-block',
                    whiteSpace: 'nowrap',
                }}
            >
                HOUSE AMAZING HOUSE AMAZING HOUSE AMAZING HOUSE AMAZING HOUSE AMAZING HOUSE AMAZING
            </div>
        </div>
    );
};

export default ScrollingText;
