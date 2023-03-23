import React from "react";
import { useSelector } from "react-redux";
import styles from "./stock.module.css";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";

const StockStats = () => {
  const { salesData, perProductSalesDataByDate } = useSelector(
    (state) => state.transaction
  );
  const { productDetail } = useSelector((state) => state.product);

  // GETTING PRODUCT SALES STATISTICS
  const productStats = salesData.filter(
    (sold) => sold.product_id === productDetail._id
  );

  const config = {
    labels: perProductSalesDataByDate.map((date) => date.transaction_date),
    datasets: [
      {
        label: "",
        data: perProductSalesDataByDate.map((qty) => qty.sales_total_quantity),
        borderColor: ["rgba(52, 76, 87, .5)"],
        backgroundColor: ["rgba(52, 76, 87, .1)"],
        color: ["white"],
        fill: true,
        pointRadius: 1,
        tension: 0.3,
      },
    ],
  };

  console.log("chartData", perProductSalesDataByDate);

  return (
    <div className={styles["statistics-container"]}>
      <div className={styles["stats-header"]}>
        <div className={styles["stats-subcontainer"]}>
          <div className={styles["stats-desc"]}>GROSS SALES</div>
          <div className={styles["stats-content"]}>
            <b>{`$ ${productStats[0].sold_amount_total.toFixed(2)}`}</b>
          </div>
          <div className={styles["stats-content"]}>
            <button>{`${productStats[0].sold_amount_percentage.toFixed(
              2
            )}%`}</button>
          </div>
        </div>

        <div className={styles["stats-subcontainer"]}>
          <div className={styles["stats-desc"]}>NET SALES</div>
          <div className={styles["stats-content"]}>
            <b>{`$ ${productStats[0].sold_profit_total.toFixed(2)}`}</b>
          </div>
          <div className={styles["stats-content"]}>
            <button>{`${productStats[0].sold_profit_percentage.toFixed(
              2
            )}%`}</button>
          </div>
        </div>
      </div>

      <div className={styles["stats-graph"]}>
        <div className={styles["stats-subcontainer"]}>
          <div className={styles["stats-desc"]}>SOLD</div>
          <div className={styles["stats-content"]}>
            <b>{`${productStats[0].sold_quantity_total.toFixed(2)} pcs`}</b>
          </div>
          <div className={styles["stats-content"]}>
            <button>{`${productStats[0].sold_quantity_percentage.toFixed(
              2
            )}%`}</button>
          </div>
        </div>
        <div className={styles["graph-container"]}>
          <Line
            data={config}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
              responsive: true,
              scales: {
                x: {
                  display: false,
                },
                y: {
                  display: false,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StockStats;
