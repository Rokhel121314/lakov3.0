import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiAddFill } from "react-icons/ri";
import { TbMinus } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import {
  addProductToCounter,
  getPayment,
  lessProductFromCounter,
  removeProductFromCounter,
  resetCounter,
} from "../../redux/counterSlice";
import styles from "./pos.module.css";
import useLogin from "../../hooks/useLogin";
import { createTransaction } from "../../redux/transactionSlice";
import { updateProductQty } from "../../redux/productSlice";

function PosCounter() {
  const {
    counterItems,
    totalQuantity,
    totalPrice,
    paymentAmount,
    paymentChange,
  } = useSelector((state) => state.counter);

  const { isLoading } = useSelector((state) => state.transaction);

  const { persistUserData } = useLogin();

  const dispatch = useDispatch();

  const counterData = {
    transaction_sold_quantity: totalQuantity,
    transaction_sold_amount: totalPrice,
    transaction_payment_amount: paymentAmount,
    transaction_payment_change: paymentChange,
    transaction_sold_items: counterItems,
  };

  const transactionData = {
    counterData: counterData,
    user_id: persistUserData.user_id,
  };

  const updateProductData = {
    user_id: persistUserData.user_id,
    counterItems: counterItems,
  };

  return (
    <div className={styles["poscounter-container"]}>
      <div className={styles["counter-header"]}>
        <div>Current Order</div>
        <button
          className={styles["reset-button"]}
          onClick={() => {
            dispatch(resetCounter());
          }}>
          RESET
        </button>
      </div>
      <div className={styles["counter-body"]}>
        {!counterItems.length ? (
          <div>"NO PRODUCT ON COUNTER"</div>
        ) : (
          counterItems?.map((product) => {
            return (
              <div className={styles["counter-items"]} key={product._id}>
                <img
                  className={styles["counter-item-image"]}
                  src={product.product_image.url}
                  alt="img"
                />
                <div className={styles["counter-item-name"]}>
                  {product.product_name}
                </div>
                <div className={styles["counter-item-count"]}>
                  <button
                    className={styles["counter-button"]}
                    onClick={() => {
                      dispatch(lessProductFromCounter(product));
                    }}>
                    <TbMinus className={styles["counter-icons"]} />
                  </button>
                  <span>{product.item_quantity}</span>
                  <button
                    className={styles["counter-button"]}
                    onClick={() => {
                      dispatch(addProductToCounter(product));
                    }}>
                    <RiAddFill className={styles["counter-icons"]} />
                  </button>
                </div>
                <div className={styles["counter-item-amount"]}>
                  {(product.item_quantity * product.selling_price).toFixed(2)}
                </div>
                <div className={styles["counter-delete-container"]}>
                  <button
                    className={styles["counter-delete-button"]}
                    onClick={() => {
                      dispatch(removeProductFromCounter(product));
                    }}>
                    <AiFillDelete className={styles["counter-icons"]} />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className={styles["counter-summary"]}>
        <div className={styles["counter-border"]}></div>
        <div className={styles["summary-container"]}>
          <div>Items</div>
          <div>{totalQuantity} pcs</div>
        </div>
        <div className={styles["summary-container"]}>
          <div>Total</div>
          <div>$ {totalPrice.toFixed(2)}</div>
        </div>
        <div className={styles["summary-container"]}>
          <div>Payment</div>
          <form>
            <input
              className={styles["payment-input"]}
              type="number"
              placeholder="0"
              value={paymentAmount}
              onChange={(e) => {
                e.preventDefault();
                dispatch(getPayment(e.target.valueAsNumber));
              }}
              required={true}
            />
          </form>
        </div>
        <div className={styles["summary-container"]}>
          <div>Change</div>
          <div>$ {paymentChange.toFixed(2)}</div>
        </div>
      </div>
      <div className={styles["counter-submit-button"]}>
        <button
          disabled={!counterItems.length ? true : false}
          className={styles["submit-button"]}
          onClick={(e) => {
            e.preventDefault();

            dispatch(createTransaction(transactionData)).then(() => {
              dispatch(resetCounter());
              dispatch(updateProductQty(updateProductData));
            });
          }}>
          {!isLoading ? "SUBMIT ORDER" : "SUBMITTING ORDER..."}
        </button>
      </div>
    </div>
  );
}

export default PosCounter;
