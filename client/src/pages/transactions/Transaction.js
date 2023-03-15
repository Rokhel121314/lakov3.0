import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useLogin from "../../hooks/useLogin";
import { readAllTransactions } from "../../redux/transactionSlice";
import styles from "./transaction.module.css";

function Transaction() {
  const dispatch = useDispatch();

  const { persistUserData } = useLogin();

  const { addedTransaction, transactionList } = useSelector(
    (state) => state.transaction
  );

  useEffect(() => {
    dispatch(readAllTransactions(persistUserData.user_id));
    // eslint-disable-next-line
  }, [addedTransaction]);

  console.log("transactionList", transactionList);

  return <div className={styles["transaction-container"]}>Transaction</div>;
}

export default Transaction;
