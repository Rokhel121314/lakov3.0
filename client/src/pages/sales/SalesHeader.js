import React from "react";
import styles from "./sales.module.css";
import DateRangeTest from "../transactions/DateRangeTest";

function SalesHeader() {
  return (
    <div className={styles["header-container"]}>
      <DateRangeTest />
    </div>
  );
}

export default SalesHeader;
