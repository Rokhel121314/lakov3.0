import React from "react";
import styles from "./pos.module.css";
import { FiGrid, FiList } from "react-icons/fi";
import useToggle from "../../hooks/useToggle";
import { useDispatch, useSelector } from "react-redux";
import { filterProductData, searchFilter } from "../../redux/productSlice";
import PosGridView from "./PosGridView";
import PosListView from "./PosListView";

function PosProducts() {
  const { value, toggle } = useToggle();

  const { allProductData, filteredProductData } = useSelector(
    (state) => state.product
  );

  const dispatch = useDispatch();

  const productType = allProductData.map((type) => type.product_type);
  const filterValue = ["all", ...new Set(productType)];
  return (
    <div className={styles["posproduct-container"]}>
      {/* POS TOOLBAR */}
      <div className={styles["postoolbar-container"]}>
        <div className={styles["pos-search-view"]}>
          {/* GRID/LIST VIEW TOGGLE BUTTON */}
          <button className={styles["pos-change-view-button"]} onClick={toggle}>
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
          {/* POS SEARCH FILTER */}
          <input
            className={styles["pos-search-filter"]}
            type="search"
            placeholder="search product here..."
            onChange={(e) => {
              dispatch(searchFilter(e.target.value));
            }}
          />
        </div>
        <div className={styles["pos-filter-product"]}>
          {/* FILTER BUTTONS */}

          {filterValue.map((value, index) => {
            return (
              <button
                className={styles["filter-button"]}
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
      </div>
      <div className={styles["posproduct-display-container"]}>
        {value ? (
          <PosGridView filteredProductData={filteredProductData} />
        ) : (
          <PosListView filteredProductData={filteredProductData} />
        )}
      </div>
    </div>
  );
}

export default PosProducts;
