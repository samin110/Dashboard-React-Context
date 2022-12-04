import React, { useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import styles from "./personal.module.css";
import { RiVipCrownLine, RiArrowDownSLine } from "react-icons/ri";
import { columnChartData, personalProjects, AreaChartData, myTeamData, myTaskList } from "../../../dummyData";
import Chart from "react-apexcharts";
import { IoVideocam, IoBagCheckOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { HiOutlinePencil, HiOutlineUsers } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { CiCircleCheck } from "react-icons/ci";
import "./areachart.css";
import { useContextApp } from "../../../Context/ContextApp";
import { FiPhone, FiUser } from "react-icons/fi";

const PersonalDashboardPage = () => {
  const { isShowDropdownList, dropdownListHandler } = useContextApp();

  return (
    <div className={styles.personal_container}>
      <Navbar title='شخصی' openTitleDrawerMenu='dashboards' />
      {/* START ==> main page section */}
      <main className={styles.content}>
        {/* START ==> personal information */}
        <div className={styles.personal_info}>
          <div className={styles.personal_welcome}>
            <div className={styles.personal_image_info}>
              <img src='./assets/Images/vuero-1.svg' className={styles.personal_image_person} />
              <div>
                <img src='./assets/Images/united-states-of-america.svg' className={styles.personal_image_usa} />
              </div>
            </div>
            <div>
              <h2>خوش آمدی کاربر عزیز.</h2>
              <p>از دیدار مجدد شما خوش وقتیم</p>
            </div>
          </div>

          <div className={styles.personal_task_info}>
            <div>
              <h1>
                {" "}
                <span>3</span> مورد تسک
              </h1>
              <p>که باید امروز انجام گیرد</p>
              <a>مشاهده تسک&#8202;ها</a>
            </div>

            <div className={styles.personal_card}>
              <p>شروع کار با ابزارهای مدیریت پروژه و تیم</p>
              <span>
                <RiVipCrownLine />
              </span>
              <p>بیشتر بدانید</p>
            </div>
          </div>
        </div>

        {/* END ==> personal information */}

        {/* START ==> resport section */}

        {/* divied page to two columns (by grid)  ==> right:team-project & left:work*/}
        <div className={styles.report}>
          {/* START ===================   Team-Project section   ==========================*/}
          <div className={styles.status_team}>
            {/* START ==> Project active */}
            <div className={styles.project}>
              <div className={styles.project_header}>
                <p>پروژه های فعال</p>
                <a href='#'> مشاهده&#8202;ی همه</a>
              </div>
              <div className={styles.project_status}>
                {personalProjects.map((project) => (
                  <div key={project.title}>
                    {/* right content */}
                    <div className={styles.project_image_title}>
                      <div className={styles.project_image}>
                        <img src={project.background_Image} />
                        <div>
                          <img src={project.frameworkImage} />
                        </div>
                      </div>

                      <div className={styles.project_title}>
                        <p>{project.title}</p>
                        <p>{project.updateTime}</p>
                      </div>
                    </div>

                    {/* left content */}
                    <div className={styles.image_dot}>
                      <div className={styles.persons_images}>
                        {project.personsImages.map((image) => (
                          <div className={styles.image} key={image.url}>
                            <img src={image.url} />
                          </div>
                        ))}
                      </div>
                      <div className={styles.images_button}>
                        <button onClick={() => dropdownListHandler(project.topic)}>{project.icon}</button>
                        {/*Dropwdown Menu */}
                        {isShowDropdownList[project.topic] && ( // Tip ==> When onClick button (className="images_button") map() in entire personalProjects array and it only shows the item that is "True"
                          <div className={styles.dropdown}>
                            <div className={styles.dropdown_list}>
                              <div className={styles.dropdown_item}>
                                <span>
                                  <IoBagCheckOutline />
                                </span>
                                <div>
                                  <p>مشاهده</p>
                                  <p>مشاهده بورد پروژه</p>
                                </div>
                              </div>
                              <div className={styles.dropdown_item}>
                                <span>
                                  <HiOutlinePencil />
                                </span>
                                <div>
                                  <p>ویرایش</p>
                                  <p>ویرایش پروژه</p>
                                </div>
                              </div>
                              <hr />
                              <div className={styles.dropdown_item}>
                                <span>
                                  <CiCircleCheck />
                                </span>
                                <div>
                                  <p>تسک ها</p>
                                  <p>مشاهده کارهای معلق</p>
                                </div>
                              </div>
                              <div className={styles.dropdown_item}>
                                <span>
                                  <HiOutlineUsers />
                                </span>
                                <div>
                                  <p>تیم</p>
                                  <p>ملاقات با تیم پروژ</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/*Dropwdown Menu */}
                  </div>
                ))}
              </div>
            </div>
            {/* END ==> Project active */}

            {/* START ==> Area Chart */}
            <div className={styles.chart_for_work}>
              <div className={styles.project_header}>
                <p>وضعیت امور</p>
                <a href='#'>گزارشات</a>
              </div>
              <div>
                <Chart
                  options={AreaChartData.options}
                  series={AreaChartData.options.series}
                  type='area'
                  width='100%'
                  height='300'
                />
              </div>
            </div>
            {/* END ==> Area Chart */}

            {/* START ==> Column Chart */}
            <div className={styles.chrat_bar}>
              <div className={styles.project_header}>
                <p>کارایی تیم</p>
                <a href='#'>بروزرسانی&#8202;ها</a>
              </div>
              <div>
                <Chart
                  options={columnChartData.options}
                  series={columnChartData.series}
                  type='bar'
                  width='100%'
                  height='250'
                />
              </div>
            </div>
            {/* END ==> Column Chart */}
          </div>
          {/* END ===================   Team-Project section   ==========================*/}

          {/* START ===================   work section   ==========================*/}
          <div className={styles.status_work}>
            {/* START ==> my team div */}
            <div className={styles.my_team}>
              <div className={styles.project_header}>
                <p>تیم من</p>
                <a href='#'> مشاهده&#8202;ی همه</a>
              </div>
              <div className={styles.my_team_persons}>
                {myTeamData.map((item) => (
                  <div className={styles.my_team_person} key={item.name}>
                    <div>
                      <div className={styles.profile_image}>
                        {(item.image && <img className={styles.image_team} src={item.image} />) || (
                          <div className={styles.my_team_shortName} style={item.style}>
                            {item.shortName}
                          </div>
                        )}
                        {/* Tooltip */}
                        <div className={styles.tooltip}>
                          <div className={styles.tooltip_content}>
                            <div className={styles.tooltip_content_images}>
                              {(item.image && <img src={item.image} />) || (
                                <div className={styles.my_team_shortName} style={item.style}>
                                  {item.shortName}
                                </div>
                              )}
                              <div className={styles.tooltip_image_usa}>
                                <img src='./assets/Images/united-states-of-america.svg' />
                              </div>
                            </div>
                            <div className={styles.tooltip_content_text}>
                              <div>
                                <p>نقی</p>
                                <p>اردبیل،مغان</p>
                              </div>
                              <p>طراح رابط کاربری و تجربه کاربری</p>
                              <p>متنی مختصر در مورد کاربر و خلاصه ای از بیوگرافی او.</p>
                            </div>
                          </div>
                          <div className={styles.tooltip_icons}>
                            <button>
                              <FiPhone />
                            </button>
                            <button>
                              <HiOutlineEnvelope />
                            </button>
                            <button>
                              <FiUser />
                            </button>
                          </div>
                        </div>
                        {/* Tooltip */}
                      </div>
                      <div className={styles.project_title}>
                        <p style={{ fontSize: "0.8rem" }}>{item.name}</p>
                        <p style={{ fontSize: "0.75rem" }}>{item.jobTitle}</p>
                      </div>
                    </div>
                    <div className={styles.my_team_icons}>
                      <button>
                        <FaPhone />
                      </button>
                      <button style={{ fontSize: "1rem", marginRight: "0.2rem" }}>
                        <IoVideocam />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* END ==> my team div */}

            {/* START ==> today task */}
            <div className={styles.today_task}>
              <div className={styles.project_header}>
                <p>وظایف امروز</p>
                <a href='#'> مشاهده&#8202;ی همه</a>
              </div>
              {myTaskList.map((task) => (
                <div className={styles.today_task_list} key={task.taskTitle}>
                  <div>
                    <input type='checkbox' id='first-task' />
                  </div>
                  <div className={styles.project_title}>
                    <p style={{ fontSize: "0.8rem" }}>{task.taskTitle}</p>
                    <p style={{ fontSize: "0.78rem" }}>{task.taskSubject}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* END ==> today task */}

            {/* START ==> permium version card */}
            <div className={styles.card_permium_version}>
              <img src='./assets/Images/chart-guy.78d9bd2b.svg' />
              <div>
                <p>نسخه‌ی پرمیوم</p>
                <p>در نسخه‌ی پرمیوم ابزار و ویژگی‌های بیشتری در دسترس است</p>
                <button>نسخه‌ی پرمیوم</button>
              </div>
            </div>
            {/* END ==> permium version card */}
          </div>
          {/* END ==================   Work section  =========================*/}
        </div>
        {/* END ==> resport section */}
      </main>
      {/* END ==> main page section  */}
    </div>
  );
};

export default PersonalDashboardPage;
