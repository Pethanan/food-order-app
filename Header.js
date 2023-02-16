import React from "react";
import classes from "./Header.module.css"
import mealsImage from "../../Assets/meal.jpg"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {

    return (<React.Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton/>
        </header>
        <div lassName={classes["main-image"]}>
            <img src={mealsImage} alt="meal"/>
        </div>

    </React.Fragment>);

};

export default Header;