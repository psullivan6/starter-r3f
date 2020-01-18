import React from 'react';
import * as THREE from 'three';

import { a } from 'react-spring/three';

// Components
import Canvas from './Canvas';
import Debugger from './Debugger';
import OrbitControls from './OrbitControls';
import SpotLight from './Lights/SpotLight';
import Floor from './Floor';

// Utilities
import useThreejsInspector from '../utilities/useThreejsInspector';

import { useStore, useDatComponent } from '../components/Debugger/store';

const colorKey = 'boxColor';

const Scene = () => {
  useThreejsInspector();
  useDatComponent({ type: 'color', key: colorKey, value: '#f03' });
  const numberKey = useDatComponent({ type: 'number', value: 3 });
  const { data } = useStore();

  const positionY = data[numberKey];

  return (
    <>
      <ambientLight intensity={0.25} />
      <SpotLight
        position={[2, positionY, 2]}
        angle={[Math.PI / 6]}
        penumbra={0.5}
      />

      <mesh castShadow position={[0, 0.5, 0]}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <a.meshPhysicalMaterial
          attach="material"
          color={data[colorKey] || 'blue'}
        />
      </mesh>
      <Floor />

      <fog attach="fog" args={['white', 10, 15]} />

      <axesHelper args={[5]} />
      <OrbitControls />
    </>
  );
};

const App = () => (
  <section>
    <Debugger />
    <Canvas
      camera={{ position: [3, 3, 5] }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}
    >
      <Scene />
    </Canvas>
  </section>
);

export default App;
