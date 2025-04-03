import { useDispatch, useSelector } from "react-redux";

import { cartActions } from "../../store/cart-reducer";
import "./header.css";

const Header = () => {

    const dispatch = useDispatch();
    const productItems = useSelector(state => state.cart.items);

    const countItems = productItems.length > 0 ? productItems.reduce((total, items) => total + items.quantity, 0): 0;

    const handleOnClick = () => {
        dispatch(cartActions.toggleCart());
    }

    return (
        <header>
            <h1>Redux Cart</h1>
            <button className="btn-primary" onClick={handleOnClick}>My Cart <span>{countItems}</span></button>
        </header>
    )
}

export default Header;