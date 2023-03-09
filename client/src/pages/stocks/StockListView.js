import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./stock.module.css";
import { getProductDetail, getProductIndex } from "../../redux/productSlice";

function StockListView({ toggleTrueOnly }) {
  const { allProductData } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  return (
    <>
      {/* DISPLAYING PRODUCT LIST/GRID VIEW */}
      <section className={styles["stocklist-section"]}>
        {/* TABLE HEADER */}
        <div className={styles["stocklist-tableheader"]}>
          <div className={`${styles["tableheader-text"]} ${styles["col-1"]}`}>
            #
          </div>
          <div className={`${styles["tableheader-text"]} ${styles["col-3"]}`}>
            PRODUCT IMAGE
          </div>
          <div className={`${styles["tableheader-text"]} ${styles["col-3"]}`}>
            PRODUCT NAME
          </div>
          <div className={`${styles["tableheader-text"]} ${styles["col-1"]}`}>
            QTY
          </div>
          <div className={`${styles["tableheader-text"]} ${styles["col-2"]}`}>
            PRICE
          </div>
          <div className={`${styles["tableheader-text"]} ${styles["col-2"]}`}>
            LAST UPDATED
          </div>
        </div>

        {/* TABLE BODY */}

        <div className={styles["stocklist-tablebody"]}>
          {!allProductData
            ? "NO PRODUCT TO DISPLAY"
            : allProductData.map((product, index) => {
                return (
                  <button
                    className={styles["product-container"]}
                    onClick={() => {
                      dispatch(getProductDetail(product));
                      dispatch(getProductIndex(index - 1));
                      toggleTrueOnly();
                    }}
                    key={product._id}>
                    <div
                      className={`${styles["product-text"]} ${styles["col-1"]}`}>
                      {index++ + 1}
                    </div>
                    <div
                      className={`${styles["product-text"]} ${styles["col-3"]}`}>
                      <img
                        className={styles["product-image"]}
                        src={product.product_image.url}
                        alt="img"
                      />
                    </div>
                    <div
                      className={`${styles["product-text"]} ${styles["col-3"]}`}>
                      {product.product_name}
                    </div>
                    <div
                      className={`${styles["product-text"]} ${styles["col-1"]}`}>
                      {product.product_quantity}
                    </div>
                    <div
                      className={`${styles["product-text"]} ${styles["col-2"]}`}>
                      {product.selling_price}
                    </div>
                    <div
                      className={`${styles["product-text"]} ${styles["col-2"]}`}>
                      {product.updatedAt}
                    </div>
                  </button>
                );
              })}

          {/* PRODUCT CONTAINER */}

          {/* END OF PRODUCT CONTAINER */}
        </div>
      </section>
    </>
  );
}

export default StockListView;
