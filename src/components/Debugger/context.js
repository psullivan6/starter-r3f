import React, { createContext, useContext, useState } from 'react';

const DebuggerDataContext = createContext();

// Hook
export function useDebuggerData() {
  const context = useContext(DebuggerDataContext);

  if (!context) {
    throw new Error(
      'useDebuggerData must be used within a DebuggerDataProvider'
    );
  }

  return useContext(DebuggerDataContext);
}

// Provider
export function DebuggerDataProvider(props) {
  // const [components, setComponents] = useState([]);

  const setComponents = array => {
    props.ponents = [...props.ponents, ...array];
  };

  return (
    <DebuggerDataContext.Provider
      value={{ components: props.ponents, setComponents }}
      {...props}
    />
  );
}

export default {
  DebuggerDataProvider,
  useDebuggerData
};
