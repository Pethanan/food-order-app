import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = () => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        { key: Math.random(), id: "1", amount: 2, name: "SomeFood", Price: 20 },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>INR 20</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
