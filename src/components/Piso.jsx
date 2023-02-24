import * as THREE from "three";
import { MeshReflectorMaterial, PresentationControls } from '@react-three/drei';//helpers
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

//esto es un componente (puede se geometrias o modelos)
const Piso = () => {
    const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
        'src/models/bridge2/texture1/Brick_wall_008_COLOR.jpg',
        'src/models/bridge2/texture1/Brick_wall_008_DISP.png',
        'src/models/bridge2/texture1/Brick_wall_008_NORM.jpg',
        'src/models/bridge2/texture1/Brick_wall_008_SPEC.jpg',
        'src/models/bridge2/texture1/Brick_wall_008_OCC.jpg',
    ])

    //To adjust the texture (alter the values to taste)
    colorMap.repeat.set(16,16);
    displacementMap.repeat.set(16,16);
    normalMap.repeat.set(16,16);
    roughnessMap.repeat.set(16,16);
    aoMap.repeat.set(16,16);

    colorMap.wrapS = 
    colorMap.wrapT = 
    displacementMap.wrapS = 
    displacementMap.wrapT = 
    normalMap.wrapS = 
    normalMap.wrapT = 
    roughnessMap.wrapS = 
    roughnessMap.wrapT = 
    aoMap.wrapS = 
    aoMap.wrapT = 
    THREE.RepeatWrapping;

    return(
        <PresentationControls enabled={false}>
            <mesh rotation={[-Math.PI / 2,0,0]}>{/* Scene Floor */}
                <planeGeometry args={[170, 170]} />{/* Plane Geometry */}
                <MeshReflectorMaterial /* floor material */
                    map={colorMap}
                    displacementMap={displacementMap}
                    normalMap={normalMap}
                    roughnessMap={roughnessMap}
                    aoMap={aoMap}
                    blur={[300, 100]}
                    resolution={1024}
                    mixBlur={1}
                    mixStrength={10}
                    roughness={50}
                    depthScale={0.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#a9a9a9"
                    metalness={0.75}
                />
            </mesh>
        </PresentationControls>
    );
}
export default Piso;