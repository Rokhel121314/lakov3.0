import React from "react";
import "./home.css";

function Feature() {
  return (
    <div id="features" className="feature-container">
      <div className="content-header">FEATURES</div>

      <div className="content-container-right">
        <div className="image-container-right">
          <img src={require("../../assests/features 2/stocks.png")} alt="" />
        </div>
        <div className="description-container-right">
          <div className="description-wrapper-right">
            <div className="description-header-right">STOCKS</div>
            <div className="description-content-right">
              Lako provides simple stocks system allows users to manage and
              track items in inventory, including stock levels, sales, and
              purchases. Can monitor low inventory or out-of-stock items.
            </div>
          </div>
        </div>
      </div>

      <div className="content-container-left">
        <div className="description-container-left">
          <div className="description-wrapper-left">
            <div className="description-header-left">{`Point of Sale (POS)`}</div>
            <div className="description-content-left">
              Lako provides simple pos counter that allows user to process
              products to be sold, computes total items, sold amount, and
              payment change. Update items quantity upon purchase.
            </div>
          </div>
        </div>
        <div className="image-container-left">
          <img src={require("../../assests/features 2/pos.png")} alt="" />
        </div>
      </div>

      <div className="content-container-right">
        <div className="image-container-right">
          <img
            src={require("../../assests/features 2/transactions.png")}
            alt=""
          />
        </div>
        <div className="description-container-right">
          <div className="description-wrapper-right">
            <div className="description-header-right">TRANSACTIONS</div>
            <div className="description-content-right">
              Lako provides simple transactions summary that allows user to
              review past transactions print receipts, filter transactions by
              date range, can search specific transaction by id and sort
              transaction by sold quantity, sold amount and transaction date.
            </div>
          </div>
        </div>
      </div>

      <div className="content-container-left">
        <div className="description-container-left">
          <div className="description-wrapper-left">
            <div className="description-header-left">SALES</div>
            <div className="description-content-left">
              Lako provides simple sales summary for total sales revenue
              generated during a period set, comparison of sales performance per
              day, provides top selling products and sales chart on sales per
              day.
            </div>
          </div>
        </div>
        <div className="image-container-left">
          <img src={require("../../assests/features 2/sales.png")} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Feature;
