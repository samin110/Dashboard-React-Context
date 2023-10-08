// Components & Library
import React, { useState, useEffect } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import styles from "./humanresource.module.css";
import { hrTaskData, recentRookiesUsersData } from "../../../dummyData";
import User from "./User";
// **** Icons
import { AiOutlinePlus } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Task from "./Task";

const HRDashboardPage = () => {
  const [tab, setTab] = useState(false);

  return (
    <div>
      <Navbar title='داشبورد منابع انسانی' openTitleDrawerMenu='dashboards' />
      <div className={styles.container}>
        <div className={styles.right_column}>
          <div className={styles.header}>
            <div className={styles.person_info}>
              <div className={styles.person_img}>
                <img src='./assets/Images/vuero-1.svg' alt='' />
              </div>
              <h1>خوش آمدی،</h1>
              <h1>جمال.</h1>
            </div>
            <div className={styles.new_users}>
              <h3 className={styles.title}>کاربران تازه وارد</h3>
              <p className={styles.content}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              </p>
              <div className={styles.new_users_images}>
                <div className={styles.new_user_image}>
                  <img src='./assets/Images/13.jpg' />
                </div>
                <div className={styles.new_user_image}>
                  <img src='./assets/Images/32.jpg' />
                </div>
                <div className={styles.new_user_image}>
                  <img src='./assets/Images/9.jpg' />
                </div>
                <div className={styles.add_new_user}>
                  <AiOutlinePlus />
                </div>
              </div>
            </div>
            <div className={styles.job_positions}>
              <h3 className={styles.title}>موقعیت‌های شغلی</h3>
              <p className={styles.content}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              </p>
              <button className='btn'>مدیریت شغل</button>
            </div>
          </div>
          <div className={styles.job_settings}>
            <h3>تنظیمات مرتبط با موقعیت‌های شغلی</h3>
            <div className={styles.setting_buttons}>
              <button className={`btn ${styles.setting_btn}`}>همه</button>
              <button className={`btn ${styles.setting_btn}`}>کاندیداها</button>
              <button className={`btn ${styles.setting_btn}`}>شرکت‌ها</button>
            </div>
          </div>
          <div className={styles.detail}>
            <div className={styles.text}>
              <h3>جزئیات بیشتر</h3>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم
                متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              </p>
              <a href='#'>بیشتر بدانید</a>
            </div>
            <div className={styles.notification}>
              <div className={`${styles.notif_title} ${styles.template}`}>
                <p>نوع</p>
                <p>تعداد</p>
                <p>وضعیت</p>
                <p>اقدامات</p>
              </div>
              <div className={`${styles.message} ${styles.template}`}>
                <div>
                  <div className={styles.type_icon}>
                    <GoMail />
                  </div>
                  <div className={styles.type}>
                    <p>پیام‌ها</p>
                    <p>اینباکس</p>
                  </div>
                </div>
                <div className={styles.quantity}>5</div>
                <div className={styles.status_new}>جدید</div>
                <div>
                  <a href='#'>باز</a>
                </div>
              </div>
              <div className={`${styles.tasks} ${styles.template}`}>
                <div>
                  <div className={styles.type_icon}>
                    <HiOutlineCheckCircle />
                  </div>
                  <div className={styles.type}>
                    <p>تسک‌ها</p>
                    <p>تسک‌های در انتظار تأیید</p>
                  </div>
                </div>
                <div className={styles.quantity}>3</div>
                <div className={styles.status_expectation}>درانتظار</div>
                <div>
                  <a href='#'>باز</a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.recent_rookies}>
            <div className={styles.recent_rookies_title}>
              <h3>اخیرا عضو شده</h3>
              <a href='#' className={`link`}>
                مشاهده‌ی همه
              </a>
            </div>
            <div className={styles.users}>
              {recentRookiesUsersData.map((user, index) => (
                <User user={user} key={index} />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.left_column}>
          {/* START ==>  Search Box  */}
          <div className={styles.search_box}>
            <div className={styles.inner_box}>
              <input type='text' placeholder='جستجو...' />
              <button className={`${styles.search_icon} btn`}>
                <FiSearch />
              </button>
            </div>
          </div>
          {/* END ==>  Search Box  */}

          {/* START ==> Tasks section */}
          <div className={styles.tasks_section}>
            <div className={styles.tasks_section_header}>
              <h3>تسک‌ها</h3>
              <div className={styles.tab_menu}>
                {/* {tab && componets1 || component2} */}
                <button className={`${tab && styles.active} btn`} onClick={() => setTab(true)}>
                  همه
                </button>
                <button className={`${!tab && styles.active} btn`} onClick={() => setTab(false)}>
                  مال من
                </button>
              </div>
            </div>
            <div>
              {hrTaskData.map(
                (task, index) =>
                  (tab && <Task task={task} key={index} tab={tab} animation={tab ? "animation" : ""} />) || (
                    <Task task={task} key={index} tab={tab} animation={!tab ? "animation" : ""} />
                  )
              )}
            </div>
          </div>
          {/* END ==> Tasks section */}
        </div>
      </div>
    </div>
  );
};

export default HRDashboardPage;
