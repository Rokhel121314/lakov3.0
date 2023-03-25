import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="slogan-container">
        <div className="slogan">
          WE MAKE <br /> BUSINESS EASY!
        </div>
        <div className="sub-text">
          Lorem ipsum dolor the quick <br /> brown fox jumps over the lazy{" "}
          <br /> dog.
        </div>
        <div className="signup-button">
          <div>Dont have an account?</div>
          <br />
          <NavLink className="signup-link" to={"/register"}>
            Sign Up Now!
          </NavLink>
        </div>
      </div>
      <div className="landing-image-container">
        <img
          className="landing-image"
          src={require("../../assests/images/features.png")}
        />
        <div className="under-shadow"></div>
      </div>
    </div>
  );
}

export default Home;
