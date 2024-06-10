/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import ScreenMaterial from '../../materials/ScreenMaterial.jsx'
import HugeButton from './HugeButton.jsx';



const Iphone= ({ hovered, setHovered, tex}) => {
    const { nodes, materials } = useGLTF('https://cdn.jsdelivr.net/gh/wimersdev/wimers@0.0.3/dist/ip.glb');

    // Обработчики наведения на iPhone
    const handlePointerOver = () => setHovered(true);
    const handlePointerOut = () => setHovered(false);

    return (
        <group dispose={null} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
            <group name="Empty005" position={[0, 0.163, 0]} scale={3}>
                <mesh
                    name="bottom_screws"
                    //@ts-expect-error geo
                    geometry={nodes.bottom_screws.geometry}
                    material={materials['Material.009']}
                    position={[-0.043, -0.757, -0.076]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.252}
                />
                <mesh
                    name="charging_port"
                    //@ts-expect-error geo
                    geometry={nodes.charging_port.geometry}
                    material={materials['Material.009']}
                    position={[0.161, 0.595, -0.066]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.217}
                />
                <mesh
                    name="ear_piece"
                    //@ts-expect-error geo
                    geometry={nodes.ear_piece.geometry}
                    material={materials['Material.002']}
                    position={[-0.004, 0.837, 0.043]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.005}
                />
                <mesh
                    name="earpiece_mesh"
                    //@ts-expect-error geo
                    geometry={nodes.earpiece_mesh.geometry}
                    material={materials['Material.002']}
                    position={[0.001, 0.837, 0.048]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.005}
                />
                <mesh
                    name="notch"
                    //@ts-expect-error geo
                    geometry={nodes.notch.geometry}
                    material={materials['Material.002']}
                    position={[0, 0, 0.002]}
                    scale={11.704}
                />
                <group
                    name="phone_body"
                    position={[0.161, 0.595, -0.066]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.217}>
                    <mesh
                        name="Plane002"
                        //@ts-expect-error geo
                        geometry={nodes.Plane002.geometry}
                        material={materials['Material.009']}
                    />
                    <mesh
                        name="Plane002_1"
                        //@ts-expect-error geo
                        geometry={nodes.Plane002_1.geometry}
                        material={materials['Material.001']}
                    />
                    <mesh
                        name="Plane002_2"
                        //@ts-expect-error geo
                        geometry={nodes.Plane002_2.geometry}
                        material={materials['Material.010']}
                    />
                </group>
                <mesh
                    name="power_key"
                    //@ts-expect-error geo
                    geometry={nodes.power_key.geometry}
                    material={materials['Material.012']}
                    position={[0.409, 0.391, 0]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.015}
                />
                <mesh
                    name="screen"
                    //@ts-expect-error geo
                    geometry={nodes.screen.geometry}
                    scale={11.704}
                >
                    <ScreenMaterial tex={tex} />
                </mesh>
                <mesh
                    name="slider_button"
                    //@ts-expect-error geo
                    geometry={nodes.slider_button.geometry}
                    material={materials['Material.012']}
                    position={[-0.414, 0.459, 0]}
                    rotation={[Math.PI, 0, 1.571]}
                    scale={0.015}
                />
                <mesh
                    name="volume_keys"
                    //@ts-expect-error geo
                    geometry={nodes.volume_keys.geometry}
                    material={materials['Material.012']}
                    position={[-0.406, 0.456, 0]}
                    rotation={[Math.PI, 0, Math.PI / 2]}
                    scale={0.015}
                />
            </group>
            {tex === 'https://cdn.jsdelivr.net/gh/wimersdev/wimers@0.0.3/dist/textures/screen01.png' && <HugeButton isHovered={hovered} position={[0, -1.15, 0.14]} />}
        </group>
    );
}

useGLTF.preload('https://cdn.jsdelivr.net/gh/wimersdev/wimers@0.0.3/dist/ip.glb');

export default Iphone;
