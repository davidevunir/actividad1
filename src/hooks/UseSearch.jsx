import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../components/CartContext.jsx";

export const useSearch = () => {
  const location = useLocation();
  const [inputValue, setInputValue] = useState("");
  const { setSearch } = useCart();

  const executeSearch = () => {
    setSearch(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearch(inputValue);
    }
  };

  useEffect(() => {
    setInputValue("");
    setSearch("");
  }, [location.pathname]);

  return { inputValue, setInputValue, executeSearch, handleKeyDown };
};
