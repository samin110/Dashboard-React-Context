import React, { useState } from "react";
import styles from "./notification.module.css";
import { notificationData } from "../../dummyData";

export const Notification = () => {
  return (
    <div className={styles.notification}>
      <div className={styles.notification_title}>
        <p>اعلانات</p>
        <p>مشاهده همه</p>
      </div>
      <hr />
      <div className={styles.container_notif_message}>
        {notificationData.map((user) => (
          <div>
            <div className={styles.profile_user}>
              <img src={user.image_url} />
            </div>
            <div className={styles.information_message}>
              <p>
                <span>{user.username} </span>
                {user.notification}
              </p>
              <p>{user.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
