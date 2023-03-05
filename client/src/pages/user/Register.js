import React, { useEffect } from "react";
import styles from "./user.module.css";
import { Link, useNavigate } from "react-router-dom";
import useRegister from "../../hooks/useRegister";
import useLogin from "../../hooks/useLogin";
import { useDispatch, useSelector } from "react-redux";
import { sendRegister } from "../../redux/userSlice";
import RegisterPopupSuccess from "../../components/RegisterPopupSuccess";
import RegisterPopupFail from "../../components/RegisterPopupFail";

function Register() {
  const { formData, handleChange, resetFormData } = useRegister();
  const { persistUserData } = useLogin();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  // IF USER ALREADY LOGGED IN REDIRECT TO HOME PAGE
  useEffect(() => {
    if (persistUserData) {
      navigate("/");
    } else return;
  }, [persistUserData, navigate]);

  // RESETTING USERNAME AND PASSWORD INPUT
  useEffect(() => {
    if (!userData.message) {
      resetFormData();
    }
  }, [userData.message]);

  // DISPLAY COMPONENT
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
      <div className={styles["register-form"]}>
        <div className={styles["register-container"]}>
          <div className={styles["register-header"]}>Create your account</div>

          {/* FORM SECTION */}
          <form
            className={styles["register-subcontainer"]}
            onSubmit={async (e) => {
              e.preventDefault();
              dispatch(sendRegister(formData));
            }}>
            {/* FIRST NAME INPUT */}
            <div className={styles["register-inputcontainer"]}>
              <input
                className={styles["register-inputfield"]}
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required={true}
                placeholder="First Name"
              />
            </div>

            {/* LAST NAME INPUT */}
            <div className={styles["register-inputcontainer"]}>
              <input
                className={styles["register-inputfield"]}
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required={true}
                placeholder="Last Name"
              />
            </div>

            {/* STORE/BRAND INPUT */}
            <div className={styles["register-inputcontainer"]}>
              <input
                className={styles["register-inputfield"]}
                type="text"
                name="store_name"
                value={formData.store_name}
                onChange={handleChange}
                required={true}
                placeholder="Name of Store/Business"
              />
            </div>

            {/* USERNAME INPUT */}
            <div className={styles["register-inputcontainer"]}>
              <input
                className={styles["register-inputfield"]}
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                required={true}
                placeholder="Username"
              />
            </div>

            {/* PASSWORD INPUT */}
            <div className={styles["register-inputcontainer"]}>
              <input
                className={styles["register-inputfield"]}
                type="password"
                name="user_password"
                value={formData.user_password}
                onChange={handleChange}
                required={true}
                placeholder="Password"
              />
            </div>

            {/* CREATE ACCOUNT BUTTON */}
            <div className={styles["register-inputcontainer"]}>
              <button type="submit" className={styles["register-button"]}>
                CREATE ACCOUNT
              </button>
            </div>
          </form>
          {/* END OF FORM */}

          {/* GOT TO LOG IN PAGE */}
          <div className={styles["register-footer"]}>
            Already have an account?{" "}
            <Link className={styles["form-link"]} to={"/login"}>
              Sign in
            </Link>
          </div>
        </div>
      </div>
      {userData.first_name ? <RegisterPopupSuccess /> : ""}
      {userData.message ? <RegisterPopupFail /> : ""}
    </div>
  );
}

export default Register;
