import { useState } from "react";

const useToggle2 = (initialValue = false) => {
  const [value2, setValue2] = useState(initialValue);
  const toggle2 = () => {
    setValue2((prev) => !prev);
  };

  const toggleTrueOnly2 = () => {
    setValue2(true);
  };

  const toggleFalseOnly2 = () => {
    setValue2(false);
  };
  return { value2, toggle2, toggleTrueOnly2, toggleFalseOnly2 };
};

export default useToggle2;
