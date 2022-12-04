import React from "react";
import styles from "./mobilemenu.module.css";
import { FiBell } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { useContextApp } from "../../Context/ContextApp";
import { motion } from "framer-motion";
import { useState } from "react";
import { Notification } from "../Notification/Notification";
import UserProfile from "../UserProfile/UserProfile";

const MobileMenu = () => {
  const {
    isShowMobileSidebar,
    mobileSidebarHandler,
    isShowProfile,
    isShowNotification,
    showNotificationHandler,
    showProfileHandler,
  } = useContextApp();

  return (
    <div className={styles.wrapper}>
      <motion.button
        whileTap={{ scale: 0.8 }}
        type='button'
        className={styles.burger_menu}
        onClick={() => mobileSidebarHandler()}
      >
        {(isShowMobileSidebar && <VscChromeClose />) || <AiOutlineMenu />}
      </motion.button>
      <div className={styles.logo}>
        <img src='./assets/Images/favicon.svg' />
      </div>
      <div className={styles.profile}>
        <div className={styles.profile_bell}>
          <div>
            <button onClick={() => showNotificationHandler()}>
              <FiBell />
            </button>
            <div className={styles.circle_on_top_of_bell}></div>
          </div>

          {/* Display notification */}
          {isShowNotification && <Notification />}
        </div>
        <div className={styles.profile_image}>
          <button type='button' onClick={() => showProfileHandler()}>
            <img src='./assets/Images/vuero-1.svg' />
          </button>
          {/* Display user profile */}
          {isShowProfile && <UserProfile />}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
