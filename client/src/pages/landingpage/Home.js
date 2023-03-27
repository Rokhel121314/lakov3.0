import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css";
import useLogin from "../../hooks/useLogin";
import Feature from "./Feature";

function Home() {
  const { persistUserData } = useLogin();

  return (
    <>
      <div className="home-container" id="home">
        <div className="slogan-container">
          <div className="slogan">
            WE MAKE <br /> BUSINESS EASY!
          </div>
          <div className="sub-text">
            Effortlessly manage inventory, POS and sales with <b>LAKO</b>.
            Optimize stock levels, increase profits.
          </div>
          {persistUserData ? (
            <NavLink className="" to={"/lako/sales"}>
              GO TO LAKO ACCOUNT
            </NavLink>
          ) : (
            <>
              {" "}
              <div className="signup-button">
                <div>Dont have an account?</div>
                <br />
                <NavLink className="signup-link" to={"/register"}>
                  Sign Up Now!
                </NavLink>
              </div>
              <div className="signin-button">
                <NavLink className="signup-link" to={"/login"}>
                  Sign In
                </NavLink>
              </div>
            </>
          )}
        </div>
        <div className="landing-image-container">
          <img
            className="landing-image"
            src={require("../../assests/images/features.png")}
            alt=""
          />
          <div className="under-shadow"></div>
        </div>
      </div>
      <Feature />
    </>
  );
}

export default Home;
