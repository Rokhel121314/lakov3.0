import { useState } from "react";

const useToggle3 = (initialValue = false) => {
  const [value3, setValue3] = useState(initialValue);
  const toggle3 = () => {
    setValue3((prev) => !prev);
  };

  const toggleTrueOnly3 = () => {
    setValue3(true);
  };

  const toggleFalseOnly3 = () => {
    setValue3(false);
  };
  return { value3, toggle3, toggleTrueOnly3, toggleFalseOnly3 };
};

export default useToggle3;
