import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import useToggle from "../../hooks/useToggle";
import styles from "./navbar.module.css";

function Layout() {
  const { persistUserData, handleLogout } = useLogin();
  const { value, toggle } = useToggle();

  return (
    <>
      <nav className={styles["nav-container"]}>
        <NavLink className={styles["nav-brand"]}>
          <img
            className={styles["nav-logo"]}
            src={require("../../assests/logo/lako icon.png")}
            alt=""
          />
        </NavLink>
        <div className={styles["nav-item"]}>
          <NavLink className={styles["nav-link"]} to={"/"}>
            Home
          </NavLink>
          <NavLink className={styles["nav-link"]} to={"/features"}>
            Features
          </NavLink>
          <NavLink className={styles["nav-link"]} to={"/about"}>
            About Us
          </NavLink>
          <NavLink className={styles["nav-link"]} to={"/contact"}>
            Contact Us
          </NavLink>
          <NavLink
            className={`${styles["nav-link"]} ${styles["signin-button"]}`}
            to={"/login"}>
            Sign In
          </NavLink>
        </div>
      </nav>

      {/* PUBLIC ROUTES */}
      <div id="root">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
