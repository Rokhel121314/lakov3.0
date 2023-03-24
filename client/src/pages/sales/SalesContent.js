import React, { useState } from "react";
import styles from "./sales.module.css";
import { useSelector } from "react-redux";
import useToUpperCase from "../../hooks/useToUpperCase";
import SalesGraph from "./SalesGraph";

function SalesContent() {
  const {
    totalTransactionQuantity,
    totalTransactionAmount,
    totalTransactionCost,
    totalTransactionProfit,
    salesData,
  } = useSelector((state) => state.transaction);

  const [chartSelect, setChartSelect] = useState("quantity");

  const { toCapitalizedFirstWord } = useToUpperCase();

  const salesDataSortedByQty = salesData
    .slice()
    .sort((a, b) =>
      a.sold_quantity_percentage > b.sold_quantity_percentage ? -1 : 1
    );

  const salesDataSortedBySales = salesData
    .slice()
    .sort((a, b) =>
      a.sold_amount_percentage > b.sold_amount_percentage ? -1 : 1
    );

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
        <div className={styles["graph-container"]}>
          <select
            className={styles["chart-select"]}
            onChange={(e) => setChartSelect(e.target.value)}>
            <option value="quantity">SOLD QUANTITY</option>
            <option value="amount">SOLD AMOUNT</option>
            <option value="profit">SOLD PROFIT</option>
          </select>
          <SalesGraph chartSelect={chartSelect} />
        </div>
        <div className={styles["stats-container"]}>
          <div className={styles["top-seller-container"]}>
            <div className={styles["top-seller-header"]}>
              TOP SELLERS by Quantity
            </div>
            <div className={styles["top-seller-content"]}>
              {!salesDataSortedByQty
                ? ""
                : salesDataSortedByQty.slice(0, 5).map((sales, index) => {
                    return (
                      <div className={styles["top-seller-value"]} key={index}>
                        <div>{`${index++ + 1}. ${toCapitalizedFirstWord(
                          sales.product_name
                        ).slice(0, 14)}`}</div>
                        <div>{`${sales.sold_quantity_percentage.toFixed(
                          2
                        )}% `}</div>
                      </div>
                    );
                  })}
            </div>
            {/* <div className={styles["view-all"]}>VIEW ALL</div> */}
          </div>

          <div className={styles["top-seller-container"]}>
            <div className={styles["top-seller-header"]}>
              TOP SELLERS by Gross Sales
            </div>
            <div className={styles["top-seller-content"]}>
              {!salesDataSortedBySales
                ? ""
                : salesDataSortedBySales.slice(0, 5).map((sales, index) => {
                    return (
                      <div className={styles["top-seller-value"]} key={index}>
                        <div>{`${index++ + 1}. ${toCapitalizedFirstWord(
                          sales.product_name
                        ).slice(0, 16)}`}</div>
                        <div>{`${sales.sold_amount_percentage.toFixed(
                          2
                        )}% `}</div>
                      </div>
                    );
                  })}
            </div>
            {/* <div className={styles["view-all"]}>VIEW ALL</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesContent;
