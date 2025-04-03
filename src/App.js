import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import { useEffect, useState } from "react";
import Notification from "./components/UI/Notification";

let initial = true;

const App = () => {

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