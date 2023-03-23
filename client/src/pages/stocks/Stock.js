import React, { useEffect } from "react";
import styles from "./stock.module.css";
import StockDisplay from "./StockDisplay";
import StockDetail from "./StockDetail";
import useToggle from "../../hooks/useToggle";
import StockAddProduct from "./StockAddProduct";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilteredTransactionList,
  getSalesData,
  getSalesDataByDate,
  getSalesDataByDateOfProduct,
  getTransactionTotals,
  // getSalesDataByDateOfProduct,
} from "../../redux/transactionSlice";

function Stock() {
  const { value, toggleFalseOnly, toggleTrueOnly } = useToggle();
  const { filteredTransactionList } = useSelector((state) => state.transaction);

  const { allProductData, productDetail } = useSelector(
    (state) => state.product
  );
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

  useEffect(() => {
    dispatch(getSalesDataByDateOfProduct(productDetail));

    // eslint-disable-next-line
  }, [productDetail]);

  return (
    <div className={styles["stock-container"]}>
      {value ? <StockDetail /> : <StockAddProduct />}
      <StockDisplay
        addOrShow={value}
        toggleFalseOnly={toggleFalseOnly}
        toggleTrueOnly={toggleTrueOnly}
      />
    </div>
  );
}

export default Stock;
