import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    store_name: "",
    user_name: "",
    user_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post("http://localhost:3001/users", formData);
      console.log("USER REGISTERED");

      setFormData({
        ...formData,
        first_name: "",
        last_name: "",
        store_name: "",
        user_name: "",
        user_password: "",
      });

      navigate("/login");
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return { formData, handleChange, handleSubmit };
}

export default useRegister;
