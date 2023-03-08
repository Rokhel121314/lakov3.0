import { useState } from "react";

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = () => {
    setValue((prev) => !prev);
  };

  const toggleTrueOnly = () => {
    setValue(true);
  };

  const toggleFalseOnly = () => {
    setValue(false);
  };
  return { value, toggle, toggleTrueOnly, toggleFalseOnly };
};

export default useToggle;
