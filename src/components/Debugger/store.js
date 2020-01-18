import React, { useEffect, useRef } from 'react';
import create from 'zustand';

// Components
import * as DatComponents from '@tim-soft/react-dat-gui';

// Utilities
import _capitalize from 'lodash/capitalize';
import _uniqueId from 'lodash/uniqueId';

const store = create(set => ({
  data: {},
  components: [],
  addComponents: items => {
    return set(state => ({ components: [...state.components, ...items] }));
  },
  setData: data => {
    return set(state => ({ data: { ...state.data, ...data } }));
  }
}));

const getDatComponent = ({ type, key }) => {
  const pascalType = _capitalize(type);
  const DatComponent = DatComponents[`Dat${pascalType}`];

  return (
    <DatComponent key={`DatComponent-${key}`} path={key} label={pascalType} />
  );
};

export const [useStore] = store;

export const useDatComponent = ({ type, key: propsKey, value }) => {
  const key = useRef();
  const { addComponents, setData } = useStore();

  useEffect(() => {
    key.current = propsKey || _uniqueId(`${type}_`);

    if (value != null) {
      setData({ [key.current]: value });
    }

    addComponents([getDatComponent({ type, key: key.current })]);
  }, []);

  return key.current;
};

export default store;
