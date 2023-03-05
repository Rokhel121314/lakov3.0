import React from "react";
import styles from "./layout.module.css";
import { Outlet, NavLink } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import LoginBtn from "../../components/LoginBtn";
import LogoutBtn from "../../components/LogoutBtn";

function Layout() {
  const { persistUserData, handleLogout } = useLogin();
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
            {!persistUserData ? (
              <LoginBtn />
            ) : (
              <LogoutBtn
                persistUserData={persistUserData}
                handleLogout={handleLogout}
              />
            )}
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
