import React, { createContext, useState, useContext } from 'react';

export const Compose = ({ providers, children }) =>
  providers.reverse().reduce((acc, curr) => {
    const [Provider, props] = Array.isArray(curr)
      ? [curr[0], curr[1]]
      : [curr, {}];
    return <Provider {...props}>{acc}</Provider>;
  }, children);

export const createApplicationState = (initialValue) => {
  const Context = createContext({});

  const Provider = ({ children }) => {
    const state = useState(initialValue);
    return <Context.Provider value={state}>{children}</Context.Provider>;
  };

  const useApplicationState = () => useContext(Context);

  return [Provider, useApplicationState];
};
