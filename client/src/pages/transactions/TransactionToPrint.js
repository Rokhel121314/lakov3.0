import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import useLogin from "../../hooks/useLogin";
import styles from "./transaction.module.css";

export const TransactionToPrint = React.forwardRef((props, ref) => {
  const { transactionDetail } = useSelector((state) => state.transaction);

  const { persistUserData } = useLogin();
  return (
    <>
      {!transactionDetail ? (
        ""
      ) : (
        <div className={styles["detail-to-print"]} ref={ref}>
          <div className={styles["detail-body"]}>
            {/* DETAIL HEADER */}
            <div className={styles["detail-header"]}>
              <div className={styles["store-name"]}>
                {persistUserData.store_name}
              </div>
              <div className={styles["sub-detail"]}>Address</div>
              <div className={styles["sub-detail"]}>Contact number</div>
              <div
                className={
                  styles["sub-detail"]
                }>{`Transaction #: ${transactionDetail?._id}`}</div>
              <div className={styles["sub-detail"]}>
                {`Date: ${moment(transactionDetail?.createdAt).format(
                  "MMMM DD, YYYY hh:mm:ss"
                )}`}
              </div>
            </div>

            {/* TABLE HEADER */}
            <div className={styles["product-header"]}>
              <div className={styles["item-name"]}>Description</div>
              <div className={styles["item-total"]}>Total</div>
            </div>
            {!transactionDetail ? (
              <div>NO TRANSACTION TO DISPLAY</div>
            ) : (
              transactionDetail.transaction_sold_items?.map((product) => {
                return (
                  // TABLE CONTENT
                  <div
                    className={styles["product-container"]}
                    key={product._id}>
                    <div className={styles["item-name-total"]}>
                      <div className={styles["item-name"]}>
                        {product.product_name}
                      </div>
                      <div className={styles["item-total"]}>{`$ ${(
                        product.item_quantity * product.selling_price
                      ).toFixed(2)}`}</div>
                    </div>

                    <div className={styles["qty-price-detail"]}>{`${
                      product.item_quantity
                    } pcs x $${product.selling_price?.toFixed(2)}`}</div>
                  </div>
                );
              })
            )}

            {/* TOTAL, PAYMENT AND CHANGE */}
            <div className={styles["spacer"]}></div>
            <div className={styles["detail-footer"]}>
              <div className={styles["item-name"]}>Items</div>
              <div className={styles["item-total"]}>
                {`${transactionDetail.transaction_sold_quantity?.toFixed(
                  2
                )} pcs`}
              </div>
            </div>
            <div className={styles["detail-footer"]}>
              <div className={styles["item-name"]}>Total</div>
              <div className={styles["item-total"]}>
                {`-$ ${transactionDetail.transaction_sold_amount?.toFixed(2)}`}
              </div>
            </div>
            <div className={styles["detail-footer"]}>
              <div className={styles["item-name"]}>Payment</div>
              <div className={styles["item-total"]}>
                {`$ ${transactionDetail.transaction_payment_amount?.toFixed(
                  2
                )}`}
              </div>
            </div>
            <div className={styles["detail-footer"]}>
              <div className={styles["item-name"]}>Payment Change</div>
              <div className={styles["item-total"]}>
                {`$ ${transactionDetail.transaction_payment_change?.toFixed(
                  2
                )}`}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});
