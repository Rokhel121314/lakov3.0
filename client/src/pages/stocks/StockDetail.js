import React from "react";
import styles from "./stock.module.css";

function StockDetail() {
  return (
    <div className={styles["stockdetail-container"]}>
      <div className={styles["stockdetail-header"]}>
        {/* PRODUCT DETAIL */}
        <div className={`${styles["productdetail-container"]}`}>
          <div>EGG</div>
          <div>PRODUCT ID: 029321039203</div>
        </div>

        {/* PRODUCT UTILS */}
        <div className={`${styles["productutils-container"]}`}>
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </div>

      {/* PRODUCT STATUS */}
      <div className={styles["stockdetail-stockstatus"]}>
        <div className={styles["status-container"]}>
          <input type="checkbox" name="onstock" disabled={true} />
          <label htmlFor="onstock">ON STOCK</label>
        </div>
        <div className={styles["status-container"]}>
          <input type="checkbox" name="lowstock" disabled={true} />
          <label htmlFor="lowstock">LOW ON STOCK</label>
        </div>
        <div className={styles["status-container"]}>
          <input type="checkbox" name="outofstock" disabled={true} />
          <label htmlFor="outofstock">OUT OF STOCK</label>
        </div>
      </div>

      {/* PRODUCT IMAGE */}
      <div className={styles["stockdetail-image-container"]}>
        <img
          className={styles["stockdetail-image"]}
          src="https://www.shutterstock.com/image-photo/eggs-isolated-on-white-background-260nw-496251349.jpg"
          alt="img"
        />
      </div>

      {/* PRODUCT STATISTICS */}
      <div className={styles["stockdetail-statistics"]}></div>
    </div>
  );
}

export default StockDetail;
