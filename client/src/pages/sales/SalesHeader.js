import React from "react";
import styles from "./sales.module.css";
import DateRangeTest from "../transactions/DateRangeTest";

function SalesHeader() {
  return (
    <div className={styles["header-container"]}>
      <div className={styles["sales-header"]}>LAKO SALES DATA</div>
      <div className={styles["date-filter-container"]}>
        <DateRangeTest />
      </div>
    </div>
  );
}

export default SalesHeader;
