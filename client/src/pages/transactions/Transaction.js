import React from "react";
import styles from "./transaction.module.css";
import TransactionDetail from "./TransactionDetail";
import TransactionDisplay from "./TransactionDisplay";

function Transaction() {
  return (
    <div className={styles["transaction-container"]}>
      <TransactionDetail />
      <TransactionDisplay />
    </div>
  );
}

export default Transaction;
