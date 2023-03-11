import React from "react";
import styles from "./stock.module.css";
import StockGridView from "./StockGridView";
import StockListView from "./StockListView";
import useToggle from "../../hooks/useToggle";
import { FiGrid, FiList } from "react-icons/fi";
import { MdAddBusiness } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProductData,
  resetFilteredProductData,
  searchFilter,
} from "../../redux/productSlice";

function StockDisplay({ addOrShow, toggleFalseOnly, toggleTrueOnly }) {
  const { allProductData, filteredProductData } = useSelector(
    (state) => state.product
  );

  const dispatch = useDispatch();

  const productType = allProductData.map((type) => type.product_type);
  const filterValue = [...new Set(productType)];

  const { value, toggle } = useToggle();
  return (
    <div className={styles["stocklist-container"]}>
      {/* UTILITY BUTTONS such as ADD BUTTON AND SEARCH FIELD */}
      <header className={styles["stocklist-header"]}>
        <div className={styles["stocklist-toolbar-container"]}>
          <div className={styles["changeview-addproduct-container"]}>
            <button
              className={styles["addproduct-button"]}
              onClick={toggleFalseOnly}
              disabled={!addOrShow}>
              <MdAddBusiness className={styles["addproduct-icon"]} />
              ADD PRODUCT
            </button>
            <button className={styles["changeview-button"]} onClick={toggle}>
              {value ? (
                <>
                  <FiGrid className={styles["addproduct-icon"]} /> GRID
                </>
              ) : (
                <>
                  <FiList className={styles["addproduct-icon"]} /> LIST
                </>
              )}
            </button>
          </div>
          <div className={styles["searchbar-container"]}>
            <input
              type="search"
              placeholder="...search here"
              onChange={(e) => {
                dispatch(searchFilter(e.target.value));
              }}
            />
          </div>
        </div>

        {/* FILTER BUTTONS */}
        <div className={styles["stocklist-sort"]}>
          <button
            className={styles["sort-button"]}
            onClick={(e) => {
              e.preventDefault();
              dispatch(resetFilteredProductData());
            }}>
            all
          </button>
          {filterValue.map((value, index) => {
            return (
              <button
                className={styles["sort-button"]}
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(filterProductData(value));
                }}>
                {value}
              </button>
            );
          })}
        </div>
      </header>

      {/* DISPLAY OPTION GRID AND LIST */}
      {value ? (
        <StockGridView
          addOrShow={addOrShow}
          toggleTrueOnly={toggleTrueOnly}
          filteredProductData={filteredProductData}
        />
      ) : (
        <StockListView
          addOrShow={addOrShow}
          toggleTrueOnly={toggleTrueOnly}
          filteredProductData={filteredProductData}
        />
      )}
    </div>
  );
}

export default StockDisplay;
