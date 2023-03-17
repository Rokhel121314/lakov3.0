import React from "react";
import styles from "./stock.module.css";
import StockDisplay from "./StockDisplay";
import StockDetail from "./StockDetail";
import useToggle from "../../hooks/useToggle";
import StockAddProduct from "./StockAddProduct";

function Stock() {
  const { value, toggleFalseOnly, toggleTrueOnly } = useToggle();

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
