import React from 'react';
import { useResource } from 'react-three-fiber';

const SpotLight = ({ showHelper = true, ...props }) => {
  const [ref, light] = useResource();

  return (
    <group>
      <spotLight ref={ref} castShadow={true} {...props} />
      {light && showHelper && (
        <spotLightHelper args={[light, 'rebeccapurple']} />
      )}
    </group>
  );
};

export default SpotLight;
