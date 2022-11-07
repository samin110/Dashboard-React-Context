import React, { useState } from "react";
import { drawerMenuApp_Data_ChartLinks, drawerMenuDashboardsLinks } from "../../dummyData";
import styles from "./drawerMenu.module.css";
import { motion } from "framer-motion";
import { useContextApp } from "../../Context/ContextApp";
import { NavLink } from "react-router-dom";

const DrawerMenu = () => {
  const { isShowDrawerMenu } = useContextApp();

  const [isShowSubMenu, setIsShowSubMenu] = useState({
    hobby: false,
    official: false,
  });

  const subMenuHandler = (opened) => {
    setIsShowSubMenu({ ...isShowSubMenu, [opened]: !isShowSubMenu[opened] });
  };

  // This component is for dynamic render drawer menu for apps,list,charts
  const DrawerLinks = ({ title, faTitle }) => {
    return (
      <div className={styles.container}>
        <h1>{faTitle}</h1>
        <div className={styles.appTitle}>
          {drawerMenuApp_Data_ChartLinks
            .filter((item) => title == item.enName)
            .map(({ links, enName }) =>
              links.map((link) => (
                <NavLink
                  to={`${enName}/${link.url}`}
                  key={link.name}
                  className={styles.subLink}
                  style={({ isActive }) => ({ color: isActive && "#41b983", fontWeight: isActive && "bold" })}
                >
                  <span className={styles.icon}>{link.icon}</span>
                  {link.name}
                </NavLink>
              ))
            )}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className={isShowDrawerMenu.dashboards ? styles.drawerMenu : styles.notDrawerMenu}>
        {isShowDrawerMenu.dashboards && (
          <div className={styles.container}>
            <h1>داشبوردها</h1>
            <div className={styles.links}>
              <NavLink
                to='/dashboards/personal'
                className={styles.title}
                style={({ isActive }) => ({ color: isActive && "#41b983", fontWeight: isActive && "bold" })}
              >
                شخصی
              </NavLink>
              <div>
                {drawerMenuDashboardsLinks.map((item) => (
                  <>
                    <div
                      className={`${isShowSubMenu[item.enName] && `${styles.active} `} ${styles.title}`}
                      onClick={() => subMenuHandler(item.enName)}
                      key={item.enName}
                    >
                      {item.faName}
                      <motion.button animate={isShowSubMenu[item.enName] ? { rotate: 90 } : {}}>
                        {item.icon}
                      </motion.button>
                    </div>
                    <div className={isShowSubMenu[item.enName] ? styles.showSubMenu : styles.notShowSubMenu}>
                      {item.subTitle.map((title) => (
                        <NavLink
                          to={`/dashboards/${title.url}`}
                          className={styles.subLink}
                          style={({ isActive }) => ({ color: isActive && "#41b983", fontWeight: isActive && "bold" })}
                        >
                          <span className={styles.icon}>{title.icon}</span>
                          {title.name}
                        </NavLink>
                      ))}
                    </div>
                  </>
                ))}
              </div>

              <NavLink
                to='dashboards/shop'
                className={styles.title}
                style={({ isActive }) => ({ color: isActive && "#41b983", fontWeight: isActive && "bold" })}
              >
                فروشگاه
              </NavLink>
            </div>
          </div>
        )}
      </div>

      <div className={isShowDrawerMenu.apps ? styles.drawerMenu : styles.notDrawerMenu}>
        {isShowDrawerMenu.apps && <DrawerLinks title='apps' faTitle='اپلیکیشن ها' />}
      </div>
      <div className={isShowDrawerMenu.list ? styles.drawerMenu : styles.notDrawerMenu}>
        {isShowDrawerMenu.list && <DrawerLinks title='list' faTitle='لیست ها' />}
      </div>
      <div className={isShowDrawerMenu.charts ? styles.drawerMenu : styles.notDrawerMenu}>
        {isShowDrawerMenu.charts && <DrawerLinks title='charts' faTitle='چارت ها' />}
      </div>
    </div>
  );
};

export default DrawerMenu;
