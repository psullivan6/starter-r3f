import React from 'react';
import * as THREE from 'three';

const Floor = props => (
  <mesh {...props} rotation={[Math.PI / 2, 0, 0]} receiveShadow={true}>
    <planeBufferGeometry attach="geometry" args={[400, 400]} />
    <meshPhysicalMaterial
      attach="material"
      color="white"
      opacity={0.5}
      // transparent
      side={THREE.DoubleSide}
    />
  </mesh>
);

export default Floor;
