import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFilteredTransactionList } from "../../redux/transactionSlice";
import styles from "./transaction.module.css";
import TransactionDetail from "./TransactionDetail";
import TransactionDisplay from "./TransactionDisplay";

function Transaction() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilteredTransactionList());

    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles["transaction-container"]}>
      <TransactionDetail />
      <TransactionDisplay />
    </div>
  );
}

export default Transaction;
