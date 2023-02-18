import { Fragment } from "react";
import { useState } from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true);
  };

  const closeCartHandler = () => {
    setIsCartShown(false);
  };

  return (
    <Fragment>
      {isCartShown && <Cart onCloseCart={closeCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
