import React from "react";
import styles from "./hiring.module.css";

const JobCard = ({ card }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <img src={card.img_url} />
      </div>
      <h2 className={styles.card_title}>{card.title}</h2>
      <p className={styles.card_content}>
        موقعیت طراح تجربه کاربر برای ایجاد یک تجربه کاربری قانع کننده و دیجیتالی از طریق طراحی عالی وجود دارد ...
      </p>
      <div className={styles.card_features}>
        <div>تمام وقت</div>
        <div>حداقل یک سال</div>
        <div>سطح ارشد</div>
      </div>
      <div className={`${styles.card_btn}`}>
        <button className='btn'>درخواست</button>
        <button className='btn'>پیام‌ها</button>
      </div>
    </div>
  );
};

export default JobCard;
