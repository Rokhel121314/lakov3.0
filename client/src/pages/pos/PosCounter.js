import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiAddFill } from "react-icons/ri";
import { TbMinus } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import {
  addProductToCounter,
  lessProductFromCounter,
  removeProductFromCounter,
} from "../../redux/counterSlice";
import styles from "./pos.module.css";

function PosCounter() {
  const { counterItems } = useSelector((state) => state.counter);

  console.log(
    "counterItems",
    counterItems.map((product) => product.item_quantity)
  );

  const counterTotalQuantity = counterItems
    ?.map((product) => product.item_quantity)
    .reduce((a, b) => a + b, 0);

  const counterTotalPrice = counterItems
    ?.map((product) => product.selling_price)
    .reduce((a, b) => a + b, 0);

  console.log("counterTotalQuantity", counterTotalQuantity);
  console.log("counterTotalPrice", counterTotalPrice);

  const dispatch = useDispatch();
  return (
    <div className={styles["poscounter-container"]}>
      <div className={styles["counter-header"]}>
        <div>Transaction Count: 100</div>
        <button>RESET</button>
      </div>
      <div className={styles["counter-body"]}>
        {!counterItems
          ? "NO PRODUCT ON COUNTER"
          : counterItems.map((product) => {
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
            })}
      </div>
      <div className={styles["counter-summary"]}>COUNTER SUMMARY</div>
      <div className={styles["counter-submit-button"]}>BUTTON</div>
    </div>
  );
}

export default PosCounter;
