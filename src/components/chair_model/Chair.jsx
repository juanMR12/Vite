import { PivotControls, PresentationControls } from '@react-three/drei';//helpers
import Chair_model from "./Chair_model";//import the model

//this is a component (can be geometries or models)
const Chair = () => {
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
                    <mesh position={[0,0.13,0]}>
                        <Chair_model />{/* add the model */}
                    </mesh>
                </PivotControls>
            </PresentationControls>
        </>
    );
}
export default Chair;