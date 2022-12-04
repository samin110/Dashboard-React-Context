import React from "react";
import styles from "./userprofile.module.css";
import { GrAppsRounded } from "react-icons/gr";
import { SlSettings } from "react-icons/sl";
import { HiOutlineUserCircle, HiOutlineUsers } from "react-icons/hi";
import { IoExitOutline } from "react-icons/io5";

const UserProfile = () => {
  return (
    <div className={styles.container_profile_info}>
      <div className={styles.profile_header}>
        <img src='./assets/Images/vuero-1.svg' />
        <div className={styles.info}>
          <p>جمال خاشقچی</p>
          <p>مدیر محصول</p>
        </div>
      </div>
      <div className={styles.profile_items}>
        <div>
          <span className={styles.item_icon}>
            <HiOutlineUserCircle />
          </span>
          <div className={styles.item_title}>
            <p>پروفایل</p>
            <p>مشاهده و ویرایش پروفایل خود</p>
          </div>
        </div>
        <hr />
        <div>
          <span className={styles.item_icon}>
            <GrAppsRounded />
          </span>
          <div className={styles.item_title}>
            <p>پروژه&#8202;ها</p>
            <p>همه&#8202;ی پروژه&#8202;های من</p>
          </div>
        </div>
        <div>
          <span className={styles.item_icon}>
            <HiOutlineUsers />
          </span>
          <div className={styles.item_title}>
            <p>تیم</p>
            <p>مدیریت تیم خود</p>
          </div>
        </div>
        <hr />
        <div>
          <span className={styles.item_icon}>
            <SlSettings />
          </span>
          <div className={styles.item_title}>
            <p>تنظیمات</p>
            <p>تنظیمات حساب کاربری</p>
          </div>
        </div>
        <hr />
      </div>
      <div className={styles.exit_account}>
        <button>
          <span>
            <IoExitOutline />
          </span>
          <span>خروج از حساب کاربری</span>
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
