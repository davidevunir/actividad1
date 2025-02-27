import {createContext, useContext, useEffect, useState} from 'react';

import {useGetBooksQuery} from "../service/api/books.js";

const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  //const [filteredBooks, setFilteredBooks] = useState(books);
  const { data: booksApi, error, isLoading, refetch } = useGetBooksQuery();

  console.log(booksApi, booksApi);

  //const handleSearch = (text) => {
  //  if (!text) {
  //    setFilteredBooks(books);
  //    return;
  //  }

  //  setFilteredBooks(books.filter(book => book.title.toLowerCase().includes(text.toLowerCase())));
  //}

  useEffect(() => {
    if (cartItems.length === 0) {
      setIsOpen(false);
    }
  }, [cartItems.length]);

  const addToCart = (book) => {
    setCartItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === book.id);
      if (existingItem) {
        return currentItems.map(item => item.id === book.id ?
            {...item, quantity: item.quantity + 1} :
            item);
      }

      return [...currentItems, {...book, quantity: 1}];
    });
    setIsOpen(true);
  }

  const removeFromCart = (bookId) => {
    setCartItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === bookId);
      if (existingItem && existingItem.quantity > 1) {
        return currentItems.map(item => item.id === bookId ?
            {...item, quantity: item.quantity - 1} :
            item);
      }

      return currentItems.filter(item => item.id !== bookId);
    });
  }

  const clearCart = () => {
    setCartItems([]);
  }

  const toggleCart = () => {
    setIsOpen(!isOpen);
  }

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
      <CartContext.Provider value={{
        isOpen,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        toggleCart,
        total,
        //handleSearch,
        //filteredBooks
        }}>
        {children}
      </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
