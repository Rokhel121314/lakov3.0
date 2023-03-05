import React from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { FiXCircle } from "react-icons/fi";
import { resetUserData } from "../redux/userSlice";

function RegisterPopupFail() {
  const dispatch = useDispatch();
  const closePopUp = async () => {
    dispatch(resetUserData());
  };

  return (
    <div className={styles["registerpopup-container"]}>
      <div className={styles["registerpopup-box"]}>
        <div className={styles["registerpopup-status-fail"]}>
          <FiXCircle className={styles["fail-icon"]} />
          <div className={styles["success-text"]}>FAILED</div>
        </div>
        <div className={styles["registerpopup-detail"]}>
          <div className={styles["detail"]}>
            <div className={styles["detail-1"]}>
              Sorry, the username your are
            </div>
            <div className={styles["detail-1"]}>
              trying to register is already in use
            </div>
            <div>please try other username.</div>
          </div>

          <button
            className={styles["continue-button-fail"]}
            onClick={closePopUp}>
            GO BACK
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPopupFail;
