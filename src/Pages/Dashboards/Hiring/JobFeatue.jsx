import React from "react";
import styles from "./hiring.module.css";

const JobFeatue = ({ item }) => {
  return (
    <div className={styles.job_features}>
      <p>{item.title}</p>

      {item.features.map((feature, index) => (
        <div className={styles.job_features_row} key={index}>
          <div className={styles.job_feature_checkbox}>
            <input type='checkbox' id={feature.subject} />
            <label htmlFor={feature.subject}>{feature.subject}</label>
          </div>
          <div className={styles.quantity}>{feature.quantity}</div>
        </div>
      ))}
    </div>
  );
};

export default JobFeatue;
