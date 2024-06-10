import React, { useState, useEffect, useCallback } from 'react';
import { throttle } from 'lodash';

const HeroTooltip = ({ isVisible }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback(
        throttle((e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        }, 10), // Throttle the event handler to run at most once every 10ms
        []
    );

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [handleMouseMove]);

    return (
        <div
            style={{
                display: 'flex',
                gap: '1rem',
                padding: '0.25rem 0.5rem 0.25rem 1.5rem',
                borderRadius: '0rem 2rem 2rem 2rem',
                zIndex: 99999,
                position: 'fixed',
                left: position.x + 10, // Offset the tooltip a bit from the cursor
                top: position.y + 10, // Offset the tooltip a bit from the cursor
                pointerEvents: 'none', // Prevent the tooltip from interfering with cursor events
                visibility: isVisible ? 'visible' : 'hidden',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.3s, left 0.1s, top 0.1s', // Smooth the tooltip movement
                backgroundColor: '#FFF', // Ensure background color is set
            }}
            className="hero-tooltip"
        >
            <p style={{ fontSize: '1.25rem', fontWeight: '400' }}>Sales driver - AI tool</p>
            <p style={{ padding: '0.5rem 1rem', borderRadius: '0.25rem', backgroundColor: '#E8EAFF', marginRight: '-0.5rem' }}>
                Our last case
            </p>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.86 20.96V19.38H24.44L18.6 13.86L19.66 12.78L26.86 19.7V20.58L19.66 27.52L18.58 26.42L24.38 20.96H12.86Z"
                    fill="black"
                />
            </svg>
        </div>
    );
};

export default HeroTooltip;
