import React from "react";
import { useSelector } from "react-redux";
import styles from "./stock.module.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import StockStatus from "./StockStatus";
import useCapitalize from "../../hooks/useCapitalize";
import DeleteConfirmationModal from "../../components/DeleteConfirmationModal";
import useToggle from "../../hooks/useToggle";
import StockDetailUpdate from "./StockDetailUpdate";
import useClickOutside from "../../hooks/useClickOutSide";
import StockStats from "./StockStats";

function StockDetail() {
  const { productDetail } = useSelector((state) => state.product);

  const { salesData } = useSelector((state) => state.transaction);

  const { newWord } = useCapitalize(productDetail?.product_name);
  const newProductName = newWord;

  const { value, toggle, toggleFalseOnly } = useToggle();

  const { isOpen, toggleIsOpen, ref } = useClickOutside();

  return (
    <>
      <div className={styles["stockdetail-container"]} ref={ref}>
        <div className={styles["stockdetail-header"]}>
          {/* PRODUCT UTILS */}

          <button
            className={styles["utility-update-btn"]}
            onClick={toggleIsOpen}>
            <FaEdit />
            <div className={styles["edit-text"]}>EDIT</div>
          </button>
          <button className={styles["utility-delete-btn"]} onClick={toggle}>
            <FaTrash />
          </button>
        </div>

        {/* PRODUCT DETAIL */}
        <div className={`${styles["productdetail-container"]}`}>
          <div className={styles["product-name"]}>{newProductName}</div>
          <div
            className={styles["product-id"]}>{`ID: ${productDetail._id}`}</div>
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
        <div className={styles["stockdetail-statistics"]}>
          {!isOpen ? (
            !salesData ? (
              ""
            ) : (
              <StockStats />
            )
          ) : (
            <StockDetailUpdate toggleIsOpen={toggleIsOpen} />
          )}
        </div>
      </div>
      {!value ? (
        ""
      ) : (
        <DeleteConfirmationModal
          newProductName={newProductName}
          value={value}
          toggleFalseOnly={toggleFalseOnly}
        />
      )}
    </>
  );
}

export default StockDetail;
