import React from "react";
import styles from "./stock.module.css";

function StockStatus({ qty }) {
  // GREEN MARK IF PLENTY OF STOCK
  if (qty >= 20) {
    return (
      <div className={styles["stockdetail-stockstatus"]}>
        <div className={styles["status-container"]}>
          <input
            className={styles["checkbox-onstock"]}
            type="checkbox"
            name="onstock1"
            checked={true}
            // disabled={true}
          />
          <label htmlFor="onstock">ON STOCK</label>
        </div>
        <div className={styles["status-container"]}>
          <input
            type="checkbox"
            name="lowstock1"
            disabled={true}
            checked={false}
          />
          <label htmlFor="lowstock">LOW ON STOCK</label>
        </div>
        <div className={styles["status-container"]}>
          <input
            type="checkbox"
            name="outofstock1"
            disabled={true}
            checked={false}
          />
          <label htmlFor="outofstock">OUT OF STOCK</label>
        </div>
      </div>
    );

    // YELLOW MARK IF LOW ON STOCK
  } else if (qty >= 1) {
    return (
      <div className={styles["stockdetail-stockstatus"]}>
        <div className={styles["status-container"]}>
          <input
            type="checkbox"
            name="onstock2"
            disabled={true}
            checked={false}
          />
          <label htmlFor="onstock">ON STOCK</label>
        </div>

        <div className={styles["status-container"]}>
          <input
            className={styles["checkbox-lowstock"]}
            type="checkbox"
            name="lowstock2"
            checked={true}
          />
          <label htmlFor="lowstock">LOW ON STOCK</label>
        </div>

        <div className={styles["status-container"]}>
          <input
            type="checkbox"
            name="outofstock2"
            disabled={true}
            checked={false}
          />
          <label htmlFor="outofstock">OUT OF STOCK</label>
        </div>
      </div>
    );
  } else if (qty <= 0) {
    return (
      <div className={styles["stockdetail-stockstatus"]}>
        <div className={styles["status-container"]}>
          <input
            type="checkbox"
            name="onstock3"
            disabled={true}
            checked={false}
          />
          <label htmlFor="onstock">ON STOCK</label>
        </div>
        <div className={styles["status-container"]}>
          <input
            type="checkbox"
            name="lowstock3"
            disabled={true}
            checked={false}
          />
          <label htmlFor="lowstock">LOW ON STOCK</label>
        </div>
        <div className={styles["status-container"]}>
          <input
            className={styles["checkbox-outstock"]}
            type="checkbox"
            name="outofstock3"
            checked={true}
            // disabled={true}
          />
          <label htmlFor="outofstock">OUT OF STOCK</label>
        </div>
      </div>
    );
  }
}

export default StockStatus;
