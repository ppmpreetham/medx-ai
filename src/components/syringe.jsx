"use client"
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { extend } from '@react-three/fiber';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Extend the THREE namespace to include OrbitControls
// extend({ OrbitControls });

function Syringee() {
    const { scene } = useGLTF('/syringe.glb');
    return <primitive object={scene} scale={[0.1, 0.1, 0.1]} position={[0, -10, -20]} />;
}

export default function Syringe() {
    return (
        <Canvas>
            <spotLight 
              position={[10, 10, 10]} 
              angle={0.15} 
              penumbra={1} 
              intensity={1} 
              castShadow 
            />
            {/* <Syringee /> */}
        </Canvas>
    );
}