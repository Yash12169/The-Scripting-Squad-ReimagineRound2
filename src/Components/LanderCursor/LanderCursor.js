// LanderCursor.js
import React, { useEffect, useRef } from 'react';
import './LanderCursor.css';

const LanderCursor = ({ cursorImage }) => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            if (cursorRef.current) {
                const x = e.clientX;
                const y = e.clientY;
                cursorRef.current.style.left = `${x}px`;
                cursorRef.current.style.top = `${y}px`;
            }
        };

        document.addEventListener('mousemove', moveCursor);

        return () => {
            document.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return <div ref={cursorRef} className="custom-cursor" style={{ backgroundImage: `url(${cursorImage})` }}></div>;
};

export default LanderCursor;