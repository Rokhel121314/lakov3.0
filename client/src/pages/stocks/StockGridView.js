import React from "react";
import styles from "./stock.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../redux/productSlice";

function StockGridView({ toggleTrueOnly }) {
  const { allProductData } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  return (
    <section className={styles["stockgrid-section"]}>
      <div className={styles["product-button-container"]}>
        {!allProductData
          ? "NO PRODUCT TO SHOW"
          : allProductData.map((product) => {
              return (
                <button
                  className={styles["product-button"]}
                  key={product._id}
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
