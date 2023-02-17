import React from "react";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const MealsList = DUMMY_MEALS.map((m) => (
    <>
      <li>
        <div>
          <b>{m.name}</b>
          <p>
            <i>{m.description}</i>
          </p>
          <p className={classes.price}>INR{m.price}</p>
        </div>
        <form>
          <label>Amount</label>
          <input type="number"></input>
          <button type="submit">Add</button>
        </form>
      </li>
      <hr />
    </>
  ));

  return (
    <section className={classes.meals}>
      <ul>{MealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
