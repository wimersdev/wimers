import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, Stage, OrthographicCamera, useScroll } from '@react-three/drei';
import FloatingPhones from './hero/FloatingPhones.jsx';
import './hero/Hero.css';

import * as THREE from "three";

function HeroScreen() {
    const [hovered, setHovered] = useState(false);
    const [activeSection, setActiveSection] = useState(0);
    const cameraRef = useRef();

    const screens = [
        'https://cdn.jsdelivr.net/gh/wimersdev/wimers@0.0.3/dist/textures/screen01.png',
        'https://cdn.jsdelivr.net/gh/wimersdev/wimers@0.0.3/dist/textures/screen01.png',
        'https://cdn.jsdelivr.net/gh/wimersdev/wimers@0.0.3/dist/textures/screen01.png',
    ];

    const targets = {
        screen00: {
            firstTarget: { position: [-1.1, -1.2, 1], rotation: [-0.2, 0.3, -0.2] },
            secondTarget: { position: [0, -1.2, 2], rotation: [-0.15, 0.1, -0.08] },
            thirdTarget: { position: [1, -1.2, 1], rotation: [-0.2, 0.2, -0.02] },
        },
        screen01: {
            firstTarget: { position: [-1.3, -0.5, 0], rotation: [-0.1, 0, 0] },
            secondTarget: { position: [0, -0.3, 1], rotation: [-0.1, 0, -0.05] },
            thirdTarget: { position: [1.2, -0.5, 0], rotation: [-0.2, 0, 0.025] },
        },
        screen02: {
            firstTarget: { position: [-2.8, 1, 0], rotation: [0, 0.5, -0.2] },
            secondTarget: { position: [0, -5, 0], rotation: [0, 0, 1] },
            thirdTarget: { position: [3.5, 1, 0], rotation: [0, -0.8, -0.1] },
        },
        screen03: {
            firstTarget: { position: [-2.8, 1, 0], rotation: [0, 0.5, -0.2] },
            secondTarget: { position: [0, -5, 0], rotation: [0, 0, 1] },
            thirdTarget: { position: [3.5, 1, 0], rotation: [0, -0.8, -0.1] },
        },
        screen04: {
            firstTarget: { position: [-2.8, 1, 0], rotation: [0, 0.5, -0.2] },
            secondTarget: { position: [0, -5, 0], rotation: [0, 0, 1] },
            thirdTarget: { position: [3.5, 1, 0], rotation: [0, -0.8, -0.1] },
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (cameraRef.current) {
                if (window.innerWidth < 768) {
                    cameraRef.current.zoom = 120;
                } else {
                    cameraRef.current.zoom = 170;
                }
                cameraRef.current.updateProjectionMatrix();
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Canvas
                className="canvas"
                gl={{ antialias: true, localClippingEnabled: true, toneMapping: THREE.NoToneMapping }}
                style={{ zIndex:'9999', pointerEvents: 'auto' }}
            >
                <OrthographicCamera
                    ref={cameraRef}
                    makeDefault
                    position={[0, 0, 10]}
                    zoom={170}
                    left={-window.innerWidth / 2}
                    right={window.innerWidth / 2}
                    top={window.innerHeight / 2}
                    bottom={-window.innerHeight / 2}
                    near={0.001}
                    far={1000}
                />
                <Stage preset="rembrandt" intensity={1} environment="city" shadows={false} adjustCamera={false}>
                    <ScrollControls pages={3} damping={0.25}>
                        <ScrollHandler onChange={setActiveSection}>
                            <FloatingPhones
                                targets={targets}
                                screens={screens}
                                hovered={hovered}
                                setHovered={setHovered}
                                activeSection={activeSection}
                            />
                        </ScrollHandler>
                    </ScrollControls>
                    <ambientLight intensity={1} />
                </Stage>
            </Canvas>
        </>
    );
}

const ScrollHandler = ({ onChange, children }) => {
    const scroll = useScroll();
    useFrame(() => {
        const newSection = Math.floor(scroll.offset * 4); // Updated to 4 pages
        onChange(newSection);
    });
    return children;
};

export default HeroScreen;
