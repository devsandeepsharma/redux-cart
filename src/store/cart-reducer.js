import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    items: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        toggleCart(state) {state.isOpen = !state.isOpen},
        addItems(state, actions) {
            const currentIndex = state.items.findIndex(item => item.item === actions.payload.item);

            if(currentIndex !== -1) {
                const updatedItems = [...state.items];
                updatedItems[currentIndex] = {
                    ...updatedItems[currentIndex],
                    quantity: updatedItems[currentIndex].quantity + 1,
                    totalPrice: updatedItems[currentIndex].totalPrice + updatedItems[currentIndex].price
                }

                state.items = updatedItems;
            } else {
                state.items.push({...actions.payload, quantity: 1, totalPrice: actions.payload.price});
            }
        },
        removeItems(state, actions) {
            const currentIndex = state.items.findIndex(item => item.item === actions.payload.item);

            let updatedItems = [...state.items];
            if(updatedItems[currentIndex].quantity === 1) {
                updatedItems = updatedItems.filter(item => item.item !== actions.payload.item);
                state.items = updatedItems;
            } else {
                updatedItems[currentIndex] = {
                    ...updatedItems[currentIndex],
                    quantity: updatedItems[currentIndex].quantity - 1,
                    totalPrice: updatedItems[currentIndex].totalPrice - updatedItems[currentIndex].price
                }
                state.items = updatedItems;
            }
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;