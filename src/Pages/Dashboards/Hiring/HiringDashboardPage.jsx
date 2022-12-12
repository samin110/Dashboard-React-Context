import React, { useState } from "react";
import MultiSelect from "../../../Components/MultiSelect/MultiSelect";
import Navbar from "../../../Components/Navbar/Navbar";
import styles from "./hiring.module.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiBriefcase, FiDollarSign } from "react-icons/fi";
import { jobFeatureData, jobPositionsCardsData } from "../../../dummyData";
import JobFeatue from "./JobFeatue";
import JobCard from "./JobCard";

const HiringDashboardPage = () => {
  return (
    <div>
      <Navbar title='موقعیت های شغلی' openTitleDrawerMenu='dashboards' />
      <div className={styles.hiring_container}>
        {/* START ==> SearchBar */}
        <form action='' className={styles.search_bar}>
          <div className={styles.field}>
            <MultiSelect />
          </div>
          <div className={`${styles.field} ${styles.padding_field}`}>
            <p className={styles.field_icon}>
              <HiOutlineLocationMarker />
            </p>
            <p className={styles.field_title}>لس آنجلس</p>
          </div>
          <div className={`${styles.field} ${styles.padding_field}`}>
            <p className={styles.field_icon}>
              <FiBriefcase />
            </p>
            <input type='text' placeholder='نوع شغل' className={styles.input_field} />
          </div>
          <div className={`${styles.field} ${styles.padding_field}`}>
            <p className={styles.field_icon}>
              <FiDollarSign />
            </p>
            <input type='text' placeholder='بازه حقوق' className={styles.input_field} />
          </div>
          <button type='button' className={styles.btn_search}>
            جستجو
          </button>
        </form>
        {/* END ==> SearchBar */}

        {/* START ==> Search result section */}
        <div className={styles.search_result_container}>
          <div className={styles.job_filters}>
            <div className={styles.job_notification}>
              <p className={styles.job_notification_title}>ایجاد اعلان موقعیت شغلی</p>
              <p className={styles.job_notification_content}>
                با ایجاد اعلان، موقعیت‌های شغلی جدید به شما ارسال خواهد شد و هیچ فرصت استخدامی را از دست نخواهید داد.
              </p>
              <div className={styles.notifiction_input_container}>
                <p>
                  <FiBriefcase />
                </p>
                <input type='text' placeholder='کلمات کلیدی' />
              </div>
              <button className={`${styles.job_notification_btn} btn`}>ایجاد اعلان</button>
            </div>

            {jobFeatureData.map((item) => (
              <JobFeatue item={item} key={item.title} />
            ))}
          </div>

          <div className={styles.job_positions}>
            <div className={styles.job_positions_title}>
              <h2>نمایش ۴۶ موقعیت شغلی</h2>
              <p>مشاهده همه</p>
            </div>
            <div className={styles.cards}>
              {jobPositionsCardsData.map((card) => (
                <JobCard card={card} key={card.img_url} />
              ))}
            </div>
          </div>
        </div>
        {/* END ==> Search result section */}
      </div>
    </div>
  );
};

export default HiringDashboardPage;
