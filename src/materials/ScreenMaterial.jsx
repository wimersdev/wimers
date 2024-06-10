import React, { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader, RepeatWrapping } from 'three';

const ScreenMaterial = ({ tex }) => {
    const texture = useLoader(TextureLoader, tex);
    const materialRef = useRef(null);

    useEffect(() => {
        if (texture) {
            // Flip the texture horizontally and vertically
            texture.wrapS = texture.wrapT = RepeatWrapping; // Ensure the wrapping mode is set to RepeatWrapping
            texture.repeat.set(1, -1); // Flip texture by setting repeat to -1
            texture.center.set(0.5, 0.5); // Center the rotation point
        }
    }, [texture]);

    return (
        <meshBasicMaterial ref={materialRef} map={texture} />
    );
};

export default ScreenMaterial;
