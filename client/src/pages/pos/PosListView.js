import React from "react";
import { useDispatch } from "react-redux";
import styles from "./pos.module.css";

import moment from "moment";
import { addProductToCounter } from "../../redux/counterSlice";

function PosListView({ filteredProductData }) {
  const dispatch = useDispatch();

  return (
    <>
      {/* DISPLAYING PRODUCT LIST/GRID VIEW */}
      <section className={styles["list-view-section"]}>
        {/* TABLE HEADER */}
        <div className={styles["list-view-tableheader"]}>
          <div className={`${styles["tableheader-text"]} ${styles["col-1"]}`}>
            #
          </div>
          <div className={`${styles["tableheader-text"]} ${styles["col-2"]}`}>
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
          <div className={`${styles["tableheader-text"]} ${styles["col-3"]}`}>
            LAST UPDATED
          </div>
        </div>

        {/* TABLE BODY */}

        <div className={styles["list-view-tablebody"]}>
          {!filteredProductData
            ? "NO PRODUCT TO DISPLAY"
            : filteredProductData.map((product, index) => {
                return (
                  <button
                    className={styles["product-container"]}
                    onClick={() => {
                      dispatch(addProductToCounter(product));
                    }}
                    key={product._id}>
                    <div
                      className={`${styles["product-text"]} ${styles["col-1"]}`}>
                      {index++ + 1}
                    </div>
                    <div
                      className={`${styles["product-text"]} ${styles["col-2"]}`}>
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
                      className={`${styles["product-text"]} ${styles["col-3"]}`}>
                      {moment(product.updatedAt).format("MMM-DD-YYYY")}
                    </div>
                  </button>
                );
              })}
        </div>
      </section>
    </>
  );
}

export default PosListView;
