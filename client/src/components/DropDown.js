import React from "react";
import styles from "../routes/landingroutes/layout.module.css";
import {
  RiArrowDropDownLine,
  RiUserSettingsLine,
  RiLogoutBoxRLine,
} from "react-icons/ri";
import { IoStorefrontOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import useClickOutside from "../hooks/useClickOutSide";

function DropDown({ persistUserData, handleLogout }) {
  const { isOpen, toggleIsOpen, ref } = useClickOutside(false);

  return (
    <>
      <div className={styles["logout-container"]} ref={ref}>
        <div className={styles["first-name"]}>
          {persistUserData?.first_name.toUpperCase()}
        </div>
        <RiArrowDropDownLine
          className={
            !isOpen ? styles["user-icon-close"] : styles["user-icon-open"]
          }
          onClick={toggleIsOpen}
        />
        <div
          className={
            isOpen
              ? styles["drop-down-container"]
              : styles["drop-down-container-hide"]
          }>
          <NavLink className={styles["dropdown-list"]}>
            <RiUserSettingsLine className={styles["dropdown-icon"]} />
            <div className={styles["dropdown-text"]}>My Account</div>
          </NavLink>
          <NavLink className={styles["dropdown-list"]} to={"/lako/sales"}>
            <IoStorefrontOutline className={styles["dropdown-icon"]} />
            <div className={styles["dropdown-text"]}>My Lako</div>
          </NavLink>
          <div className={styles["dropdown-list"]} onClick={handleLogout}>
            <RiLogoutBoxRLine className={styles["dropdown-icon"]} />
            <div className={styles["dropdown-text"]}>Sign Out</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DropDown;
