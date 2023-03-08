import React from "react";
import { useSelector } from "react-redux";
import styles from "./stock.module.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import StockStatus from "./StockStatus";

function StockDetail() {
  const { productDetail } = useSelector((state) => state.product);

  const ProductName =
    productDetail.product_name.charAt(0).toUpperCase() +
    productDetail.product_name.slice(1);

  console.log("PRODUCTNAME", ProductName);
  return (
    <div className={styles["stockdetail-container"]}>
      <div className={styles["stockdetail-header"]}>
        {/* PRODUCT UTILS */}

        <button className={styles["utility-update-btn"]}>
          <FaEdit />
          <div className={styles["edit-text"]}>EDIT</div>
        </button>
        <button className={styles["utility-delete-btn"]}>
          <FaTrash />
          <div className={styles["edit-text"]}>DELETE</div>
        </button>
      </div>

      {/* PRODUCT DETAIL */}
      <div className={`${styles["productdetail-container"]}`}>
        <div className={styles["product-name"]}>{ProductName}</div>
        <div className={styles["product-id"]}>{`ID: ${productDetail._id}`}</div>
      </div>

      {/* PRODUCT STATUS */}
      <StockStatus qty={productDetail.product_quantity} />

      {/* PRODUCT IMAGE */}
      <div className={styles["stockdetail-image-container"]}>
        <img
          className={styles["stockdetail-image"]}
          src={productDetail.product_image.url}
          alt="img"
        />
        <div className={styles["stock-details"]}>
          <div className={styles["detail-subcontainer"]}>
            <div className={styles["detail-header"]}>ORIGINAL PRICE</div>
            <div className={styles["detail-content"]}>
              <b>{`$ ${productDetail.original_price.toFixed(2)}`}</b>
            </div>
          </div>
          <div className={styles["detail-subcontainer"]}>
            <div className={styles["detail-header"]}>SELLING PRICE</div>
            <div className={styles["detail-content"]}>
              <b>{`$ ${productDetail.selling_price.toFixed(2)}`}</b>
            </div>
          </div>
        </div>
        <div className={styles["stock-details"]}>
          <div className={styles["detail-subcontainer"]}>
            <div className={styles["detail-header"]}>QUANTITY</div>
            <div className={styles["detail-content"]}>
              <b>{`${productDetail.product_quantity} pcs`}</b>
            </div>
          </div>
          <div className={styles["detail-subcontainer"]}>
            <div className={styles["detail-header"]}>TYPE</div>
            <div className={styles["detail-content"]}>
              <b>{`${productDetail.product_type}`}</b>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT STATISTICS */}
      <div className={styles["stockdetail-statistics"]}></div>
    </div>
  );
}

export default StockDetail;
