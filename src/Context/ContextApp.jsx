import React, { createContext, useContext, useState } from "react";

const ContextAppState = createContext();

const initialState = {
  dashboards: false,
  list: false,
  apps: false,
  charts: false,
};

const ContextApp = ({ children }) => {
  const [isShowDrawerMenu, setIsShowDrawerMenu] = useState(initialState);

  const drawerMenuHandler = (clicked) => {
    setIsShowDrawerMenu({ ...initialState, [clicked]: !isShowDrawerMenu[clicked] });
  };

  return (
    <ContextAppState.Provider value={{ isShowDrawerMenu, setIsShowDrawerMenu, drawerMenuHandler }}>
      {children}
    </ContextAppState.Provider>
  );
};

export default ContextApp;

export const useContextApp = () => useContext(ContextAppState);
