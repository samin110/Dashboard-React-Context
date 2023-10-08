import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./humanresource.module.css";

const Task = React.memo(({ task, tab, animation }) => {
  console.log("tasks");

  return (
    <div className={`${styles.task_item} ${animation}`}>
      <div className={styles.task_checkbox}>
        <input type='checkbox' />
        <div className={styles.task_subject}>
          <p className={styles.task_title}>{task.subject}</p>
          <p className={styles.task_time}>{task.time}</p>
        </div>
      </div>
      <div className={styles.status_expectation}>در انتظار</div>
    </div>
  );
});

export default Task;
