import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-reducer";
import "./products.css";

const data = [
    {
        id: 0,
        item: "Mango",
        price: 20
    },
    {
        id: 1,
        item: "Apple",
        price: 35
    },
    {
        id: 2,
        item: "Banana",
        price: 10
    },
    {
        id: 3,
        item: "Orange",
        price: 15
    },
]

const Products = () => {

    const dispatch = useDispatch();

    const addToCart = (item) => {
        dispatch(cartActions.addItems(item));
    }

    return (
        <div className="product_card">
            <h2>Buy your Favroite Products</h2>
            <ul className="product_container">
                {
                    data.map(item => (
                        <li key={item.id}>
                            <div className="card">
                                <div>
                                    <h3>{item.item}</h3>
                                    <p>Rs. {item.price}/-</p>
                                </div>
                                <button onClick={() => addToCart(item)}>Add To Cart</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Products;