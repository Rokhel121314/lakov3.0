import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTransactionTotals,
  getSalesByQuantity,
  getSalesByProfit,
  getSalesDataByDate,
  getFilteredTransactionList,
} from "../../redux/transactionSlice";
import styles from "./sales.module.css";
import SalesContent from "./SalesContent";
import SalesHeader from "./SalesHeader";
import { format } from "date-fns";

function Sales() {
  const { filteredTransactionList } = useSelector((state) => state.transaction);

  const { allProductData } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const salesDates = filteredTransactionList.map((date) =>
    format(new Date(date.createdAt), "MM/dd/yyyy")
  );

  const dateFilter = [...new Set(salesDates)];

  useEffect(() => {
    dispatch(getSalesByQuantity(allProductData));
    dispatch(getSalesByProfit(allProductData));
    dispatch(getSalesDataByDate(dateFilter));
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
