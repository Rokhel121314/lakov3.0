import React from "react";
import styles from "./layout.module.css";
import { Outlet, NavLink } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import LoginBtn from "../../components/LoginBtn";
import DropDown from "../../components/DropDown.js";
import { CgMenuLeft, CgClose } from "react-icons/cg";
import useToggle from "../../hooks/useToggle";
import NavMenuSM from "../../components/NavMenuSM";

function Layout() {
  const { persistUserData, handleLogout } = useLogin();
  const { value, toggle } = useToggle();

  return (
    <>
      <div className={styles["nav-container"]}>
        {/* LOGO/BRAND */}
        <NavLink to={"/"} className={styles["nav-brand"]}>
          <img
            className={styles["nav-logo"]}
            src={require("../../assests/logo/logo.png")}
            alt="logo"
          />
        </NavLink>
        {value ? (
          <CgClose className={styles["navmenu-icon"]} onClick={toggle} />
        ) : (
          <CgMenuLeft className={styles["navmenu-icon"]} onClick={toggle} />
        )}

        {value ? <NavMenuSM /> : ""}
        {/* NAV LINKS */}
        <div className={styles["nav-items"]}>
          {/* HOME */}
          <NavLink to={"/"} className={styles["nav-link"]}>
            HOME
          </NavLink>

          {/* FEATURES */}
          <NavLink to={"/features"} className={styles["nav-link"]}>
            FEATURES
          </NavLink>

          {/* HOW TO USE */}
          <NavLink to={"/howtouse"} className={styles["nav-link"]}>
            HOW TO USE
          </NavLink>

          {/* LOG IN/LOGOUT DROPDOWN */}
          <div className={styles["nav-link"]}>
            {!persistUserData ? (
              <LoginBtn />
            ) : (
              <DropDown
                persistUserData={persistUserData}
                handleLogout={handleLogout}
              />
            )}
          </div>
        </div>
      </div>

      {/* PUBLIC ROUTES */}
      <div id="root">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
