import React, { createContext, useContext, useState } from "react";

const ContextAppState = createContext();

const initialStateDrawerMenu = {
  dashboards: false,
  list: false,
  apps: false,
  charts: false,
};

const initialStateDropdownList = {
  illustratorproject: false,
  reactproject: false,
  angularproject: false,
  javascriptproject: false,
};

const ContextApp = ({ children }) => {
  const [isShowDrawerMenu, setIsShowDrawerMenu] = useState(initialStateDrawerMenu);
  const [isShowDropdownList, setIsShowDropdownList] = useState(initialStateDropdownList);
  const [isShowMobileSidebar, setIsShowMobileSidebar] = useState(false);
  const [isShowNotification, setIsShowNotification] = useState(false);
  const [isShowProfile, setIsShowProfile] = useState(false);

  const showNotificationHandler = () => {
    setIsShowNotification((prevState) => !prevState);
  };

  const showProfileHandler = () => {
    setIsShowProfile((prevState) => !prevState);
  };

  const mobileSidebarHandler = () => {
    setIsShowMobileSidebar((prevState) => !prevState);
  };

  const dropdownListHandler = (clicked) => {
    setIsShowDropdownList({ ...initialStateDropdownList, [clicked]: !isShowDropdownList[clicked] });
  };

  const drawerMenuHandler = (clicked) => {
    setIsShowDrawerMenu({ ...initialStateDrawerMenu, [clicked]: !isShowDrawerMenu[clicked] });
  };

  return (
    <ContextAppState.Provider
      value={{
        isShowDrawerMenu,
        setIsShowDrawerMenu,
        drawerMenuHandler,
        dropdownListHandler,
        isShowDropdownList,
        isShowMobileSidebar,
        mobileSidebarHandler,
        isShowNotification,
        isShowProfile,
        showNotificationHandler,
        showProfileHandler,
        setIsShowMobileSidebar,
      }}
    >
      {children}
    </ContextAppState.Provider>
  );
};

export default ContextApp;

export const useContextApp = () => useContext(ContextAppState);
