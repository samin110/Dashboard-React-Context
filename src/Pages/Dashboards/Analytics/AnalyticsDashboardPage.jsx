import React from "react";
import styles from "./analytics.module.css";
import Navbar from "../../../Components/Navbar/Navbar";
import Chart from "react-apexcharts";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/green.css";

import {
  lineChartDataAnalyticts,
  circleChartData,
  offSectioncircleChartData,
  columnChartAnalytics,
} from "../../../dummyData";

import { IoDiamondSharp, IoSettingsOutline } from "react-icons/io5";
import { HiOutlineArrowTrendingUp, HiUserPlus, HiOutlineArrowTrendingDown, HiOutlineWrench } from "react-icons/hi2";
import { HiOutlineSpeakerphone, HiOutlineLocationMarker, HiDotsVertical } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { useState } from "react";
import { TfiReload } from "react-icons/tfi";
import { RiDeleteBinLine } from "react-icons/ri";

const AnalyticsDashboardPage = () => {
  const [showNotif, setShowNotif] = useState(false);

  return (
    <div>
      <Navbar title='تجزیه و تحلیل' openTitleDrawerMenu='dashboards' />

      {/* Start ==> Content Page */}
      {/* Dived page to two section by grid layout */}
      <div className={styles.analytics_container}>
        <div className={styles.analytics_reports}>
          <div className={styles.analytics_cards}>
            <div className={styles.analytics_card}>
              <div>
                <p>تراکنش‌ها</p>{" "}
                <div>
                  <IoDiamondSharp />
                </div>
              </div>
              <p>8,637</p>
              <div>
                ۶/۴%+{" "}
                <span>
                  <HiOutlineArrowTrendingUp />
                </span>{" "}
                <span> از ماه پیش</span>
              </div>
            </div>
            <div className={styles.analytics_card}>
              <div>
                <p>مشترکین</p>{" "}
                <div style={{ background: "#ffeee5", color: "#ffa880" }}>
                  <HiUserPlus />
                </div>
              </div>
              <p>1,378</p>
              <div style={{ color: "#f83767" }}>
                2/1%-
                <span>
                  <HiOutlineArrowTrendingDown />
                </span>{" "}
                <span>رشد منفی</span>
              </div>
            </div>
            <div className={styles.analytics_card}>
              <div>
                <p>ارجاعات</p>{" "}
                <div style={{ background: "#e9f9e7", color: "#94e189" }}>
                  <HiOutlineSpeakerphone />
                </div>
              </div>
              <p>1,911</p>
              <div>
                4/2%+{" "}
                <span>
                  <HiOutlineArrowTrendingUp />
                </span>{" "}
                <span>رشد مثبت</span>
              </div>
            </div>
          </div>
          <div className={styles.analytics_income}>
            <div className={styles.analytics_chart}>
              <p>عایدی</p>
              <div>
                <div>
                  <p>این ماه</p>
                  <p>۷۵ میلیون تومان</p>
                </div>
                <div>
                  <p>ماه گذشته</p>
                  <p>۹۱ میلیون تومان</p>
                </div>
              </div>
              <div className={styles.analytics_lineChart}>
                <Chart
                  options={lineChartDataAnalyticts.options}
                  series={lineChartDataAnalyticts.series}
                  width='100%'
                  height='250px'
                />
              </div>
            </div>
            <div className={styles.analytics_goal}>
              <p>چشم انداز هدف</p>
              <div className={styles.analytics_radial}>
                <Chart
                  options={circleChartData.options}
                  series={circleChartData.series}
                  type='radialBar'
                  width='100%'
                  height='220'
                />
              </div>
              <hr />
              <div className={styles.analytics_radial_info}>
                <div>
                  <p>اتمام یافته</p>
                  <p>1,223</p>
                </div>
                <div>
                  <p>در حال انجام</p>
                  <p>467</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.analytics_off_chart}>
            <div className={styles.analytics_off}>
              <p>حراجی</p>
              <p>۷۸درصد</p>
              <div className={styles.analytics_progress}>
                <div></div>
              </div>
              <div>
                ۶/۴%+{" "}
                <span>
                  <HiOutlineArrowTrendingUp />
                </span>{" "}
                <span> از ماه پیش</span>
              </div>
              <div className={styles.analytics_off_radialChart}>
                <Chart
                  options={offSectioncircleChartData.options}
                  series={offSectioncircleChartData.series}
                  type='radialBar'
                  height='160px'
                />
              </div>
            </div>
            <div className={styles.analytics_barChart}>
              <p>منفعت</p>
              <div>
                <Chart
                  options={columnChartAnalytics.options}
                  series={columnChartAnalytics.series}
                  type='bar'
                  width='100%'
                  height='250'
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.analytics_info}>
          <div className={styles.personal_information}>
            <div>
              <div className={styles.profile}>
                <p>جمال خاشقچی</p>
                <p>شرکت تعاونی برادران</p>
                <p>خاشقچی</p>
                <p>مدیر محصول</p>
                <p>
                  {" "}
                  <span>
                    <HiOutlineLocationMarker />
                  </span>
                  <span>لس آنجلس</span>
                </p>
                <p>
                  <span>
                    <FiPhone />
                  </span>
                  <span>۰۰۱-۴۴۴-۵۱۵۶</span>
                </p>
              </div>
              <div className={styles.profileImage}>
                <img src='./assets/Images/vuero-1.svg' />
              </div>
            </div>
            <hr />
            <p>jamal@email.io</p>
          </div>
          <div className={styles.calendar}>
            <Calendar calendar={persian} locale={persian_fa} className='custom-calendar green' />
          </div>
          {/* Followers Block */}
          <div className={styles.followers}>
            <div className={styles.followers_title}>
              <p>دنبال‌کنندگان جدید</p>
              <div className={styles.followers_image}>
                <div>
                  <img src='./assets/Images/5.jpg' />
                </div>
                <div>
                  <img src='./assets/Images/7.jpg' />
                </div>
                <div>
                  <img src='./assets/Images/vuero-1.svg' />
                </div>
              </div>
            </div>
            <p>
              خبر عالی، <span>آلیس</span>, <span>جمال</span> و <span>مریم</span> شما را دنبال می‌کنند. در زمان مناسب
              حتما از پروفایل آنها بازدید کنید.
            </p>
          </div>
          {/* Notification Block */}
          <div className={styles.notification}>
            <div className={styles.notification_title}>
              <p>اعلانات</p>
              <div>
                <button type='button' onClick={() => setShowNotif(!showNotif)}>
                  <HiDotsVertical />
                </button>
                {/* Dropdown */}
                <div className={styles.dropdown_container} style={(showNotif && { display: "block" }) || {}}>
                  <div className={styles.dropdown_row}>
                    <span className={styles.dropdown_icon}>
                      <TfiReload />
                    </span>
                    <div className={styles.dropdown_title}>
                      <p>بازسازی</p>
                      <p>بارگیری مجدد ابزارک</p>
                    </div>
                  </div>
                  <div className={styles.dropdown_row}>
                    <span className={styles.dropdown_icon}>
                      <HiOutlineWrench />
                    </span>
                    <div className={styles.dropdown_title}>
                      <p>پیکربندی</p>
                      <p>پیکربندی ابزارک</p>
                    </div>
                  </div>
                  <div className={styles.dropdown_row}>
                    <span className={styles.dropdown_icon}>
                      <IoSettingsOutline />
                    </span>
                    <div className={styles.dropdown_title}>
                      <p>تنظیمات</p>
                      <p> تنظیمات ابزارک</p>
                    </div>
                  </div>
                  <hr />
                  <div className={styles.dropdown_row}>
                    <span className={styles.dropdown_icon}>
                      <RiDeleteBinLine />
                    </span>
                    <div className={styles.dropdown_title}>
                      <p>حذف</p>
                      <p>حذف از صفحه</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p>شخصی</p>
              <div>4</div>
            </div>
            <div>
              <p>تجاری</p>
              <div>9</div>
            </div>
            <div>
              <p>خانوادگی</p>
              <div>2</div>
            </div>
          </div>
        </div>
      </div>
      {/* End ==> Content Page */}
    </div>
  );
};

export default AnalyticsDashboardPage;
