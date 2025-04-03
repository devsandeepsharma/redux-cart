import "./cart.css";

const Cart = () => {
    return (
        <div className="cart">
            <h2>Your Shopping Cart</h2>
            <ul className="cart-container">
                <li>
                    <div className="cart-card">
                        <div className="flex-container">
                            <h3 className="item_name">Item Name</h3>
                            <p className="item_price">Rs. 56 <span>(Rs. 5/- Item)</span></p>
                        </div>
                        <div className="flex-container">
                            <p className="item_amount">3x</p>
                            <div className="flex-container">
                                <button className="item_btn">+</button>
                                <button className="item_btn">-</button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Cart;