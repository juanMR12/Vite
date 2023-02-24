import { PivotControls, PresentationControls } from '@react-three/drei';//helpers
import { Boat_model } from './Boat_model';

//this is a component (can be geometries or models)
const Boat = () => {
    return(
        <>
            <PresentationControls enabled={false} >
                <PivotControls //model movement controls
                lineWidth={4}
                activeAxes={[true, true, true]}
                rotation={[0, 0, Math.PI / 2]}
                offset={[0, 0, 0]}
                anchor={[0, 1, 0]}
                scale={1.5}
                >
                    <mesh rotation={[-Math.PI / 2, 0, 0]} scale={0.3} position={[0,0.13,0]}>
                        <Boat_model />{/* add the model */}
                    </mesh>
                </PivotControls>
            </PresentationControls>
        </>
    );
}
export default Boat;