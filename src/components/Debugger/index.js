import React from 'react';
import styled from 'styled-components';

// Components
import DatGui from '@tim-soft/react-dat-gui';

// Store
import { useStore } from './store';

export const Container = styled(DatGui)`
  z-index: 10;
  left: 1em;
  right: auto;
`;

const Debugger = ({ onUpdate, ...props }) => {
  const { components, data, setData } = useStore();

  const handleUpdate = updatedData => {
    setData({ ...data, ...updatedData });
  };

  return (
    <Container data={data} onUpdate={handleUpdate}>
      {components}
    </Container>
  );
};

export default Debugger;
