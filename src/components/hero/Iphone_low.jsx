import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import ScreenMaterial from "../../materials/ScreenMaterial.jsx";
import BodyMaterial from "../../materials/BodyMaterial.jsx";

export function IphoneLow(props) {
    const { nodes, materials } = useGLTF('/ip_low.glb')

    const scaleFactor = 3.5

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.body.geometry}
                material={nodes.body.material}
                position={[0.084, 1.598, 0.026]}
                rotation={[0, Math.PI / 2, -Math.PI / 2]}
                scale={[0.044*scaleFactor, 0.016*scaleFactor, 0.044*scaleFactor]}
            >
                <BodyMaterial />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.screen.geometry}
               // material={nodes.screen.material}
                position={[0.084, 1.598, 0.026]}
                rotation={[0, Math.PI / 2, -Math.PI / 2]}
                scale={[0.044*scaleFactor, 0.016*scaleFactor, 0.044*scaleFactor]}
            >
                <ScreenMaterial tex={props.tex} />
            </mesh>

        </group>
    )
}

useGLTF.preload('/ip_low.glb')
