import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';

const FloatingGroup = ({
                           position,
                           rotation,
                           targetPosition1,
                           targetRotation1,
                           targetPosition2,
                           targetRotation2,
                           targetPosition3,
                           targetRotation3,
                           targetPosition4,
                           targetRotation4,
                           children,
                           activeSection
                       }) => {
    const outerGroupRef = useRef();
    const innerGroupRef = useRef();

    useEffect(() => {
        if (outerGroupRef.current) {
            outerGroupRef.current.position.set(position[0], position[1], position[2]);
            outerGroupRef.current.rotation.set(rotation[0], rotation[1], rotation[2]);
        }
    }, [position, rotation]);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (innerGroupRef.current) {
            innerGroupRef.current.position.y = Math.sin(t * 0.5) * 0.2;
            innerGroupRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;
            innerGroupRef.current.rotation.z = Math.cos(t * 0.3) * 0.1;
        }
    });

    let targetPosition = position;
    let targetRotation = rotation;

    if (activeSection === 1) {
        targetPosition = targetPosition1;
        targetRotation = targetRotation1;
    } else if (activeSection === 2) {
        targetPosition = targetPosition2;
        targetRotation = targetRotation2;
    } else if (activeSection === 3) {
        targetPosition = targetPosition3;
        targetRotation = targetRotation3;
    } else if (activeSection === 4) {
        targetPosition = targetPosition4;
        targetRotation = targetRotation4;
    }

    return (
        <motion.group
            initial={{ x: position[0], y: position[1], z: position[2], rotateX: rotation[0], rotateY: rotation[1], rotateZ: rotation[2] }}
            animate={{ x: targetPosition[0], y: targetPosition[1], z: targetPosition[2], rotateX: targetRotation[0], rotateY: targetRotation[1], rotateZ: targetRotation[2] }}
            transition={{ ease: "easeInOut", delay: 0, duration: 1 }}
        >
            <group ref={outerGroupRef}>
                <group ref={innerGroupRef}>
                    {children}
                </group>
            </group>
        </motion.group>
    );
};

export default FloatingGroup;
