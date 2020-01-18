import { useEffect } from 'react';
import * as THREE from 'three';
import { useThree } from 'react-three-fiber';

const useThreejsInspector = () => {
  const { camera, scene } = useThree();

  useEffect(() => {
    window.THREE = THREE;
    window.scene = scene;
    window.camera = camera;
  }, [scene, camera]);
};

export default useThreejsInspector;
