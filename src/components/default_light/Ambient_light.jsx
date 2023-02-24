import React, { Suspense } from "react";
import '@react-three/fiber'

//Default lighting components

//ambient
const Ambient_light = () => {
  return (
    <> 
        
        <mesh>
          <ambientLight color={[255,255,255]} intensity={0.3} castShadow={false} />
          <Suspense>{/* suspense is a component to load models in react */}
              <boxGeometry />
              <meshNormalMaterial wireframe />
          </Suspense> 
        </mesh>
        
    </>
  );
}

export default Ambient_light;