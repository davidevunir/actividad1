import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {useCart} from '../components/CartContext.jsx';

export const useSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const location = useLocation();
  const {handleSearch} = useCart();

  const executeSearch = () => {
    handleSearch(inputValue);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeSearch();
    }
  }

  useEffect(() => {
    setInputValue('');
    handleSearch('');
  }, [location.pathname]);

  return {inputValue, setInputValue, executeSearch, handleKeyDown}
}
