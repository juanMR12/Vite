/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 src/models/boat/scene.gltf
Author: Scottish Maritime Museum (https://sketchfab.com/ScottishMaritimeMuseum)
License: CC0-1.0 (http://creativecommons.org/publicdomain/zero/1.0/)
Source: https://sketchfab.com/3d-models/venus-a-shetland-fourareen-ce4d6915e1d041459e08f2d8da521e86
Title: "Venus", a Shetland fourareen
*/

import React, { useRef } from 'react'
import { MeshReflectorMaterial, useGLTF, useTexture } from '@react-three/drei'

import * as THREE from "three";
import { useCustomization } from '../../contexts/Customization';

//textures
import { 
  Bricks1, 
  Bricks2, 
  Metal, 
  Aluminum, 
  Psico1, 
  Psico2, 
  Psico3, 
  Psico4, 
  Psico5, 
  Psico6, 
  Psico7, 
  Psico8, 
  Psico9,
  Psico10
} from '../textures';

export function Boat_model(props) {

  const {BoutTexture, boatColor, BoutMaterial} = useCustomization();

  const { nodes, materials } = useGLTF('src/models/boat/scene.gltf')

  let texture //variable where to save the selected texture

  let material = BoutMaterial //variable that defines the material

  if (BoutTexture === "original") {
    texture=Bricks1()
  }if (BoutTexture === "ladrillos") {
    texture=Bricks2()
  }if (BoutTexture === "metal") {
    texture=Metal()
  }if (BoutTexture === "aluminum") {
    texture=Aluminum()
  }if (BoutTexture === "psico1") {
    texture=Psico1()
  }if (BoutTexture === "psico2") {
    texture=Psico2()
  }if (BoutTexture === "psico3") {
    texture=Psico3()
  }if (BoutTexture === "psico4") {
    texture=Psico4()
  }if (BoutTexture === "psico5") {
    texture=Psico5()
  }if (BoutTexture === "psico6") {
    texture=Psico6()
  }if (BoutTexture === "psico7") {
    texture=Psico7()
  }if (BoutTexture === "psico8") {
    texture=Psico8()
  }if (BoutTexture === "psico9") {
    texture=Psico9()
  }if (BoutTexture === "psico10") {
    texture=Psico10()
  }

  if (material === "standard") {
    return (
      <group {...props} dispose={null}>
        {/* <mesh geometry={nodes['Venus50K_8KTx_Material_#25_0'].geometry} material={materials.Material_25} /> */}
        <mesh scale={6} geometry={nodes['Venus50K_8KTx_Material_#25_0'].geometry}>{/* Boat with changed textures */}
          <meshStandardMaterial 
            /* {
              ...material === "original" ? Bricks1() : 
              material === "ladrillos" ? Bricks2() : 
              material === "metal" ? Metal() : 
              material === "aluminum" ? Aluminum() : 
              material === "psico1" ? Psico1() : 
              material === "psico2" ? Psico2() :
              material === "psico3" ? Psico3() : Psico4()
            }  */
            {...texture}
            color={
              boatColor == 1 ? "#FFFFFF" :
              boatColor == 2 ? "#808080" :
              boatColor == 3 ? "#000000" :
              boatColor.color
            }
          />
        </mesh>
        {/* <mesh geometry={nodes['Venus50K_8KTx_Material_#25_0_1'].geometry} material={materials.Material_25} /> */}
        <mesh scale={6} geometry={nodes['Venus50K_8KTx_Material_#25_0_1'].geometry}>{/* Boat with changed textures */}
          <meshStandardMaterial
            {...texture}
            color={
              boatColor == 1 ? "#FFFFFF" :
              boatColor == 2 ? "#808080" :
              boatColor == 3 ? "#000000" :
              boatColor.color
            }
          />
        </mesh>
      </group>
    )
  }if (material === "metallic") {
    return (
      <group {...props} dispose={null}>
        {/* <mesh geometry={nodes['Venus50K_8KTx_Material_#25_0'].geometry} material={materials.Material_25} /> */}
        <mesh scale={6} geometry={nodes['Venus50K_8KTx_Material_#25_0'].geometry}>{/* Boat with changed textures */}
          <MeshReflectorMaterial 
            /* {
              ...material === "original" ? Bricks1() : 
              material === "ladrillos" ? Bricks2() : 
              material === "metal" ? Metal() : 
              material === "aluminum" ? Aluminum() : 
              material === "psico1" ? Psico1() : 
              material === "psico2" ? Psico2() :
              material === "psico3" ? Psico3() : Psico4()
            }  */
            {...texture}
            color={
              boatColor == 1 ? "#FFFFFF" :
              boatColor == 2 ? "#808080" :
              boatColor == 3 ? "#000000" :
              boatColor.color
            }
            blur={[300, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={2.5}
            roughness={1}
            depthScale={0.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            metalness={0.30}
          />
        </mesh>
        {/* <mesh geometry={nodes['Venus50K_8KTx_Material_#25_0_1'].geometry} material={materials.Material_25} /> */}
        <mesh scale={6} geometry={nodes['Venus50K_8KTx_Material_#25_0_1'].geometry}>{/* Boat with changed textures */}
          <MeshReflectorMaterial
            {...texture}
            color={
              boatColor == 1 ? "#FFFFFF" :
              boatColor == 2 ? "#808080" :
              boatColor == 3 ? "#000000" :
              boatColor.color
            }
            blur={[300, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={2.5}
            roughness={1}
            depthScale={0.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            metalness={0.30}
          />
        </mesh>
      </group>
    )
  }

  
}

useGLTF.preload('src/models/boat/scene.gltf')