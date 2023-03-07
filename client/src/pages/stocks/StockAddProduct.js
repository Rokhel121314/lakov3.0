import React from "react";
import useAddProduct from "../../hooks/useAddProduct";
import styles from "./stock.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/productSlice";
import useLogin from "../../hooks/useLogin";

function StockAddProduct() {
  const { formData, handleChange, handleChangeImage } = useAddProduct();
  const { persistUserData } = useLogin();
  const { productData } = useSelector((state) => state.product);
  const user_id = persistUserData.user_id;
  console.log("productData", productData);
  console.log("user_id", user_id);
  const dispatch = useDispatch();

  return (
    <div className={styles["add-product-container"]}>
      <div className={styles["add-product-header"]}>ADD PRODUCT</div>

      <form
        className={styles["add-product-form"]}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addProduct(formData, user_id));
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
          />
        </div>

        {/* PRODUCT QTY INPUT */}
        <div className={styles["form-container"]}>
          <label className={styles["form-label"]} htmlFor="product_name">
            PRODUCT QUANTITY
          </label>
          <input
            className={styles["add-product-inputtext"]}
            type="number"
            name="product_quantity"
            value={formData.product_quantity}
            onChange={handleChange}
            placeholder="ex. 100.00"
          />
        </div>

        {/* PRODUCT ORIGINAL PRICE INPUT */}
        <div className={styles["form-container"]}>
          <label className={styles["form-label"]} htmlFor="product_name">
            ORIGINAL PRICE
          </label>
          <input
            className={styles["add-product-inputtext"]}
            type="number"
            name="original_price"
            value={formData.original_price}
            onChange={handleChange}
            placeholder="ex. $ 0.00"
          />
        </div>

        {/* PRODUCT RESELL PRICE INPUT */}
        <div className={styles["form-container"]}>
          <label className={styles["form-label"]} htmlFor="product_name">
            RESELL PRICE
          </label>
          <input
            className={styles["add-product-inputtext"]}
            type="number"
            name="selling_price"
            value={formData.selling_price}
            onChange={handleChange}
            placeholder="ex. $ 0.00"
          />
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
          />
        </div>

        {/* PRODUCT IMAGE */}
        <div className={styles["form-container"]}>
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
          />
          <img src={`${formData.product_image}`} alt="img" />
        </div>
        <div>
          <button type="sumbit">SAVE PRODUCT</button>
        </div>
      </form>
    </div>
  );
}

export default StockAddProduct;
