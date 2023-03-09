import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./stock.module.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import StockStatus from "./StockStatus";
import {
  deleteProduct,
  getNextProductDetail,
  readAllProduct,
} from "../../redux/productSlice";
import useLogin from "../../hooks/useLogin";
import useCapitalize from "../../hooks/useCapitalize";

function StockDetail() {
  const { productDetail, productIndex } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const { persistUserData } = useLogin();
  const productAndUserId = {
    user_id: persistUserData.user_id,
    product_id: productDetail._id,
  };

  const { newWord } = useCapitalize(productDetail.product_name);
  const newProductName = newWord;
  console.log("word", newWord);

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(productAndUserId));

    setTimeout(() => {
      dispatch(readAllProduct(persistUserData.user_id));
    }, 500);

    dispatch(getNextProductDetail(productIndex));
  };

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
          <div className={styles["edit-text"]} onClick={handleDeleteProduct}>
            DELETE
          </div>
        </button>
      </div>

      {/* PRODUCT DETAIL */}
      <div className={`${styles["productdetail-container"]}`}>
        <div className={styles["product-name"]}>{newProductName}</div>
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
