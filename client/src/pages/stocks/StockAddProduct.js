import React from "react";
import useAddProduct from "../../hooks/useAddProduct";
import styles from "./stock.module.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/productSlice";
import useLogin from "../../hooks/useLogin";

function StockAddProduct() {
  const { formData, handleChange, handleChangeImage, resetFormdata } =
    useAddProduct();
  const { persistUserData } = useLogin();
  const dispatchData = { formData: formData, user_id: persistUserData.user_id };

  const dispatch = useDispatch();

  return (
    <div className={styles["add-product-container"]}>
      <div className={styles["add-product-header"]}>ADD PRODUCT</div>

      <form
        className={styles["add-product-form"]}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addProduct(dispatchData));
          window.alert("PRODUCT SAVED!");
          resetFormdata();
        }}>
        {/* PRODUCT NAME INPUT */}
        <div className={styles["form-container"]}>
          <label className={styles["form-label"]} htmlFor="product_name">
            ADD PRODUCT NAME
          </label>
          <input
            className={styles["add-product-inputtext"]}
            type="text"
            name="product_name"
            value={formData.product_name}
            onChange={handleChange}
            placeholder="ex. Egg..."
            required={true}
          />
        </div>

        <div className={styles["numberinputs-container"]}>
          {/* PRODUCT QTY INPUT */}
          <div className={styles["numberinputs-subcontainer"]}>
            <label className={styles["form-label"]} htmlFor="product_name">
              QUANTITY
            </label>
            <input
              className={styles["add-product-inputnumber"]}
              type="number"
              name="product_quantity"
              value={formData.product_quantity}
              onChange={handleChange}
              placeholder="ex. 100.00"
              required={true}
            />
          </div>
          {/* PRODUCT ORIGINAL PRICE INPUT */}
          <div className={styles["numberinputs-subcontainer"]}>
            <label className={styles["form-label"]} htmlFor="product_name">
              ORIGINAL PRICE
            </label>
            <input
              className={styles["add-product-inputnumber"]}
              type="number"
              name="original_price"
              value={formData.original_price}
              onChange={handleChange}
              placeholder="ex. $ 0.00"
              required={true}
            />
          </div>
          {/* PRODUCT RESELL PRICE INPUT */}
          <div className={styles["numberinputs-subcontainer"]}>
            {" "}
            <label className={styles["form-label"]} htmlFor="product_name">
              RESELL PRICE
            </label>
            <input
              className={styles["add-product-inputnumber"]}
              type="number"
              name="selling_price"
              value={formData.selling_price}
              onChange={handleChange}
              placeholder="ex. $ 0.00"
              required={true}
            />
          </div>
        </div>

        {/* PRODUCT TYPE */}
        <div className={styles["form-container"]}>
          <label className={styles["form-label"]} htmlFor="product_name">
            PRODUCT TYPE
          </label>
          <input
            className={styles["add-product-inputtext"]}
            type="text"
            name="product_type"
            value={formData.product_type}
            onChange={handleChange}
            placeholder="ex. food..."
            required={true}
          />
        </div>

        {/* PRODUCT IMAGE */}
        <div className={styles["image-container"]}>
          <div className={`${styles["col-12"]}`}>
            <label className={styles["form-label"]} htmlFor="product_name">
              UPLOAD PRODUCT IMAGE
            </label>
            <input
              className={styles["add-product-inputtext"]}
              type="file"
              name="product_image"
              onChange={handleChangeImage}
              placeholder="ex. food..."
              accept="image/*"
              required={true}
            />
          </div>
          {formData.product_image ? (
            <img
              className={`${styles["image-preview"]} ${styles["col-12"]}`}
              src={`${formData.product_image}`}
              alt="img"
            />
          ) : (
            ""
          )}
        </div>
        <div className={styles["button-container"]}>
          <button className={styles["saveproduct-button"]} type="sumbit">
            SAVE PRODUCT
          </button>
        </div>
      </form>
    </div>
  );
}

export default StockAddProduct;
