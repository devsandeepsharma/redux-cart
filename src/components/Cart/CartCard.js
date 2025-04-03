import { useDispatch } from "react-redux"

import { cartActions } from "../../store/cart-reducer";

const CartCard = (props) => {

    const dispatch = useDispatch();

    const plusItems = (item) => {
        dispatch(cartActions.addItems(item));
    }

    const minusItems = (item) => {
        dispatch(cartActions.removeItems(item));
    }

    return (
        <div className="cart-card">
            <div className="flex-container">
                <h3 className="item_name">{props.items.item}</h3>
                <p className="item_price">Rs. {props.items.totalPrice} <span>(Rs. {props.items.price}/- Item)</span></p>
            </div>
            <div className="flex-container">
                <p className="item_amount">{props.items.quantity}x</p>
                <div className="flex-container">
                    <button className="item_btn" onClick={()=> {plusItems(props.items)}}>+</button>
                    <button className="item_btn" onClick={() => {minusItems(props.items)}}>-</button>
                </div>
            </div>
        </div>
    )
}

export default CartCard;