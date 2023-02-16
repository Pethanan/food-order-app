import React from "react";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
    return (
        <button className={classes.button}>
            <span className={classes.badge}>
                <CartIcon/>
            </span>
            <sapan>Your Cart</sapan>
            <sapan className={classes.badge}>0</sapan>
        </button>
    );
}

export default HeaderCartButton;