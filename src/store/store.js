import { configureStore } from "@reduxjs/toolkit";

//slices
import HomePageSlice from "./slices/HomePageSlice";
import filter from "./slices/filter";
import cart from "./slices/cart";

const store = configureStore({
  reducer: {
    home: HomePageSlice,
    filter: filter,
    cart: cart,
  },
});

export default store;
