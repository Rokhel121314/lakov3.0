import React from "react";
import styles from "./stock.module.css";

function StockListView({ toggleTrueOnly }) {
  return (
    <>
      {/* DISPLAYING PRODUCT LIST/GRID VIEW */}
      <section className={styles["stocklist-section"]}>
        {/* TABLE HEADER */}
        <div className={styles["stocklist-tableheader"]}>
          <div className={`${styles["tableheader-text"]} ${styles["col-1"]}`}>
            ID
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
          {/* PRODUCT CONTAINER */}
          <div className={styles["product-container"]} onClick={toggleTrueOnly}>
            <div className={`${styles["product-text"]} ${styles["col-1"]}`}>
              #011
            </div>
            <div className={`${styles["product-text"]} ${styles["col-3"]}`}>
              <img
                className={styles["product-image"]}
                src="https://www.shutterstock.com/image-photo/eggs-isolated-on-white-background-260nw-496251349.jpg"
                alt="img"
              />
            </div>
            <div className={`${styles["product-text"]} ${styles["col-3"]}`}>
              EGG
            </div>
            <div className={`${styles["product-text"]} ${styles["col-1"]}`}>
              100 PCS
            </div>
            <div className={`${styles["product-text"]} ${styles["col-2"]}`}>
              $ 5.00
            </div>
            <div className={`${styles["product-text"]} ${styles["col-2"]}`}>
              3/7/2023
            </div>
          </div>
          {/* END OF PRODUCT CONTAINER */}
          {/* PRODUCT CONTAINER */}
          <div className={styles["product-container"]}>
            <div className={`${styles["product-text"]} ${styles["col-1"]}`}>
              #012
            </div>
            <div className={`${styles["product-text"]} ${styles["col-3"]}`}>
              <img
                className={styles["product-image"]}
                src="https://media.istockphoto.com/id/499147864/photo/garlic.jpg?s=612x612&w=0&k=20&c=-9b483V6UP2UrljEYZDcEBEwzkPqb3u5MIJ3-Maofuc="
                alt="img"
              />
            </div>
            <div className={`${styles["product-text"]} ${styles["col-3"]}`}>
              EGG
            </div>
            <div className={`${styles["product-text"]} ${styles["col-1"]}`}>
              100 PCS
            </div>
            <div className={`${styles["product-text"]} ${styles["col-2"]}`}>
              $ 5.00
            </div>
            <div className={`${styles["product-text"]} ${styles["col-2"]}`}>
              3/7/2023
            </div>
          </div>
          {/* END OF PRODUCT CONTAINER */}
        </div>
      </section>
    </>
  );
}

export default StockListView;
