import React, { useEffect } from "react";
import styles from "./stock.module.css";
import StockDisplay from "./StockDisplay";
import StockDetail from "./StockDetail";
import useToggle from "../../hooks/useToggle";
import { readAllProduct } from "../../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import useLogin from "../../hooks/useLogin";
import StockAddProductTest from "./StockAddProductTest";

function Stock() {
  const { value, toggleFalseOnly, toggleTrueOnly } = useToggle();
  const { persistUserData } = useLogin();
  const dispatch = useDispatch();
  const { productData } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(readAllProduct(persistUserData.user_id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productData]);

  return (
    <div className={styles["stock-container"]}>
      {value ? <StockDetail /> : <StockAddProductTest />}
      <StockDisplay
        addOrShow={value}
        toggleFalseOnly={toggleFalseOnly}
        toggleTrueOnly={toggleTrueOnly}
      />
    </div>
  );
}

export default Stock;
