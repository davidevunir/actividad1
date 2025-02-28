import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (cartItems.length === 0) {
      setIsOpen(false);
    }
  }, [cartItems.length]);

  const addToCart = (book) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === book.id);
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...currentItems, { ...book, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (bookId) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === bookId);
      if (existingItem && existingItem.quantity > 1) {
        return currentItems.map((item) =>
          item.id === bookId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }

      return currentItems.filter((item) => item.id !== bookId);
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        isOpen,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        toggleCart,
        total,
        search,
        setSearch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
