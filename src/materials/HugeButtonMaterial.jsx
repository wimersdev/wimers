import { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const HugeButtonMaterial = () => {
    const texture = useLoader(TextureLoader, '/textures/huge_fucking_button.png');
    const materialRef = useRef();
    useEffect(() => {
        if (texture) {
            // Flip the texture horizontally and vertically
            texture.wrapS = texture.wrapT = 1000; // Ensure the wrapping mode is set to the default
            texture.repeat.set(1, 1); // Flip texture by setting repeat to -1
            texture.center.set(0.5, 0.5); // Center the rotation point
        }
    }, [texture]);



    return (
        //@ts-expect-error ref
        <meshBasicMaterial ref={materialRef} map={texture} />
    );
};

export default HugeButtonMaterial;
