import React, { useEffect } from "react";
import styles from "./pos.module.css";
import PosCounter from "../pos/PosCounter";
import PosProducts from "../pos/PosProducts";
import { useDispatch, useSelector } from "react-redux";
import { readAllProduct } from "../../redux/productSlice";
import useLogin from "../../hooks/useLogin";

function Pos() {
  const dispatch = useDispatch();
  const { persistUserData } = useLogin();
  const { productData } = useSelector((state) => state.product);
  const { counterItems } = useSelector((state) => state.counter);

  useEffect(() => {
    dispatch(readAllProduct(persistUserData.user_id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productData]);

  return (
    <div className={styles["pos-container"]}>
      <PosCounter />
      <PosProducts />
    </div>
  );
}

export default Pos;
