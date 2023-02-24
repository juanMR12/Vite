/* Useful Functions and Components to add Lights */

import React from "react";
import '@react-three/fiber' /* No se si esto es necesario */
import { PivotControls, PresentationControls } from "@react-three/drei";
import { useCustomization } from "../../contexts/Customization";

//Componente para añadir Luz Ambiental
const DirectionalLight = () => {
  
  const {switchDirectionalLight} = useCustomization();

  console.log("Directional Light", switchDirectionalLight);

  let luz = true

  if(switchDirectionalLight==true){
    console.log("on");
    luz=true
  }else{
    console.log("off");
    luz=false
  }
  
  return (
    <>
      <PresentationControls enabled={false} >
        <PivotControls
          lineWidth={4}
          activeAxes={[true, true, true]}
          rotation={[0, 0, Math.PI / 2]}
          offset={[0, 0, 0]}
          anchor={[0, 1, 0]}
          scale={1.5}
        >
          <directionalLight isLight={luz} />
          <mesh position={[0, 8, 0]}>
            <coneGeometry />
            <meshNormalMaterial wireframe />
          </mesh>
        </PivotControls>
      </PresentationControls>
    </>
  );
}

export default DirectionalLight;