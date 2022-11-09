import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { HiSun } from "react-icons/hi";
import { TbChevronRight } from "react-icons/tb";
import { AiOutlineAppstore } from "react-icons/ai";
import { FiBell } from "react-icons/fi";
import styles from "./navbar.module.css";
import { useContextApp } from "../../Context/ContextApp";

const Navbar = ({ title }) => {
  const { isShowDrawerMenu, drawerMenuHandler } = useContextApp();

  return (
    <div className={styles.navbar}>
      <div className={styles.menu_button}>
        <button className={styles.navbar_icon} onClick={() => drawerMenuHandler()}>
          {((isShowDrawerMenu.dashboards ||
            isShowDrawerMenu.apps ||
            isShowDrawerMenu.list ||
            isShowDrawerMenu.charts) && <TbChevronRight />) || <RiMenu3Fill />}
        </button>
        <span>{title}</span>
      </div>
      <div className={styles.tools}>
        <button className={styles.navbar_icon}>
          <HiSun />
        </button>
        <div className={styles.iran_img}>
          <img src='./assets/Images/iran.svg' style={{ width: "1.5rem" }} />
        </div>
        <button className={styles.navbar_icon}>
          <div className={styles.circle_on_top_of_bell}></div>
          <FiBell />
        </button>
        <button className={styles.navbar_icon}>
          <AiOutlineAppstore />{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
