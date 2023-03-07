import React from "react";
import styles from "./stock.module.css";
import StockGridView from "./StockGridView";
import StockListView from "./StockListView";
import useToggle from "../../hooks/useToggle";
import { FiGrid, FiList } from "react-icons/fi";

function StockDisplay({ addOrShow, toggleFalseOnly, toggleTrueOnly }) {
  const { value, toggle } = useToggle();
  return (
    <div className={styles["stocklist-container"]}>
      {/* UTILITY BUTTONS such as ADD BUTTON AND SEARCH FIELD */}
      <header className={styles["stocklist-header"]}>
        <div className={styles["searchfield-container"]}>SEARCH</div>
        <div className={styles["addbutton-container"]}>
          <button onClick={toggle}>{value ? <FiGrid /> : <FiList />}</button>
          <button onClick={toggleFalseOnly} disabled={!addOrShow}>
            ADD ITEM
          </button>
        </div>
      </header>

      {/* DISPLAY OPTION GRID AND LIST */}
      {value ? (
        <StockGridView addOrShow={addOrShow} toggleTrueOnly={toggleTrueOnly} />
      ) : (
        <StockListView addOrShow={addOrShow} toggleTrueOnly={toggleTrueOnly} />
      )}
    </div>
  );
}

export default StockDisplay;
