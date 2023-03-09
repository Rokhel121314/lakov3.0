import React from "react";
import styles from "./stock.module.css";
import { BiImageAdd } from "react-icons/bi";
import useAddProduct from "../../hooks/useAddProduct";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/productSlice";
import useLogin from "../../hooks/useLogin";

function StockAddProductTest() {
  const { formData, handleChange, handleChangeImage, resetFormdata } =
    useAddProduct();

  const { persistUserData } = useLogin();

  const dispatchData = { formData: formData, user_id: persistUserData.user_id };

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.product);

  return (
    <div className={styles["addstock-container"]}>
      {/* HEADER */}
      <div className={styles["addstock-header"]}>ADD NEW PRODUCT</div>

      {/* PREVIEW IMAGE */}
      <div className={styles["addstock-images"]}>
        {!formData.product_image ? (
          ""
        ) : (
          <img
            className={styles["uploaded-preview"]}
            src={formData.product_image}
            alt="img"
          />
        )}
      </div>

      {/* ADDING PRODUCT FORM */}
      <form
        className={styles["addstock-forms"]}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addProduct(dispatchData));
          setTimeout(() => {
            resetFormdata();
          }, 1000);
        }}>
        {/* PRODUCT NAME */}
        <div className={styles["addstock-inputcontainer"]}>
          <input
            className={styles["addstock-input"]}
            type="text"
            placeholder="PRODUCT NAME"
            name="product_name"
            value={formData.product_name}
            onChange={handleChange}
            required={true}
          />
        </div>

        {/* PRODUCT QUANTITY */}
        <div className={styles["addstock-inputcontainer"]}>
          <input
            className={styles["addstock-input"]}
            type="number"
            placeholder="PRODUCT QUANTITY"
            name="product_quantity"
            value={formData.product_quantity}
            onChange={handleChange}
            required={true}
          />
        </div>

        {/* PRODUCT ORIGINAL PRICE AND SELLING PRICE */}
        <div className={styles["addstock-numberinputcontainer"]}>
          <input
            className={styles["addstock-numberinput"]}
            type="number"
            placeholder="ORIGINAL PRICE"
            name="original_price"
            value={formData.original_price}
            onChange={handleChange}
            required={true}
          />
          <input
            className={styles["addstock-numberinput"]}
            type="number"
            placeholder="SELLING PRICE"
            name="selling_price"
            value={formData.selling_price}
            onChange={handleChange}
            required={true}
          />
        </div>

        {/* PRODUCT TYPE/CATEGORY */}
        <div className={styles["addstock-inputcontainer"]}>
          <input
            className={styles["addstock-input"]}
            type="text"
            placeholder="PRODUCT TYPE/CATEGORY"
            name="product_type"
            value={formData.product_type}
            onChange={handleChange}
            required={true}
          />
        </div>

        {/* UPLOAD IMAGE */}
        <label className={styles["addstock-filelabel"]}>
          <div className={styles["addstock-uploadimage"]}>
            <BiImageAdd />{" "}
            {!formData.product_image ? "SELECT IMAGE" : "CHANGE IMAGE?"}
            <input
              className={styles["addstock-inputfile"]}
              type="file"
              placeholder="UPLOAD IMAGE"
              name="product_image"
              //   value={formData.product_quantity}
              onChange={handleChangeImage}
              required={true}
              accept="image/*"
            />
          </div>
        </label>

        {/* SAVE PRODUCT BUTTON */}
        <div className={styles["addstock-buttoncontainer"]}>
          <button className={styles["addstock-button"]} type="submit">
            {isLoading ? "...SAVING PRODUCT" : "SAVE PRODUCT"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default StockAddProductTest;
