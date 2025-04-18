# Redux Cart

This project implements a **Redux-powered cart system** for an e-commerce-like application. Users can browse products, add them to the cart, update quantities (+/-), and see the cart dynamically updated in real-time. The cart data is persisted and synced with Firebase's **Real-Time Database**. The application ensures a smooth, responsive, and reactive user experience by combining **React** with **Redux** and real-time data handling via Firebase.

## Core Features:

* **Add to Cart :** Users can add items to their cart.

* **Update Cart Quantities :** Users can increase or decrease the quantity of products in the cart.

* **Real-time Database Sync :** All changes made to the cart are immediately synced to Firebase in real-time.

* **Notification System :** Users are notified when the cart data is successfully saved or when an error occurs.

* **Cart View :** View and manage the cart with the current list of products, quantities, and total prices.

## Learnings

This project helped me gain a better understanding of the following concepts:

* **Redux for State Management:** How to manage global state, especially complex ones like the cart, with Redux.

* **React-Redux Integration:** Using the `useSelector` and `useDispatch` hooks to connect React components to the Redux store and update the UI based on the state.

* **React Hooks:** Leveraging `useState`, `useEffect`, and `useRef` for managing UI state and side effects.

*** Firebase Real-Time Database:** Storing and retrieving data in real-time with Firebase. Understanding the real-time nature of Firebase for live synchronization of data across all users.

* **Async Operations in React:** How to handle asynchronous operations such as fetching data or sending data to Firebase, and managing loading/error states with notifications.

## Usage of Redux with Firebase API

In this project, we integrate Redux with Firebase to manage the cart state. The main flow is:

1. **State Management with Redux:**

* The state is managed globally in the Redux store using createSlice from @reduxjs/toolkit.

* Actions like addItems, removeItems, and replaceCart are dispatched to modify the cart items.

2. **Firebase Real-Time Database:**

* On any change in the cart, we use a useEffect hook to send the entire cart data to Firebase and replace the existing data.

* Firebase's Real-Time Database ensures that updates are propagated immediately, ensuring all users see the latest cart data.

3. **Handling Asynchronous Data:**

* Fetching Cart Data: When the app is loaded, the cart data is fetched from Firebase and placed into the Redux store, replacing the current cart.

* Sending Cart Data: On any cart change, the entire cart data is replaced in Firebase, ensuring that it reflects the latest state.