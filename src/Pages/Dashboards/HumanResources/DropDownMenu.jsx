import React from "react";
import styles from "./humanresource.module.css";

import { FiMessageSquare } from "react-icons/fi";
import { TfiShare } from "react-icons/tfi";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbLicense } from "react-icons/tb";

const DropDownMenu = () => {
  return (
    <div className={styles.dropdownMenu}>
      <div className={styles.row}>
        <div className={styles.row_icon}>
          <TbLicense />
        </div>
        <div>
          <p>مجوزها</p>
          <p>ویرایش مجوزها</p>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.row_icon}>
          <FiMessageSquare />
        </div>
        <div>
          <p>پیام ها</p>
          <p>ارسال یک پیام</p>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.row_icon}>
          <TfiShare />
        </div>
        <div>
          <p>اشتراک گذاری</p>
          <p>اشتراک گذاری این پروفایل</p>
        </div>
      </div>

      <hr />

      <div className={styles.row}>
        <div className={styles.row_icon}>
          <RiDeleteBinLine />
        </div>
        <div>
          <p>حذف</p>
          <p>حذف از شبکه</p>
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;
