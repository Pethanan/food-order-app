import React from "react";
import CartContext from "./cart-context";

const ContextProvider = (props) => {
  const addItemToCartHandler = (item) => {};

  const deleteItemFromCartHandler = (id) => {};

  const cartContext = {
    total: 0,
    items: [],
    addItem: addItemToCartHandler,
    deleteItem: deleteItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
