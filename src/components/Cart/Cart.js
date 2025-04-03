import { useSelector } from "react-redux";

import CartCard from "./CartCard";
import "./cart.css";

const Cart = () => {

    const productItems = useSelector(state => state.cart.items)

    return (
        <div className="cart">
            <h2>Your Shopping Cart</h2>
            {
                productItems.length > 0 ?
                    <ul className="cart-container">
                        {
                            productItems.map(items => (
                                <li key={items.id}>
                                    <CartCard items={items} />
                                </li>
                            ))
                        }
                    </ul>
                : <h2 className="text">Add Some Items...</h2>
            }
        </div>
    )
}

export default Cart;