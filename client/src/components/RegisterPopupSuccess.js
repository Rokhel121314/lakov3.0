import React from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FaRegCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { resetUserData } from "../redux/userSlice";

function RegisterPopupSuccess() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  const goToLogin = () => {
    navigate("/login");
    dispatch(resetUserData());
  };

  return (
    <div className={styles["registerpopup-container"]}>
      <div className={styles["registerpopup-box"]}>
        <div className={styles["registerpopup-status"]}>
          <FaRegCheckCircle className={styles["success-icon"]} />
          <div className={styles["success-text"]}>SUCCESS</div>
        </div>
        <div className={styles["registerpopup-detail"]}>
          <div className={styles["detail"]}>
            <div className={styles["detail-1"]}>
              Congratulations <b>{userData.first_name?.toUpperCase()}</b> your
              account
            </div>
            <div>has been successfully created.</div>
          </div>

          <button className={styles["continue-button"]} onClick={goToLogin}>
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPopupSuccess;
