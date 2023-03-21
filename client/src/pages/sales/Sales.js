import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTransactionTotals,
  getSalesByQuantity,
  getSalesByProfit,
} from "../../redux/transactionSlice";
import styles from "./sales.module.css";
import SalesContent from "./SalesContent";
import SalesHeader from "./SalesHeader";

function Sales() {
  const { transactionList, filteredTransactionList } = useSelector(
    (state) => state.transaction
  );

  const { allProductData } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionTotals());

    // dispatch(getAllSoldItems());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactionList, filteredTransactionList]);

  useEffect(() => {
    dispatch(getSalesByQuantity(allProductData));
    dispatch(getSalesByProfit(allProductData));

    // dispatch(getAllSoldItems());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredTransactionList]);
  return (
    <div className={styles["sales-container"]}>
      <SalesHeader />
      <SalesContent />
    </div>
  );
}

export default Sales;
