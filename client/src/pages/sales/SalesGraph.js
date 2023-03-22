import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useSelector } from "react-redux";
import styles from "./sales.module.css";

function SalesGraph({ chartSelect }) {
  const { salesDataByDate } = useSelector((state) => state.transaction);
  const [chartData, setChartData] = useState({
    labels: salesDataByDate?.map((date) => date.transaction_date),
    datasets: [
      {
        label: "SALES BY SOLD QUANTITY",
        data: salesDataByDate.map((qty) => qty.sales_total_quantity),
        backgroundColor: ["#344c57"],
        borderColor: ["#344c57"],
      },
    ],
  });

  useEffect(() => {
    if (chartSelect === "profit") {
      setChartData({
        labels: salesDataByDate.map((date) => date.transaction_date),
        datasets: [
          {
            label: "SALES BY SOLD PROFIT",
            data: salesDataByDate.map((profit) => profit.sales_total_profit),
            backgroundColor: ["#344c57"],
            borderColor: ["#344c57"],
          },
        ],
      });
    } else if (chartSelect === "quantity") {
      setChartData({
        labels: salesDataByDate.map((date) => date.transaction_date),
        datasets: [
          {
            label: "SALES BY SOLD QUANTITY",
            data: salesDataByDate.map((qty) => qty.sales_total_quantity),
            backgroundColor: ["#344c57"],
            borderColor: ["#344c57"],
          },
        ],
      });
    } else if (chartSelect === "amount") {
      setChartData({
        labels: salesDataByDate.map((date) => date.transaction_date),
        datasets: [
          {
            label: "SALES BY SOLD AMOUNT",
            data: salesDataByDate.map((amount) => amount.sales_total_amount),
            backgroundColor: ["#344c57"],
            borderColor: ["#344c57"],
          },
        ],
      });
    }
  }, [chartSelect, salesDataByDate]);

  return (
    <Line
      className={styles["chart-graph"]}
      data={chartData}
      options={{ responsive: true }}
    />
  );
}

export default SalesGraph;
