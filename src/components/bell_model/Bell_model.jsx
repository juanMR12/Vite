/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 src/models/bell/scene.gltf
Author: Limerick3D (https://sketchfab.com/Limerick3D)
License: CC0-1.0 (http://creativecommons.org/publicdomain/zero/1.0/)
Source: https://sketchfab.com/3d-models/hunt-museum-bronze-bell-hca-623-6ac94462b21549ea8047228391f1239b
Title: Hunt Museum - Bronze Bell - HCA 623
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

export function Bell_model(props) {

  const {BellTexture, bellColor, BellMaterial} = useCustomization();

  const { nodes, materials } = useGLTF('src/models/bell/scene.gltf')

  let texture //variable where to save the selected texture

  let material = BellMaterial //variable that defines the material

  if (BellTexture === "original") {
    texture=Bricks1()
  }if (BellTexture === "ladrillos") {
    texture=Bricks2()
  }if (BellTexture === "metal") {
    texture=Metal()
  }if (BellTexture === "aluminum") {
    texture=Aluminum()
  }if (BellTexture === "psico1") {
    texture=Psico1()
  }if (BellTexture === "psico2") {
    texture=Psico2()
  }if (BellTexture === "psico3") {
    texture=Psico3()
  }if (BellTexture === "psico4") {
    texture=Psico4()
  }if (BellTexture === "psico5") {
    texture=Psico5()
  }if (BellTexture === "psico6") {
    texture=Psico6()
  }if (BellTexture === "psico7") {
    texture=Psico7()
  }if (BellTexture === "psico8") {
    texture=Psico8()
  }if (BellTexture === "psico9") {
    texture=Psico9()
  }if (BellTexture === "psico10") {
    texture=Psico10()
  }

  if (material === "standard") {
    return (
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[-0.14, -0.06, -0.01]}>
            {/* <mesh geometry={nodes.mesh_0.geometry} material={materials.HCA_623} /> */}
            <mesh geometry={nodes.mesh_0.geometry}>{/* Bell with changed textures */}
              <meshStandardMaterial 
                /* {
                  ...material === "original" ? Bricks1() : 
                  material === "ladrillos" ? Bricks2() : 
                  material === "metal" ? Metal() : 
                  material === "aluminum" ? Aluminum() : 
                  material === "psico1" ? Psico1() : 
                  material === "psico2" ? Psico2() :
                  material === "psico3" ? Psico3() : Psico4()
                } */
                {...texture}
                color={
                  bellColor == 1 ? "#FFFFFF" :
                  bellColor == 2 ? "#808080" :
                  bellColor == 3 ? "#000000" :
                  bellColor.color
                }
              />
            </mesh>
            {/* <mesh geometry={nodes.mesh_1.geometry} material={materials.HCA_623} /> */}
            <mesh geometry={nodes.mesh_1.geometry}>{/* Bell with changed textures */}
              <meshStandardMaterial
                {...texture}
                color={
                  bellColor == 1 ? "#FFFFFF" :
                  bellColor == 2 ? "#808080" :
                  bellColor == 3 ? "#000000" :
                  bellColor.color
                }
              />
            </mesh>
            {/* <mesh geometry={nodes.mesh_2.geometry} material={materials.HCA_623} /> */}
            <mesh geometry={nodes.mesh_2.geometry}>{/* Bell with changed textures */}
              <meshStandardMaterial
                {...texture}
                color={
                  bellColor == 1 ? "#FFFFFF" :
                  bellColor == 2 ? "#808080" :
                  bellColor == 3 ? "#000000" :
                  bellColor.color
                }
              />
            </mesh>
          </group>
        </group>
      </group>
    )
  }if (material === "metallic") {
    return (
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[-0.14, -0.06, -0.01]}>
            {/* <mesh geometry={nodes.mesh_0.geometry} material={materials.HCA_623} /> */}
            <mesh geometry={nodes.mesh_0.geometry}>{/* Bell with changed textures */}
              <MeshReflectorMaterial 
                /* {
                  ...material === "original" ? Bricks1() : 
                  material === "ladrillos" ? Bricks2() : 
                  material === "metal" ? Metal() : 
                  material === "aluminum" ? Aluminum() : 
                  material === "psico1" ? Psico1() : 
                  material === "psico2" ? Psico2() :
                  material === "psico3" ? Psico3() : Psico4()
                } */
                {...texture}
                color={
                  bellColor == 1 ? "#FFFFFF" :
                  bellColor == 2 ? "#808080" :
                  bellColor == 3 ? "#000000" :
                  bellColor.color
                }
                blur={[300, 100]}
                resolution={1024}
                mixBlur={1}
                mixStrength={10}
                roughness={1}
                depthScale={0.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                metalness={0.30}
              />
            </mesh>
            {/* <mesh geometry={nodes.mesh_1.geometry} material={materials.HCA_623} /> */}
            <mesh geometry={nodes.mesh_1.geometry}>{/* Bell with changed textures */}
              <MeshReflectorMaterial
                {...texture}
                color={
                  bellColor == 1 ? "#FFFFFF" :
                  bellColor == 2 ? "#808080" :
                  bellColor == 3 ? "#000000" :
                  bellColor.color
                }
                blur={[300, 100]}
                resolution={1024}
                mixBlur={1}
                mixStrength={10}
                roughness={1}
                depthScale={0.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                metalness={0.30}
              />
            </mesh>
            {/* <mesh geometry={nodes.mesh_2.geometry} material={materials.HCA_623} /> */}
            <mesh geometry={nodes.mesh_2.geometry}>{/* Bell with changed textures */}
              <MeshReflectorMaterial
                {...texture}
                color={
                  bellColor == 1 ? "#FFFFFF" :
                  bellColor == 2 ? "#808080" :
                  bellColor == 3 ? "#000000" :
                  bellColor.color
                }
                blur={[300, 100]}
                resolution={1024}
                mixBlur={1}
                mixStrength={10}
                roughness={1}
                depthScale={0.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                metalness={0.30}
              />
            </mesh>
          </group>
        </group>
      </group>
    )
  }

  
}

useGLTF.preload('src/models/bell/scene.gltf')

export default Bell_model