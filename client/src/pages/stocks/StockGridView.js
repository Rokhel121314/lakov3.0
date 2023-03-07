import React from "react";
import styles from "./stock.module.css";

function StockGridView({ toggleTrueOnly }) {
  return (
    <section className={styles["stockgrid-section"]}>
      <div className={styles["product-button-container"]}>
        <button className={styles["product-button"]} onClick={toggleTrueOnly}>
          <div className={styles["product-button-priceqty"]}>
            <div> 100 PCS</div>
          </div>
          <img
            className={styles["product-button-image"]}
            src="https://www.shutterstock.com/image-photo/eggs-isolated-on-white-background-260nw-496251349.jpg"
            alt="img"
          />
          <div className={styles["product-button-name"]}>EGG</div>
        </button>
        <button className={styles["product-button"]}></button>
        <button className={styles["product-button"]}></button>
        <button className={styles["product-button"]}></button>
        <button className={styles["product-button"]}></button>
        <button className={styles["product-button"]}></button>
        <button className={styles["product-button"]}></button>
        <button className={styles["product-button"]}></button>
        <button className={styles["product-button"]}></button>
        <button className={styles["product-button"]}></button>
        <button className={styles["product-button"]}></button>
        <button className={styles["product-button"]}></button>
        <button className={styles["product-button"]}></button>
        <button className={styles["product-button"]}></button>
        <button className={styles["product-button"]}></button>
        <button className={styles["product-button"]}></button>
      </div>
    </section>
  );
}

export default StockGridView;
