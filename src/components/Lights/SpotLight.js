import React from 'react';
import { useResource, useUpdate } from 'react-three-fiber';
import _uniqueId from 'lodash/uniqueId';

import { a } from 'react-spring/three';

const SpotLight = ({ showHelper = true, ...props }) => {
  const [ref, light] = useResource();
  const name = _uniqueId('spotLight_'); // [TODO] Make this a ref?

  const helperRef = useUpdate(
    self => {
      self.update();
    },
    [props]
  );

  return (
    <group name={`${name}-Group`}>
      <a.spotLight ref={ref} name={name} castShadow={true} {...props} />
      {light && showHelper && (
        <a.spotLightHelper
          ref={helperRef}
          name={`${name}-Helper`}
          args={[light, 'rebeccapurple']}
        />
      )}
    </group>
  );
};

export default SpotLight;
