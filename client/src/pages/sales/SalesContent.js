import React from "react";
import styles from "./sales.module.css";
import { useSelector } from "react-redux";
import useToUpperCase from "../../hooks/useToUpperCase";

function SalesContent() {
  const {
    totalTransactionQuantity,
    totalTransactionAmount,
    totalTransactionCost,
    totalTransactionProfit,
    salesDataByQuantity,
    salesDataByProfit,
  } = useSelector((state) => state.transaction);

  const { toCapitalizedFirstWord } = useToUpperCase();
  console.log("salesDataByQuantity", salesDataByQuantity);

  return (
    <div className={styles["content-container"]}>
      <div className={styles["summary-container"]}>
        <div className={styles["summary-content"]}>
          <div className={styles["summary-description"]}>NUMBER OF SALES</div>
          <div className={styles["summary-value"]}>
            {`${totalTransactionQuantity?.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}`}
          </div>
        </div>

        <div className={styles["summary-content"]}>
          <div className={styles["summary-description"]}>REVENUE</div>
          <div className={styles["summary-value"]}>
            {`$ ${totalTransactionAmount?.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}`}
          </div>
        </div>

        <div className={styles["summary-content"]}>
          <div className={styles["summary-description"]}>PROFIT</div>
          <div className={styles["summary-value"]}>
            {`$ ${totalTransactionProfit?.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}`}
          </div>
        </div>

        <div className={styles["summary-content"]}>
          <div className={styles["summary-description"]}>CAPITAL</div>
          <div className={styles["summary-value"]}>
            {`$ ${totalTransactionCost?.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}`}
          </div>
        </div>
      </div>

      <div className={styles["graph-stats-container"]}>
        <div className={styles["graph-container"]}></div>
        <div className={styles["stats-container"]}>
          <div className={styles["top-seller-container"]}>
            <div className={styles["top-seller-header"]}>
              TOP SELLERS by Sold Quantity
            </div>
            <div className={styles["top-seller-content"]}>
              {!salesDataByQuantity
                ? ""
                : salesDataByQuantity.slice(0, 5).map((sales, index) => {
                    return (
                      <div className={styles["top-seller-value"]} key={index}>
                        <div>{`${index++ + 1}. ${toCapitalizedFirstWord(
                          sales.product_name
                        )}`}</div>
                        <div>{`${sales.sold_quantity_percentage.toFixed(
                          2
                        )}% `}</div>
                      </div>
                    );
                  })}
            </div>
            <div className={styles["view-all"]}>VIEW ALL</div>
          </div>

          <div className={styles["top-seller-container"]}>
            <div className={styles["top-seller-header"]}>
              TOP SELLERS by Profit
            </div>
            <div className={styles["top-seller-content"]}>
              {!salesDataByProfit
                ? ""
                : salesDataByProfit.slice(0, 5).map((sales, index) => {
                    return (
                      <div className={styles["top-seller-value"]} key={index}>
                        <div>{`${index++ + 1}. ${toCapitalizedFirstWord(
                          sales.product_name
                        )}`}</div>
                        <div>{`${sales.sold_profit_percentage.toFixed(
                          2
                        )}% `}</div>
                      </div>
                    );
                  })}
            </div>
            <div className={styles["view-all"]}>VIEW ALL</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesContent;
