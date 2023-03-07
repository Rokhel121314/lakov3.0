import React from "react";
import styles from "./stock.module.css";
import StockDisplay from "./StockDisplay";
import StockDetail from "./StockDetail";
import StockAddProduct from "./StockAddProduct";
import useToggle from "../../hooks/useToggle";

function Stock() {
  const { value, toggleFalseOnly, toggleTrueOnly } = useToggle();

  console.log("value", value);
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
