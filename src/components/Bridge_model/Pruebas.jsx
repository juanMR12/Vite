import * as THREE from "three";
import React, {Suspense, useState} from "react";/* suspense es un componente para cargar modelos en react */
import { PivotControls, PresentationControls, Stage } from '@react-three/drei';//helpers
import Bridge2 from "./Bridge2";//importo el modelo

//esto es un componente (puede se geometrias o modelos)
const Pruebas = () => {
    return(
        <>
            <PresentationControls enabled={false} >{/* Hay que estudiar mejor esto para configurarlo bien*/}
                {/* <Stage> */}{/* Hay que estudiar mejor esto para configurarlo bien*/}
                <PivotControls
                lineWidth={4}
                activeAxes={[true, true, true]}
                rotation={[0, 0, Math.PI / 2]}
                offset={[0, 0, 0]}
                anchor={[0, 1, 0]}
                scale={1.5}
                >
                    <mesh position={[0,0.13,0]}>
                        {/* <Suspense fallback={null}> */}{/* Agrego el suspense */}
                            <Bridge2 />{/* Agrego el modelo */}
                        {/* </Suspense> */}
                    </mesh>
                </PivotControls>
                {/* </Stage> */}
            </PresentationControls>
        </>
    );
}
export default Pruebas;