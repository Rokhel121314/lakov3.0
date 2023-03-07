import React from "react";
import styles from "./root.module.css";
import { NavLink, Outlet } from "react-router-dom";
import ProtectedRoute from "../../hooks/ProtectedRoute";
import useLogin from "../../hooks/useLogin";

function Root() {
  const { handleLogout, persistUserData } = useLogin();
  console.log("persist", persistUserData);
  return (
    <>
      <div className={styles["root-container"]}>
        <div className={styles["brand-container"]}>
          <div className={styles["brand-name"]}>
            {persistUserData.store_name.toUpperCase()}
          </div>
          <div className={styles["sub-name"]}>POWERED BY LAKO</div>
        </div>
        <nav className={styles["nav-list"]}>
          <NavLink
            to={"/lako/stocks"}
            className={({ isActive, isPending }) => {
              return isActive
                ? styles["nav-link-active"]
                : isPending
                ? styles["nav-link-pending"]
                : styles["nav-link"];
            }}>
            <div className={styles["nav-item"]}>STOCKS</div>
          </NavLink>
          <NavLink
            to={"/lako/pos"}
            className={({ isActive, isPending }) => {
              return isActive
                ? styles["nav-link-active"]
                : isPending
                ? styles["nav-link-pending"]
                : styles["nav-link"];
            }}>
            <div className={styles["nav-item"]}>POS</div>
          </NavLink>
          <NavLink
            to={"/lako/transactions"}
            className={({ isActive, isPending }) => {
              return isActive
                ? styles["nav-link-active"]
                : isPending
                ? styles["nav-link-pending"]
                : styles["nav-link"];
            }}>
            <div className={styles["nav-item"]}>TRANSACTIONS</div>
          </NavLink>
          <NavLink
            to={"/lako/sales"}
            className={({ isActive, isPending }) => {
              return isActive
                ? styles["nav-link-active"]
                : isPending
                ? styles["nav-link-pending"]
                : styles["nav-link"];
            }}>
            <div className={styles["nav-item"]}>SALES</div>
          </NavLink>
        </nav>
        <div>
          <button onClick={handleLogout}>LOG OUT</button>
          <div>{persistUserData?.first_name}</div>
        </div>
      </div>
      <div id="root">
        <ProtectedRoute persistUserData={persistUserData}>
          <Outlet />
        </ProtectedRoute>
      </div>
    </>
  );
}

export default Root;
