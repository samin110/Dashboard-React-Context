import React, { useState } from "react";
import styles from "./humanresource.module.css";
import DropDownMenu from "./DropDownMenu";

import { BsThreeDotsVertical } from "react-icons/bs";

const User = ({ user }) => {
  const [showDropMenu, setShowDropMenu] = useState(false);
  return (
    <div className={styles.user}>
      <button className={`${styles.user_icon} btn`} type='button' onClick={() => setShowDropMenu(!showDropMenu)}>
        <BsThreeDotsVertical />
        {showDropMenu && <DropDownMenu />}
      </button>
      <div className={styles.user_info}>
        <div className={styles.user_image}>
          <img src={user.big_image} />
          <div className={styles.small_image}>
            <img src={user.small_image} />
          </div>
        </div>
        <h3>{user.name}</h3>
        <p>{user.job_field}</p>
        <button className={`btn`}>{user.status_btn}</button>
      </div>
    </div>
  );
};

export default User;
