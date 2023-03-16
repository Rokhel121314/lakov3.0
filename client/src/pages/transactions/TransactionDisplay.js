import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./transaction.module.css";
import moment from "moment";
import {
  getTransactionDetail,
  getTransactionTotals,
} from "../../redux/transactionSlice";

function TransactionDisplay() {
  const {
    transactionList,
    totalTransactionQuantity,
    totalTransactionAmount,
    totalTransactions,
  } = useSelector((state) => state.transaction);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionTotals());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactionList]);

  return (
    <div className={styles["display-container"]}>
      <div className={styles["display-header"]}>
        <div className={styles["total-summary"]}>
          <div>{`${totalTransactions} TRANSACTIONS`}</div>
          <div>{`${totalTransactionQuantity?.toFixed(2)} pcs`}</div>
          <div>{`$ ${totalTransactionAmount.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}`}</div>
        </div>
        <div className={styles["transaction-toolbar"]}></div>
      </div>
      <div className={styles["display-body"]}>
        <div className={styles["table-header"]}>
          <div className={`${styles["col-1"]}`}>#</div>
          <div className={`${styles["col-4"]}`}>TRANSACTION ID</div>
          <div className={`${styles["col-2"]}`}>SOLD QUANTITY</div>
          <div className={`${styles["col-2"]}`}>SOLD AMOUNT</div>
          <div className={`${styles["col-3"]}`}>TRANSACTION DATE</div>
        </div>
        <div className={styles["table-body"]}>
          {!transactionList ? (
            <div>NO TRANSACTION TO DISPLAY</div>
          ) : (
            transactionList?.map((transaction, index) => {
              return (
                <button
                  className={styles["data-container"]}
                  key={transaction._id}
                  onFocus={(e) => {
                    e.preventDefault();
                    dispatch(getTransactionDetail(transaction));
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(getTransactionDetail(transaction));
                  }}>
                  <div className={`${styles["col-1"]}`}>{index++ + 1}</div>
                  <div className={`${styles["col-4"]}`}>{transaction._id}</div>
                  <div className={`${styles["col-2"]}`}>
                    {`${transaction.transaction_sold_quantity?.toFixed(2)} pcs`}
                  </div>
                  <div className={`${styles["col-2"]}`}>
                    {`$ ${transaction.transaction_sold_amount?.toFixed(2)}`}
                  </div>
                  <div className={`${styles["col-3"]}`}>
                    {moment(transaction.createdAt).format("MMMM DD, YYYY")}
                  </div>
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default TransactionDisplay;
