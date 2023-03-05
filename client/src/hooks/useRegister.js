import { useState } from "react";

function useRegister() {
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

  const resetFormData = (e) => {
    setFormData({ ...formData, user_name: "", user_password: "" });
  };

  return { formData, handleChange, resetFormData };
}

export default useRegister;
