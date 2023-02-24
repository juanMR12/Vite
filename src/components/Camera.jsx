import React from 'react'
import { PerspectiveCamera } from '@react-three/drei'

const Camera = () => {
  return (
    <PerspectiveCamera 
    makeDefault  /** Registers the camera as the system default, fiber will start rendering with it */
    position={[0, 5, -25]} /* Spawn Camera at this position for better initial view of the test model */
    /* rotation={[Math.PI, Math.PI, Math.PI]} */
    />
  )
}

export default Camera