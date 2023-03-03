import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const [status, setStatus] = useState("");
  const [user, setUser] = useState({ user_name: "", user_password: "" });

  const userData = JSON.parse(localStorage.getItem("userData"));

  const navigate = useNavigate();

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
          setStatus("LOGGED IN SUCCESSFULLY");
          localStorage.setItem("userData", JSON.stringify(response.data.user));
          navigate("/lako/stocks");
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

  // USER LOG OUT FUNCTION
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await Axios.get("http://localhost:3001/users/logout", {
        withCredentials: true,
      });
      setStatus("LOGGED OUT");
      localStorage.removeItem("userData");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.log("error", error);
    }
  };

  return {
    handleChange,
    handleLogin,
    handleLogout,
    status,
    userData,
    user,
  };
}

export default useLogin;
