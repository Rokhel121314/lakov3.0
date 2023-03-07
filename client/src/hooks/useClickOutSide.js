import { useState, useRef, useEffect } from "react";

function useClickOutside(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);
  const ref = useRef(null);

  const toggle = () => setIsOpen((prevState) => !prevState);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { isOpen, toggle, ref };
}

export default useClickOutside;
