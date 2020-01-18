import React, { useState } from 'react';
import * as THREE from 'three';

import { a } from 'react-spring/three';

// Components
import Canvas from './Canvas';
import Debugger from './Debugger';
import OrbitControls from './OrbitControls';
import SpotLight from './Lights/SpotLight';
import Floor from './Floor';

const Scene = ({ color }) => (
  <>
    <ambientLight intensity={0.25} />
    <SpotLight position={[2, 3, 2]} angle={[Math.PI / 6]} penumbra={0.5} />

    <mesh castShadow position={[0, 0.5, 0]}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshPhysicalMaterial attach="material" color={color} />
    </mesh>
    <Floor />

    <fog attach="fog" args={['white', 10, 15]} />

    <axesHelper args={[5]} />
    <OrbitControls />
  </>
);

function App() {
  const [color, setColor] = useState('hotpink');

  const handleUpdate = ({ color }) => {
    setColor(color);
  };

  return (
    <section>
      <Debugger onUpdate={handleUpdate} />
      <Canvas
        camera={{ position: [3, 3, 5] }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
      >
        <Scene color={color} />
      </Canvas>
    </section>
  );
}

export default App;
