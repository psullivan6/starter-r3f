import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import DatGui, {
  // DatBoolean,
  DatColor
  // DatNumber,
  // DatString
} from '@tim-soft/react-dat-gui';

export const Container = styled(DatGui)`
  z-index: 10;
  left: 1em;
  right: auto;
`;

const Debugger = ({ onUpdate, ...props }) => {
  const [data, setData] = useState({
    color: '#f03'
  });

  const handleUpdate = updatedData => {
    setData({ ...data, ...updatedData });
  };

  useEffect(() => {
    onUpdate(data);
  }, [data, onUpdate]);

  return (
    <Container data={data} onUpdate={handleUpdate}>
      <DatColor path="color" label="Feels Like" />
    </Container>
  );
};

export default Debugger;
