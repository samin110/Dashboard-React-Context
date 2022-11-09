import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import styles from "./personal.module.css";

const PersonalDashboardPage = () => {
  return (
    <div className={styles.personal_container}>
      <Navbar title='شخصی' />
      <main className={styles.content}>
        <div className={styles.profile_info}>
          <div className={styles.profile_welcome}>
            <div className={styles.profile_image_info}>
              <img src='./assets/Images/vuero-1.svg' style={{ width: "7rem" }} />
              <div>
                <img src='./assets/Images/united-states-of-america.svg' style={{ width: "2rem" }} />
              </div>
            </div>
            <div>
              <h2>خوش آمدی کاربر عزیز.</h2>
              <p>از دیدار مجدد شما خوش وقتیم</p>
            </div>
          </div>

          <div className={styles.profile_task_info}>
            <h1> 3 مورد تسک</h1>
            <p>که باید امروز انجام گیرد</p>
            <a>مشاهده تسک&#8202;ها</a>

            <div className={styles.profile_card}>
              <p>شروع کار با ابزارهای مدیریت پروژه و تیم</p>
              <p>بیشتر بدانید</p>
            </div>
          </div>
        </div>

        <div className={styles.report}>
          <div className={styles.status_team}>
            <div className={styles.project}></div>
            <div className={styles.chart_for_work}></div>
            <div className={styles.chrat_bar}></div>
          </div>

          <div className={styles.status_work}>
            <div className={styles.myTeam}></div>
            <div className={styles.today_task}></div>
            <div className={styles.permium_version}></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PersonalDashboardPage;
