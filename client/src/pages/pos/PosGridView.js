import React from "react";
import styles from "./pos.module.css";
import { useDispatch } from "react-redux";

import { addProductToCounter } from "../../redux/counterSlice";

function PosGridView({ filteredProductData }) {
  const dispatch = useDispatch();
  return (
    <section className={styles["grid-view-section"]}>
      <div className={styles["product-button-container"]}>
        {!filteredProductData
          ? "NO PRODUCT TO SHOW"
          : filteredProductData.map((product) => {
              return (
                <button
                  className={styles["product-button"]}
                  key={product._id}
                  onClick={() => {
                    dispatch(addProductToCounter(product));
                  }}>
                  <div className={styles["product-button-priceqty"]}>
                    <div>{product.product_quantity}</div>
                  </div>
                  <img
                    className={styles["product-button-image"]}
                    src={product.product_image.url}
                    alt="img"
                  />
                  <div className={styles["product-button-name"]}>
                    {product.product_name}
                  </div>
                </button>
              );
            })}
      </div>
    </section>
  );
}

export default PosGridView;
