import React, { useEffect } from "react";
import styles from "./user.module.css";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

function Login() {
  const navigate = useNavigate();
  const { handleChange, handleLogin, status, user, userData } = useLogin();
  useEffect(() => {
    if (userData) {
      navigate("/");
    } else return;
  }, []);

  return (
    <div className={styles["login-container"]}>
      <div className={styles["login-content"]}>
        <Link to={"/"} className={styles["login-content-header"]}>
          <img src={require("../../assests/logo/logo.png")} alt="logo" />
        </Link>
        <div className={styles["login-content-section"]}>
          <div className={styles["login-slogan"]}>
            We make your business easy!{" "}
          </div>
          <div className={styles["login-subtext"]}>
            A virtual center for designers, devs, PMs, and all design parties to
          </div>
          <div className={styles["login-subtext"]}>
            perform their duties in unison. At least 200% faster with Mockplus.
          </div>
        </div>
      </div>
      <div className={styles["login-form"]}>
        <div className={styles["form-container"]}>
          <div className={styles["form-header"]}>Sign in to LAKO</div>

          {/* FORM */}
          <form className={styles["form-subcontainer"]} onSubmit={handleLogin}>
            <div className={styles["form-inputcontainer"]}>
              <input
                className={styles["form-inputfield"]}
                type="text"
                name="user_name"
                value={user.user_name}
                onChange={handleChange}
                placeholder="Username"
              />
            </div>
            <div className={styles["form-inputcontainer"]}>
              <input
                className={styles["form-inputfield"]}
                type="password"
                name="user_password"
                value={user.user_password}
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
            <div
              className={
                status === "LOGGED IN SUCCESSFULLY"
                  ? styles["login-status-success"]
                  : styles["login-status-fail"]
              }>
              {status}
            </div>
            <div className={styles["form-inputcontainer"]}>
              <button type="submit" className={styles["form-button"]}>
                SIGN IN
              </button>
            </div>
          </form>
          <div className={styles["form-footer"]}>
            Don't have an account?{" "}
            <Link className={styles["form-link"]} to={"/register"}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
