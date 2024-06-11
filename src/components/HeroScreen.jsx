import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stage, OrthographicCamera } from '@react-three/drei';
import FloatingPhones from './hero/FloatingPhones.jsx';
import './hero/Hero.css';
import * as THREE from 'three'

// r150
THREE.ColorManagement.enabled = true

// r139-r149
THREE.ColorManagement.legacyMode = false

function HeroScreen() {
    const [hovered, setHovered] = useState(false);
    const [activeSection, setActiveSection] = useState(0);
    const cameraRef = useRef();
    const sectionsRef = useRef([]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionIndex = Array.from(sectionsRef.current).indexOf(entry.target);
                    setActiveSection(sectionIndex);
                    console.log(sectionIndex)
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, options);

        sectionsRef.current = document.querySelectorAll('[data-section]');
        sectionsRef.current.forEach(section => observer.observe(section));

        return () => {
          observer.disconnect();
        };
    }, []);

    const screens = [
        'https://uploads-ssl.webflow.com/6385ed21375f1c00a4a3f887/6667e358b31d4041c22615e7_screen02.png',
        'https://uploads-ssl.webflow.com/6385ed21375f1c00a4a3f887/6667e35995093eddb0b8396d_screen01.png',
        '/textures/screen03.png',
    ];

    const targets = {
        screen00: {
            firstTarget: { position: [-1.1, -1.2, 1], rotation: [-0.2, 0.3, -0.2] },
            secondTarget: { position: [0, -1.2, 2], rotation: [-0.15, 0.1, -0.08] },
            thirdTarget: { position: [1, -1.2, 1], rotation: [-0.2, 0.2, -0.02] },
        },
        screen01: {
            firstTarget: { position: [-2.8, 1, 0], rotation: [0, 0.5, -0.2] },
            secondTarget: { position: [0, -5, 0], rotation: [0, 0, 1] },
            thirdTarget: { position: [3.5, 1, 0], rotation: [0, -0.8, -0.1] },
        },
        screen02: {
            firstTarget: { position: [-10, 1, 0], rotation: [0, 0.5, -0.2] },
            secondTarget: { position: [0, -5, 0], rotation: [0, 0, 1] },
            thirdTarget: { position: [10, 1, 0], rotation: [0, -0.8, -0.1] },
        },
        screen03: {
            firstTarget: { position: [-10, 1, 0], rotation: [0, 0.5, -0.2] },
            secondTarget: { position: [0, -5, 0], rotation: [0, 0, 1] },
            thirdTarget: { position: [10, 1, 0], rotation: [0, -0.8, -0.1] },
        },
        screen04: {
            firstTarget: { position: [-10, 1, 0], rotation: [0, 0.5, -0.2] },
            secondTarget: { position: [0, -5, 0], rotation: [0, 0, 1] },
            thirdTarget: { position: [10, 1, 0], rotation: [0, -0.8, -0.1] },
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
                style={{ zIndex: '9999', pointerEvents: 'auto' }}
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

                    <FloatingPhones
                        targets={targets}
                        screens={screens}
                        hovered={hovered}
                        setHovered={setHovered}
                        activeSection={activeSection}
                    />


                    <ambientLight intensity={1} />
                </Stage>
            </Canvas>
        </>
    );
}

export default HeroScreen;
