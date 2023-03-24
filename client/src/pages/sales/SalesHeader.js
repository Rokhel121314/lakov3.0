import React from "react";
import styles from "./sales.module.css";
import DateRangeTest from "../transactions/DateRangeTest";
import useLogin from "../../hooks/useLogin";

function SalesHeader() {
  const { persistUserData } = useLogin();
  return (
    <div className={styles["header-container"]}>
      <div
        className={
          styles["sales-header"]
        }>{`${persistUserData.store_name.toUpperCase()} SALES DATA`}</div>
      <div className={styles["date-filter-container"]}>
        <DateRangeTest />
      </div>
    </div>
  );
}

export default SalesHeader;
