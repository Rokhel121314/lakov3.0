import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetUserData } from "../redux/userSlice";

function useLogin() {
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  const [loginData, setLoginData] = useState({
    user_name: "",
    user_password: "",
  });

  const persistUserData = JSON.parse(localStorage.getItem("userData"));

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const resetPasswordInput = () => {
    setLoginData({ ...loginData, user_password: "" });
  };
  // USER LOG OUT FUNCTION
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await Axios.get("http://localhost:3001/users/logout", {
        withCredentials: true,
      });
      setStatus("LOGGED OUT");
      localStorage.removeItem("userData");
      dispatch(resetUserData());
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.log("error", error);
    }
  };

  return {
    handleChange,
    handleLogout,
    status,
    loginData,
    persistUserData,
    resetPasswordInput,
  };
}

export default useLogin;
