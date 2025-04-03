import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-reducer";
import "./header.css";

const Header = () => {

    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(cartActions.toggleCart());
    }

    return (
        <header>
            <h1>Redux Cart</h1>
            <button className="btn-primary" onClick={handleOnClick}>My Cart <span>0</span></button>
        </header>
    )
}

export default Header;