import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Plane, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const ImageRotator = ({ imagePaths }) => {
  return (
    <Canvas camera={{ position: [0, 0, 15] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 1]} />
      <SceneRotation>
        {imagePaths.map((path, index) => (
          <ImagePlane 
            key={path} 
            path={path} 
            index={index} 
            totalImages={imagePaths.length} 
          />
        ))}
      </SceneRotation>
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

const SceneRotation = ({ children }) => {
  const groupRef = useRef();
  
  useFrame(() => {
    if (groupRef.current) {
    //   groupRef.current.rotation.z += 0.05;
        groupRef.current.rotation.y += 0.05
    }
  });
  
  return <group ref={groupRef}>{children}</group>;
};

const ImagePlane = ({ path, index, totalImages, radius = 5 }) => {
    const texture = new THREE.TextureLoader().load(path);
    
    const phi = Math.acos(1 - 2 * (index + 0.5) / totalImages);
    const theta = Math.sqrt(totalImages * Math.PI) * phi;

    return (
      <Plane args={[1, 1]} position={[
        Math.cos(theta) * Math.sin(phi) * radius,
        Math.sin(theta) * Math.sin(phi) * radius,
        Math.cos(phi) * radius
      ]}>
        <meshBasicMaterial attach="material" map={texture} side={THREE.DoubleSide} transparent={true} />
      </Plane>
    );
  };
  
export default ImageRotator;
