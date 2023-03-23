import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTransactionTotals,
  getSalesData,
  getSalesDataByDate,
  getFilteredTransactionList,
} from "../../redux/transactionSlice";
import styles from "./sales.module.css";
import SalesContent from "./SalesContent";
import SalesHeader from "./SalesHeader";

function Sales() {
  const { filteredTransactionList } = useSelector((state) => state.transaction);

  const { allProductData } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSalesData(allProductData));
    dispatch(getSalesDataByDate());
    dispatch(getTransactionTotals());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredTransactionList]);

  useEffect(() => {
    dispatch(getFilteredTransactionList());

    // eslint-disable-next-line
  }, []);
  return (
    <div className={styles["sales-container"]}>
      <SalesHeader />
      <SalesContent />
    </div>
  );
}

export default Sales;
