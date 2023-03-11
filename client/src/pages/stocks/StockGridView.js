import React from "react";
import styles from "./stock.module.css";
import { useDispatch } from "react-redux";
import { getProductDetail } from "../../redux/productSlice";

function StockGridView({ toggleTrueOnly, filteredProductData }) {
  const dispatch = useDispatch();
  return (
    <section className={styles["stockgrid-section"]}>
      <div className={styles["product-button-container"]}>
        {!filteredProductData
          ? "NO PRODUCT TO SHOW"
          : filteredProductData.map((product) => {
              return (
                <button
                  className={styles["product-button"]}
                  key={product._id}
                  onFocus={() => {
                    dispatch(getProductDetail(product));
                  }}
                  onClick={() => {
                    toggleTrueOnly();
                    dispatch(getProductDetail(product));
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

export default StockGridView;
