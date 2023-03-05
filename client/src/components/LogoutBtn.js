import React from "react";
import styles from "../routes/landingroutes/layout.module.css";
import { FaUserCircle } from "react-icons/fa";

function LogoutBtn({ persistUserData, handleLogout }) {
  return (
    <>
      <div className={styles["logout-container"]}>
        <div className={styles["first-name"]}>
          {persistUserData?.first_name.toUpperCase()}
        </div>
        <FaUserCircle className={styles["user-icon"]} />
        <div className={styles["drop-down-container"]}>
          <div>SETTING</div>
          <div>SETTING</div>
          <div>SETTING</div>
          <div onClick={handleLogout}>LOG OUT</div>
        </div>
      </div>
    </>
  );
}

export default LogoutBtn;
