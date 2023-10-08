import React, { useState } from "react";
import styles from "./sidebar.module.css";
import { sidebarBottomIcons, sidebarTopIcons } from "../../dummyData";
import { useContextApp } from "../../Context/ContextApp";
import { NavLink } from "react-router-dom";
import DrawerMenu from "../DrawerMenu/DrawerMenu";
import UserProfile from "../UserProfile/UserProfile";

const Sidebar = () => {
  const { drawerMenuHandler, isShowMobileSidebar, setIsShowMobileSidebar } = useContextApp();
  const [isShowProfile, setIsShowProfile] = useState(false);

  return (
    <div
      className={styles.wrapper}
      style={isShowMobileSidebar ? { display: "block" } : {}}
      onBlur={() => setIsShowMobileSidebar(false)}
    >
      {/* START ==> Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <img src='./assets/Images/favicon.svg' />
        </div>
        <div>
          <ul className={styles.iconList}>
            {sidebarTopIcons.map((item) => (
              <button
                key={item.name}
                type='button'
                onClick={() => drawerMenuHandler(item.name)}
                disabled={item.url === "#"}
                style={item.name === "#" ? { pointerEvents: "none" } : {}}
              >
                <NavLink to={item.url} className={({ isActive }) => (isActive ? styles.active : "")}>
                  {item.icon}
                </NavLink>
              </button>
            ))}
          </ul>
        </div>
        {/* Sidebar Bottom Icon */}
        <div className={styles.sidebarBottomIcon}>
          <ul className={styles.iconList}>
            {sidebarBottomIcons.map((icon, index) => (
              <li key={index}>
                <button type='button' onClick={() => console.log("last icon")}>
                  {icon.name}
                </button>
              </li>
            ))}
          </ul>
          <div className={styles.profileImage} onClick={() => setIsShowProfile(!isShowProfile)}>
            <img src='./assets/Images/vuero-1.svg' />
          </div>
        </div>
      </div>
      {isShowProfile && <UserProfile />}
      {/* END ==> Sidebar */}

      {/* Display drawer menu when clicked on links */}
      <DrawerMenu />
    </div>
  );
};

export default Sidebar;
