import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";

const App = () => {

  const isOpen = useSelector(state => state.cart.isOpen);

  return (
    <>
      <Header />
      {isOpen && <Cart />}
    </>
  )
}

export default App;