import React, { useEffect } from "react";
import styles from "./root.module.css";
import { NavLink, Outlet } from "react-router-dom";
import ProtectedRoute from "../../hooks/ProtectedRoute";
import useLogin from "../../hooks/useLogin";
import { readAllTransactions } from "../../redux/transactionSlice";
import { readAllProduct } from "../../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaBoxes, FaExchangeAlt, FaUserCircle } from "react-icons/fa";
import { MdPointOfSale } from "react-icons/md";
import { SlGraph } from "react-icons/sl";
import { RiArrowDropDownLine, RiLogoutBoxRLine } from "react-icons/ri";
import useToUpperCase from "../../hooks/useToUpperCase";
import useClickOutside from "../../hooks/useClickOutSide";

function Root() {
  const { handleLogout, persistUserData } = useLogin();

  const { productData } = useSelector((state) => state.product);
  const { addedTransaction } = useSelector((state) => state.transaction);

  const dispatch = useDispatch();

  const { toCapitalizedFirstWord } = useToUpperCase();
  const first_name = toCapitalizedFirstWord(persistUserData.first_name);

  const { isOpen, toggleIsOpen, ref } = useClickOutside();

  useEffect(() => {
    dispatch(readAllProduct(persistUserData.user_id));
    dispatch(readAllTransactions(persistUserData.user_id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productData, addedTransaction]);
  return (
    <>
      <div className={styles["root-container"]}>
        <div className={styles["brand-container"]}>
          <img
            className={styles["brand-logo"]}
            src={persistUserData.store_logo}
            alt="logo"
          />
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
            <div className={styles["nav-item"]}>
              <FaBoxes />
              <div className={styles["nav-item-name"]}>STOCKS</div>
            </div>
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
            <div className={styles["nav-item"]}>
              <MdPointOfSale />
              <div className={styles["nav-item-name"]}>POS</div>
            </div>
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
            <div className={styles["nav-item"]}>
              <FaExchangeAlt className={styles["nav-icon"]} />
              <div className={styles["nav-item-name"]}>TRANSACTIONS</div>
            </div>
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
            <div className={styles["nav-item"]}>
              <SlGraph />
              <div className={styles["nav-item-name"]}>SALES</div>
            </div>
          </NavLink>
        </nav>
        <div className={styles["nav-footer"]} ref={ref}>
          <button
            className={
              !isOpen
                ? `${styles["user-logout-hide"]}`
                : `${styles["user-logout"]}`
            }
            onClick={handleLogout}>
            LOG OUT
            <RiLogoutBoxRLine className={styles["logout-icon"]} />
          </button>
          <div className={styles["user-footer"]}>
            <FaUserCircle className={styles["user-icon"]} />
            <div className={styles["user-name"]}>{first_name}</div>
            <button className={styles["user-button"]}>
              <RiArrowDropDownLine
                className={
                  !isOpen
                    ? `${styles["drop-icon"]}`
                    : `${styles["drop-icon-rotate"]}`
                }
                onClick={toggleIsOpen}
              />
            </button>
          </div>
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
