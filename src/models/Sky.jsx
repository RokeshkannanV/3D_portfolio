import React from 'react'
import {useFrame} from "@react-three/fiber"
import { useGLTF } from '@react-three/drei';
import skyScene from "../assets/3D/starry_galaxy_sky_hdri_background_photosphere.glb"
import { useRef } from 'react';

export function Sky({ isRotating }){
    const skyRef = useRef();
    const sky = useGLTF(skyScene)

    useFrame((_, delta) => {
        if (isRotating) {
          skyRef.current.rotation.y += 0.25 * delta; // Adjust the rotation speed as needed
        }
      });
    
  return (
    <mesh ref = {skyRef}>
      <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky
