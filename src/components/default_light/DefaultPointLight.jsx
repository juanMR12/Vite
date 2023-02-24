import React, { Suspense } from "react";
import '@react-three/fiber'

//Default Point Light
const DefaultPointLight = () => {
    return (
      <> 
            <mesh position={[0,7.5,0]}>
                <pointLight position={[0,7.5,0]} color={[255,255,255]} intensity={0.2} castShadow={false} decay={2} />
                <Suspense>  
                    <sphereGeometry />
                    <meshNormalMaterial wireframe />
                </Suspense> 
            </mesh>
      </>
    );
}

export default DefaultPointLight;