import React, { useState, useEffect } from "react";

const useTooltip = (initialState = false) => {
  const [isVisible, setIsVisible] = useState(initialState);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  useEffect(() => {
    const handleHide = () => {
      hideTooltip();
    };

    document.addEventListener("click", handleHide);

    return () => {
      document.removeEventListener("click", handleHide);
    };
  }, []);

  return { isVisible, showTooltip, hideTooltip };
};

export default useTooltip;
