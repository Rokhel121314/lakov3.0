import React, { useRef } from "react";
import styles from "./transaction.module.css";
import { useReactToPrint } from "react-to-print";
import { TransactionToPrint } from "./TransactionToPrint";

function TransactionDetail() {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className={styles["detail-container"]}>
      <TransactionToPrint ref={componentRef} />
      <div className={styles["print-button"]}>
        <button onClick={handlePrint}>PRINT RECEIPT</button>
      </div>
    </div>
  );
}

export default TransactionDetail;
