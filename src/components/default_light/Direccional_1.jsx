import React, { Suspense } from "react";
import '@react-three/fiber'

//direccional_1
const Direccional_1 = () => {
    return (
      <> 
            <mesh position={[-17,-5,0]}>
                <directionalLight position={[-17,-5,0]} color={[255,255,255]} intensity={0.8} castShadow={false} />
                <Suspense>  
                    <coneGeometry />
                    <meshNormalMaterial wireframe />
                </Suspense> 
            </mesh>
      </>
    );
}

export default Direccional_1;