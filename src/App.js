import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";

const App = () => {

  const isOpen = useSelector(state => state.cart.isOpen);

  return (
    <>
      <Header />
      {isOpen && <Cart />}
      <Products />
    </>
  )
}

export default App;