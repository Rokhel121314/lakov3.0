import React, { useEffect } from "react";
import styles from "./root.module.css";
import { NavLink, Outlet } from "react-router-dom";
import ProtectedRoute from "../../hooks/ProtectedRoute";
import useLogin from "../../hooks/useLogin";
import { readAllTransactions } from "../../redux/transactionSlice";
import { readAllProduct } from "../../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

function Root() {
  const { handleLogout, persistUserData } = useLogin();

  const { productData } = useSelector((state) => state.product);
  const { addedTransaction } = useSelector((state) => state.transaction);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readAllProduct(persistUserData.user_id));
    dispatch(readAllTransactions(persistUserData.user_id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productData, addedTransaction]);
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
