import { createContext, useState } from "react";

export const Data = createContext({});

const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [cartItems, setCartItems] = useState([]);

  /* ----- add to Chart ---------- */
  const addToCart = (item) => {
    const isExist = cartItems.find((cart) => cart.id === item.id);

    if (isExist) {
      setCartItems(
        cartItems.map((cartItem) => (cartItem.id === item.id ? item : cartItem))
      );
    } else {
      setCartItems((prev) => [...prev, item]);
    }
  };

  /* ----- remove to Chart ---------- */
  const removeFromCart = (id) => {
    const cart = cartItems.filter((cartItem) => cartItem.id !== id);
    setCartItems(cart);
  };

  return (
    <Data.Provider
      value={{
        auth,
        setAuth,
        cartItems,
        addToCart,
        removeFromCart,
        cartItemsLength: cartItems.length,
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default UserProvider;
