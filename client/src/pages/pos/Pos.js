import React from "react";
import styles from "./pos.module.css";
import PosCounter from "../pos/PosCounter";
import PosProducts from "../pos/PosProducts";

function Pos() {
  return (
    <div className={styles["pos-container"]}>
      <PosCounter />
      <PosProducts />
    </div>
  );
}

export default Pos;
