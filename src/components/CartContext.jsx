import {createContext, useContext, useEffect, useState} from 'react';
import {books} from "../data/booksData.js";

const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (text) => {
    if (!text) {
      setFilteredBooks(books);
      return;
    }
    setFilteredBooks(books.filter(book => book.title.toLowerCase().includes(text.toLowerCase())));
  }

  useEffect(() => {
    if (cartItems.length === 0) {
      setIsOpen(false);
    }
  }, [cartItems.length]);

  const addToCart = (book) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === book.id);
      if (existingItem) {
        return prevItems.map(item => item.id === book.id ? {...item, quantity: item.quantity + 1} : item);
      }

      return [...prevItems, {...book, quantity: 1}];
    });
    setIsOpen(true);
  }

  const removeFromCart = (bookId) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === bookId);
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map(item => item.id === bookId ? {...item, quantity: item.quantity - 1} : item);
      }

      return prevItems.filter(item => item.id !== bookId);
    });
  }

  const toggleCart = () => {
    setIsOpen(!isOpen);
  }

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
      <CartContext.Provider value={{isOpen, cartItems, addToCart, removeFromCart, toggleCart, total, handleSearch, filteredBooks}}>
        {children}
      </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
