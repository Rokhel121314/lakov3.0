import React from "react";
import { NavLink } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import styles from "../routes/landingroutes/layout.module.css";
import { FaUserCog } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import useToggle from "../hooks/useToggle";
import NavUserDropdownSM from "../components/NavUserDropdownSM";

function NavMenuSM() {
  const { persistUserData, handleLogout } = useLogin();
  const { value, toggle } = useToggle();
  return (
    <div className={styles["nav-container-sm"]}>
      <NavLink className={styles["navsm-item"]} to={"/"}>
        <FaUserCog className={styles["navsm-icons"]} />
        <div>HOME</div>
      </NavLink>
      <NavLink className={styles["navsm-item"]} to={"/features"}>
        <FaUserCog className={styles["navsm-icons"]} />
        <div>FEATURES</div>
      </NavLink>
      <NavLink className={styles["navsm-item"]} to={"/howtouse"}>
        <FaUserCog className={styles["navsm-icons"]} />
        <div>HOW TO USE</div>
      </NavLink>
      {!persistUserData ? (
        <NavLink className={styles["navsm-item"]} to={"/login"}>
          <FaUserCog className={styles["navsm-icons"]} /> <div>LOG IN</div>
        </NavLink>
      ) : (
        <div className={styles["navsm-item"]}>
          <FaUserCog className={styles["navsm-icons"]} />{" "}
          <div>{persistUserData?.first_name.toUpperCase()}</div>
          <RiArrowDropDownLine
            className={styles["navdropdown-icon"]}
            onClick={toggle}
          />
          {!value ? "" : <NavUserDropdownSM handleLogout={handleLogout} />}
        </div>
      )}
    </div>
  );
}

export default NavMenuSM;
