import React, { useRef, useEffect } from 'react';

const BodyMaterial = () => {
    const materialRef = useRef(null);

    return (
        <meshStandardMaterial color={'black'} roughness={0.01} metalness={0.01} ref={materialRef} />
    );
};

export default BodyMaterial;
