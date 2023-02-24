import React, { Suspense } from "react";
import '@react-three/fiber'

//direccional_3
const Direccional_3 = () => {
    return (
      <> 
            <mesh position={[0,25,-25]}>
                <directionalLight position={[0,25,-25]} color={[255,255,255]} intensity={0.8} castShadow={false} />
                <Suspense>  
                    <coneGeometry />
                    <meshNormalMaterial wireframe />
                </Suspense> 
            </mesh>
      </>
    );
}

export default Direccional_3;