import { configureStore } from "@reduxjs/toolkit";

import cartSliceReducer from "./cart-reducer";

const store = configureStore({
    reducer: {
        "cart": cartSliceReducer
    }
})

export default store;