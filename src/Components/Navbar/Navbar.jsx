import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { HiSun } from "react-icons/hi";
import { TbChevronRight } from "react-icons/tb";
import { AiOutlineAppstore } from "react-icons/ai";
import { FiBell } from "react-icons/fi";
import styles from "./navbar.module.css";
import { useContextApp } from "../../Context/ContextApp";
import { Notification } from "../Notification/Notification";

const Navbar = ({ title, openTitleDrawerMenu }) => {
  const { isShowDrawerMenu, drawerMenuHandler, showNotificationHandler, isShowNotification } = useContextApp();

  return (
    <div className={styles.navbar}>
      <div className={styles.menu_button}>
        <div>
          {((isShowDrawerMenu.dashboards ||
            isShowDrawerMenu.apps ||
            isShowDrawerMenu.list ||
            isShowDrawerMenu.charts) && (
            <button type='button' className={styles.navbar_icon} onClick={() => drawerMenuHandler()}>
              <TbChevronRight />
            </button>
          )) || (
            <button type='button' className={styles.navbar_icon} onClick={() => drawerMenuHandler(openTitleDrawerMenu)}>
              <RiMenu3Fill />
            </button>
          )}
        </div>
        <span>{title}</span>
      </div>
      <div className={styles.tools}>
        <button className={styles.navbar_icon}>
          <HiSun />
        </button>
        <div className={styles.iran_img}>
          <img src='./assets/Images/iran.svg' style={{ width: "1.5rem" }} />
        </div>
        <button className={styles.navbar_icon} type='button' onClick={() => showNotificationHandler()}>
          <div>
            <div className={styles.circle_on_top_of_bell}></div>
            <FiBell />
          </div>
          {/* Display notification */}
          {isShowNotification && <Notification />}
        </button>
        <button className={styles.navbar_icon}>
          <AiOutlineAppstore />{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
