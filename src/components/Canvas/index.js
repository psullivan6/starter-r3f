import React from 'react';
import styled from 'styled-components';

// Components
import { Canvas } from 'react-three-fiber';

const CanvasContainer = styled.div`
  width: 100%;
  height: 600px;
`;

const CanvasComponent = ({ children, ...props }) => {
  console.log('props', props);
  return (
    <CanvasContainer>
      <Canvas {...props}>{children}</Canvas>
    </CanvasContainer>
  );
};

export default CanvasComponent;
