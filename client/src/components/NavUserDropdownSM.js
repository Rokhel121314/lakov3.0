import React from "react";
import styles from "../routes/landingroutes/layout.module.css";
import { FaUserCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function NavUserDropdownSM({ handleLogout }) {
  return (
    <div className={styles["navusersm-container"]}>
      <NavLink className={styles["navusersm-list"]} to={"/"}>
        <FaUserCog className={styles["navusersm-list-icon"]} />
        <div className={styles["navusersm-list-text"]}>My Acount</div>
      </NavLink>
      <NavLink className={styles["navusersm-list"]} to={"/lako/stocks"}>
        <FaUserCog className={styles["navusersm-list-icon"]} />
        <div className={styles["navusersm-list-text"]}>My LAKO</div>
      </NavLink>
      <div className={styles["navusersm-list"]}>
        <FaUserCog className={styles["navusersm-list-icon"]} />
        <div className={styles["navusersm-list-text"]} onClick={handleLogout}>
          Log out
        </div>
      </div>
    </div>
  );
}

export default NavUserDropdownSM;
