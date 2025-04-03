import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Notification from "./components/UI/Notification";
import { cartActions } from "./store/cart-reducer";

let initial = true;

const App = () => {

  const dispatch = useDispatch();

  const isOpen = useSelector(state => state.cart.isOpen);
  const cart = useSelector(state => state.cart.items);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const sendCartData = async () => {
      setNotification({status: "pending", msg: "Data is Sending..."});
      try {
        const res = await fetch("https://expense-tracker-3a081-default-rtdb.firebaseio.com/cart.json", {
          method: "PUT",
          body: JSON.stringify(cart)
        })

        if(!res.ok) {
          throw new Error("Sending Data Failed");
        }

        setNotification({status: "success", msg: "Data is Sent Succesfully..."});
      } catch (error) {
        setNotification({status: "failed", msg: "Data sending failed..."});
      }
    }
  
    if(initial) {
      initial = false;
      return;
    }
    sendCartData();
  }, [cart])

  useEffect(() => {
    const fetchCartData = async () => {
      setNotification({status: "pending", msg: "fetchng data..."});
      try {
        const res = await fetch("https://expense-tracker-3a081-default-rtdb.firebaseio.com/cart.json")

        if(!res.ok) {
          throw new Error("fetching Data Failed");
        }

        const data = await res.json();
        setNotification({status: "success", msg: "Data fetched Succesfully..."});
        dispatch(cartActions.replaceCart(data));
      } catch (error) {
        console.log(error.message)
        setNotification({status: "failed", msg: "fetching data failed..."});
      }
    }
  
    fetchCartData();
  }, [])

  return (
    <>
      {notification && <Notification data={notification} />}
      <Header />
      {isOpen && <Cart />}
      <Products />
    </>
  )
}

export default App;