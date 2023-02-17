import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../Assets/meal.jpg";
import HeaderCartButton from "./HeaderCartButton";
import Modal from "../UI/Modal";

const Header = (props) => {
  return (
    <Modal>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="meal" />
      </div>
    </Modal>
  );
};

export default Header;
