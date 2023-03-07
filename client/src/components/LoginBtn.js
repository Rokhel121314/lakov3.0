import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../routes/landingroutes/layout.module.css";

function LoginBtn() {
  return (
    <NavLink to={"/login"}>
      <button className={styles["login-btn"]}>LOG IN</button>
    </NavLink>
  );
}

export default LoginBtn;
