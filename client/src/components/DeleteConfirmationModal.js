import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useLogin from "../hooks/useLogin";
import styles from "./styles.module.css";
import {
  deleteProduct,
  getNextProductDetail,
  readAllProduct,
} from "../redux/productSlice";

function DeleteConfirmationModal({ newProductName, toggleFalseOnly }) {
  const { productDetail, productIndex } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const { persistUserData } = useLogin();
  const productAndUserId = {
    user_id: persistUserData.user_id,
    product_id: productDetail._id,
  };

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(productAndUserId));

    // setTimeout(() => {
    //   dispatch(readAllProduct(persistUserData.user_id));
    // }, 500);

    dispatch(getNextProductDetail(productIndex));
  };
  return (
    <div className={styles["delete-modal-background"]}>
      <div className={styles["delete-modal-container"]}>
        <div className={styles["delete-modal-header"]}>DELETE CONFIRMATION</div>
        <div className={styles["delete-modal-body"]}>
          {`Delete ${newProductName}?`}
        </div>
        <div className={styles["delete-modal-footer"]}>
          <button
            className={styles["modal-cancel-btn"]}
            onClick={toggleFalseOnly}>
            CANCEL
          </button>
          <button
            className={styles["modal-confirm-btn"]}
            onClick={() => {
              handleDeleteProduct();
              toggleFalseOnly();
            }}>
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
