import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const { isAuth } = require("./authenticate");

function useLogin() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const [user, setUser] = useState({ user_name: "", user_password: "" });
  const [userData, setUserData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // console.log("user", user);
  console.log("userData", userData);
  console.log("isLoggedIn", isLoggedIn);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  //   USER LOG IN FUNCTION
  const handleLogin = (e) => {
    e.preventDefault();
    try {
      Axios.post("http://localhost:3001/users/login", user, {
        withCredentials: true,
      })
        .then((response) => {
          setUserData(response.data.user);
          setIsLoggedIn(response.data.isLoggedIn);
          console.log("token", response.data.accessToken);
          setStatus("LOGGED IN SUCCESSFULLY");
          isAuth();
          setTimeout(() => {
            navigate("/lako");
          }, 1000);
        })
        .catch((error) => {
          const status = error.response.data.status;
          if (status === "not user") {
            setStatus("USER DOES NOT EXIST");
          } else if (status === "wrong password") {
            setStatus("WRONG PASSWORD");
          }
        });
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return {
    handleChange,
    handleLogin,
    isAuth,
    status,
    isLoggedIn,
    userData,
    user,
  };
}

export default useLogin;
