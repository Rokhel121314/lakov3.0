import React, { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import useToggle from "../../hooks/useToggle";
import useToUpperCase from "../../hooks/useToUpperCase";
import styles from "./navbar.module.css";
import { GrClose, GrMenu } from "react-icons/gr";

function Layout() {
  const { persistUserData } = useLogin();
  const { value, toggle, toggleFalseOnly, toggleTrueOnly } = useToggle();
  const [width, setWidth] = useState(window.innerWidth);
  const { toCapitalizedFirstWord } = useToUpperCase();

  function screenWidth() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", screenWidth);
    if (width > 768) {
      toggleFalseOnly();
    } else {
      toggleTrueOnly();
    }
    return () => {
      window.removeEventListener("resize", screenWidth);
    };
    // eslint-disable-next-line
  }, [width]);

  return (
    <>
      {/* navbar for window mode */}
      <nav className={styles["nav-container"]}>
        <div>
          <NavLink className={styles["nav-brand"]} to={"/"}>
            <img
              className={styles["nav-logo"]}
              src={require("../../assests/logo/lako icon.png")}
              alt=""
            />
          </NavLink>
        </div>

        <div className={styles["nav-item"]}>
          <NavLink className={styles["nav-link"]} to={"/"}>
            Home
          </NavLink>
          <NavLink
            className={styles["nav-link"]}
            //  to={"/features"}
          >
            Features
          </NavLink>
          <NavLink
            className={styles["nav-link"]}
            // to={"/about"}
          >
            About Us
          </NavLink>
          <NavLink
            className={styles["nav-link"]}
            // to={"/contact"}
          >
            Contact Us
          </NavLink>
          <NavLink
            className={`${styles["nav-link"]} ${styles["signin-button"]}`}
            to={"/login"}>
            {persistUserData
              ? `Hi, ${toCapitalizedFirstWord(persistUserData.first_name)}!`
              : "Sign In"}
          </NavLink>
        </div>
      </nav>

      {/* navigation for mobile view */}
      <nav
        className={
          !value
            ? `${styles["sm-navbar-container"]}`
            : `${styles["sm-navbar-container-hidden"]}`
        }>
        <div className={`${styles["smnav-brand"]}`}>
          <NavLink to={"/"}>
            <img
              className={styles["smnav-logo"]}
              src={require("../../assests/logo/lako icon.png")}
              alt=""
            />
          </NavLink>
          <button className={styles["smnav-xbutton"]} onClick={toggle}>
            {!value ? (
              <GrClose className="close-icon" />
            ) : (
              <GrMenu className="menu-icon" />
            )}
          </button>
        </div>
        <div
          className={
            !value
              ? `${styles["smnav-items"]}`
              : `${styles["smnav-items-hidden"]}`
          }>
          <NavLink className={styles["smnav-link"]} to={"/"} onClick={toggle}>
            Home
          </NavLink>
          <NavLink
            className={styles["smnav-link"]}
            // to={"/features"}
            onClick={toggle}>
            Features
          </NavLink>
          <NavLink
            className={styles["smnav-link"]}
            // to={"/about"}
            onClick={toggle}>
            About Us
          </NavLink>
          <NavLink
            className={styles["smnav-link"]}
            // to={"/contact"}
            onClick={toggle}>
            Contact Us
          </NavLink>
        </div>
        <div
          className={
            !value
              ? `${styles["smnav-footer"]}`
              : `${styles["smnav-footer-hidden"]}`
          }>
          <div className={styles["sm-signup-text"]}>Dont have an account?</div>
          <div className={styles["smnav-signup-link"]}>
            Sign up here{" "}
            <NavLink
              className={styles["register-link"]}
              to={"/register"}
              onClick={toggle}>
              REGISTER
            </NavLink>
          </div>
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
