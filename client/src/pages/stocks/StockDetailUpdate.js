import React, { useEffect } from "react";
import styles from "./stock.module.css";
import { BiImageAdd } from "react-icons/bi";
import useUpdateProduct from "../../hooks/useUpdateProduct";
import { readAllProduct, updateProduct } from "../../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import useLogin from "../../hooks/useLogin";

function StockDetailUpdate({ toggleIsOpen }) {
  const { formData, handleChange, handleChangeImage } = useUpdateProduct();

  const { persistUserData } = useLogin();
  const { productDetail, isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const updatedData = {
    user_id: persistUserData.user_id,
    product_id: productDetail._id,
    formData,
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateProduct(updatedData));

    setTimeout(() => {
      toggleIsOpen();
    }, 1000);
  };

  return (
    <>
      <div
        className={
          styles["update-form-header"]
        }>{`UPDATE ${productDetail.product_name?.toUpperCase()}`}</div>
      <form className={styles["update-form-container"]} onSubmit={handleUpdate}>
        <div className={styles["update-input-container"]}>
          <input
            className={styles["update-inputfield"]}
            type="text"
            placeholder="product name"
            name="product_name"
            value={formData.product_name}
            onChange={handleChange}
          />
          <input
            className={styles["update-inputfield"]}
            type="number"
            placeholder="quantity"
            name="product_quantity"
            value={formData.product_quantity}
            onChange={handleChange}
          />
        </div>

        <div className={styles["update-input-container"]}>
          <input
            className={styles["update-inputfield"]}
            type="number"
            placeholder="original price"
            name="original_price"
            value={formData.original_price}
            onChange={handleChange}
          />
          <input
            className={styles["update-inputfield"]}
            type="number"
            placeholder="selling_price"
            name="selling_price"
            value={formData.selling_price}
            onChange={handleChange}
          />
        </div>

        <div className={styles["update-input-container"]}>
          <input
            className={styles["update-inputfield"]}
            type="text"
            placeholder="type"
            name="product_type"
            value={formData.product_type}
            onChange={handleChange}
          />
          <label className={styles["update-input-image"]}>
            <BiImageAdd />
            TEMP. DISABLED
            <input
              type="file"
              accept="image/*"
              name="product_image"
              onChange={handleChangeImage}
            />
          </label>
        </div>

        <button
          className={styles["update-button"]}
          type="submit"
          disabled={isLoading ? true : false}>
          {!isLoading ? "SAVE CHANGES" : "...SAVING CHANGES"}
        </button>
      </form>
    </>
  );
}

export default StockDetailUpdate;
