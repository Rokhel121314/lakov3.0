import React from "react";
import styles from "./layout.module.css";
import { Outlet, NavLink } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className={styles["nav-container"]}>
        <NavLink to={"/"} className={styles["nav-brand"]}>
          <img
            className={styles["nav-logo"]}
            src={require("../../assests/logo/logo.png")}
            alt="logo"
          />
        </NavLink>
        <div className={styles["nav-items"]}>
          <NavLink to={"/"} className={styles["nav-link"]}>
            HOME
          </NavLink>
          <NavLink to={"/features"} className={styles["nav-link"]}>
            FEATURES
          </NavLink>
          <NavLink to={"/howtouse"} className={styles["nav-link"]}>
            HOW TO USE
          </NavLink>
          <NavLink to={"/login"} className={styles["nav-link"]}>
            LOG IN
          </NavLink>
        </div>
      </div>
      <div id="root">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
