import FloatingGroup from './FloatingGroup.jsx';
import Iphone from './Iphone.jsx';

const FloatingPhones = ({ targets, screens, hovered, setHovered, activeSection }) => {
    const secondPosition = [0, -1.2, 1.2];
    const secondRotation = [-0.2, 0.1, -0.2];
    const thirdPosition = [1, -1.1, 1];
    const thirdRotation = [-0.2, -0.1, -0.14];



    return (
        <>
            <FloatingGroup
                position={targets.screen00.firstTarget.position}
                rotation={targets.screen00.firstTarget.rotation}
                targetPosition1={targets.screen01.firstTarget.position}
                targetRotation1={targets.screen01.firstTarget.rotation}
                targetPosition2={targets.screen02.firstTarget.position}
                targetRotation2={targets.screen02.firstTarget.rotation}
                targetPosition3={targets.screen03.firstTarget.position}
                targetRotation3={targets.screen03.firstTarget.rotation}
                targetPosition4={targets.screen04.firstTarget.position}
                targetRotation4={targets.screen04.firstTarget.rotation}
                activeSection={activeSection}
            >
                <Iphone tex={screens[0]} hovered={hovered} setHovered={setHovered} />
            </FloatingGroup>

            <FloatingGroup
                position={targets.screen00.secondTarget.position}
                rotation={targets.screen00.secondTarget.rotation}
                targetPosition1={targets.screen01.secondTarget.position}
                targetRotation1={targets.screen01.secondTarget.rotation}
                targetPosition2={targets.screen02.secondTarget.position}
                targetRotation2={targets.screen02.secondTarget.rotation}
                targetPosition3={targets.screen03.secondTarget.position}
                targetRotation3={targets.screen03.secondTarget.rotation}
                targetPosition4={targets.screen04.secondTarget.position}
                targetRotation4={targets.screen04.secondTarget.rotation}
                activeSection={activeSection}
            >
                <Iphone tex={screens[1]} hovered={hovered} setHovered={setHovered} />
            </FloatingGroup>

            <FloatingGroup
                position={targets.screen00.thirdTarget.position}
                rotation={targets.screen00.thirdTarget.rotation}
                targetPosition1={targets.screen01.thirdTarget.position}
                targetRotation1={targets.screen01.thirdTarget.rotation}
                targetPosition2={targets.screen02.thirdTarget.position}
                targetRotation2={targets.screen02.thirdTarget.rotation}
                targetPosition3={targets.screen03.thirdTarget.position}
                targetRotation3={targets.screen03.thirdTarget.rotation}
                targetPosition4={targets.screen04.thirdTarget.position}
                targetRotation4={targets.screen04.thirdTarget.rotation}
                activeSection={activeSection}>
                <Iphone tex={screens[2]} hovered={hovered} setHovered={setHovered} />
            </FloatingGroup>
        </>
    );
};

export default FloatingPhones;
