import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

// Hook
export function useData() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }

  return useContext(DataContext);
}

// Provider
export function DataProvider(props) {
  const [thing, setThing] = useState({ foo: 'bar' });

  return <DataContext.Provider value={{ thing, setThing }} {...props} />;
}

export default {
  DataProvider,
  useData
};
