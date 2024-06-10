import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import HugeButtonMaterial from '../../materials/HugeButtonMaterial.jsx';

const HugeButton = ({ isHovered, position }) => {
    const meshRef = useRef(null);
    const [rotationSpeed, setRotationSpeed] = useState(0.02); // Initial rotation speed
    const slowingDistance = 0.5; // Distance from the stopping point where deceleration starts

    useEffect(() => {
        if (isHovered) {
            setRotationSpeed(0.07); // Set speed on hover
        } else {
            setRotationSpeed(0.02); // Reset speed when not hovered
        }
    }, [isHovered]);

    useFrame(() => {
        if (meshRef.current) {
            if (isHovered) {
                meshRef.current.rotation.z += rotationSpeed;
            } else {
                // Calculate the nearest stopping point (360, 720, ...)
                const targetRotation = Math.ceil(meshRef.current.rotation.z / (2 * Math.PI)) * (2 * Math.PI);
                const delta = targetRotation - meshRef.current.rotation.z;

                if (Math.abs(delta) < slowingDistance) {
                    // Apply deceleration closer to the stopping point
                    const slowFactor = Math.max(0.1, Math.abs(delta) / slowingDistance);
                    meshRef.current.rotation.z += Math.sign(delta) * rotationSpeed * slowFactor;
                    setRotationSpeed(rotationSpeed * slowFactor);
                } else {
                    meshRef.current.rotation.z += rotationSpeed;
                }
            }
        }
    });

    return (
        <mesh ref={meshRef} position={position}>
            <circleGeometry args={[1, 64]} />
            <HugeButtonMaterial />
        </mesh>
    );
};

export default HugeButton;
