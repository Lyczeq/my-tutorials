import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext({
  state: 0,
  setState: state => {},
});

const STORAGE_KEY = 'my-app-name.my-app-setting-name';

// provider
export function MyContextProvider({ children }) {
  const [state, setState] = useState(
    Number(localStorage.getItem(STORAGE_KEY) || 0)
  );

  const setStateAndPersist = state => {
    localStorage.setItem(STORAGE_KEY, state);
    setState(state);
  };

  return (
    <MyContext.Provider value={{ state, setState: setStateAndPersist }}>
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  return useContext(MyContext);
}
