import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./transaction.module.css";
import moment from "moment";
import {
  getTransactionDetail,
  getTransactionTotals,
  sortBySoldAmountAsc,
  sortBySoldAmountDsc,
  sortBySoldQtyAsc,
  sortBySoldQtyDsc,
  sortBySoldDateAsc,
  sortBySoldDateDsc,
  searchFilter,
} from "../../redux/transactionSlice";
import DateRangeTest from "./DateRangeTest";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { ImSearch } from "react-icons/im";
import useToggle from "../../hooks/useToggle";
import useToggle2 from "../../hooks/useToggle2";
import useToggle3 from "../../hooks/useToggle3";

function TransactionDisplay() {
  const {
    transactionList,
    totalTransactionQuantity,
    totalTransactionAmount,
    totalTransactions,
    filteredTransactionList,
  } = useSelector((state) => state.transaction);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionTotals());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactionList, filteredTransactionList]);

  const { value, toggle, toggleFalseOnly } = useToggle();
  const { value2, toggle2, toggleFalseOnly2 } = useToggle2();
  const { value3, toggle3, toggleFalseOnly3 } = useToggle3();

  return (
    <div className={styles["display-container"]}>
      <div className={styles["display-header"]}>
        <div className={styles["transaction-toolbar"]}>
          <div className={styles["search-input-container"]}>
            <input
              name="search-input-label"
              className={styles["search-input"]}
              type="search"
              placeholder="search transaction id here.."
              onChange={(e) => {
                dispatch(searchFilter(e.target.value));
              }}
            />
            <button className={styles["search-button"]} disabled={true}>
              <ImSearch className={styles["search-icon"]} />
            </button>
          </div>

          <DateRangeTest />
        </div>
        <div className={styles["total-summary"]}>
          <div>{`TRANSACTIONS: ${totalTransactions}`}</div>
          <div>{`SOLD QUANTITY: ${totalTransactionQuantity.toLocaleString(
            undefined,
            {
              minimumFractionDigits: 2,
            }
          )} pcs`}</div>
          <div>{`SOLD AMOUNT: $ ${totalTransactionAmount.toLocaleString(
            undefined,
            {
              minimumFractionDigits: 2,
            }
          )}`}</div>
        </div>
      </div>
      <div className={styles["display-body"]}>
        <div className={styles["table-header"]}>
          <div className={`${styles["col-1"]}`}>#</div>
          <div className={`${styles["col-4"]}`}>TRANSACTION ID</div>

          {/* SORTING BY SOLD QUANTITY */}
          <div className={`${styles["col-2"]}`}>
            SOLD QUANTITY
            {!value ? (
              <MdOutlineArrowDropDown
                className={styles["sort-icons"]}
                onClick={() => {
                  dispatch(sortBySoldQtyAsc());
                  toggle();
                  toggleFalseOnly2();
                  toggleFalseOnly3();
                }}
              />
            ) : (
              <MdOutlineArrowDropUp
                className={styles["sort-icons"]}
                onClick={() => {
                  dispatch(sortBySoldQtyDsc());
                  toggle();
                  toggleFalseOnly2();
                  toggleFalseOnly3();
                }}
              />
            )}
          </div>

          {/* SORTING BY SOLD AMOUNT */}
          <div className={`${styles["col-2"]}`}>
            SOLD AMOUNT
            {!value2 ? (
              <MdOutlineArrowDropDown
                className={styles["sort-icons"]}
                onClick={() => {
                  dispatch(sortBySoldAmountAsc());
                  toggle2();
                  toggleFalseOnly();
                  toggleFalseOnly3();
                }}
              />
            ) : (
              <MdOutlineArrowDropUp
                className={styles["sort-icons"]}
                onClick={() => {
                  dispatch(sortBySoldAmountDsc());
                  toggle2();
                  toggleFalseOnly();
                  toggleFalseOnly3();
                }}
              />
            )}
          </div>

          {/* SORT BY SOLD DATE */}
          <div className={`${styles["col-3"]}`}>
            TRANSACTION DATE
            {!value3 ? (
              <MdOutlineArrowDropDown
                className={styles["sort-icons"]}
                onClick={() => {
                  dispatch(sortBySoldDateAsc());
                  toggle3();
                  toggleFalseOnly();
                  toggleFalseOnly2();
                }}
              />
            ) : (
              <MdOutlineArrowDropUp
                className={styles["sort-icons"]}
                onClick={() => {
                  dispatch(sortBySoldDateDsc());
                  toggle3();
                  toggleFalseOnly();
                  toggleFalseOnly2();
                }}
              />
            )}
          </div>
        </div>
        <div className={styles["table-body"]}>
          {!filteredTransactionList ? (
            <div>NO TRANSACTION TO DISPLAY</div>
          ) : (
            filteredTransactionList?.map((transaction, index) => {
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
