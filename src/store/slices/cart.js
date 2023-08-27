import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "CART",
  initialState: {
    items: {},
    totalPrice: 0,
    totalCount: 0,
  },
  reducers: {
    ADD_PIZZA_CART(state, action) {
      !state.items[action.payload.id]
        ? (state.items[action.payload.id] = [action.payload])
        : state.items[action.payload.id].push(action.payload);

      state.totalCount = [].concat.apply([], Object.values(state.items)).length;
      state.totalPrice = [].concat
        .apply([], Object.values(state.items))
        .reduce((a, b) => a + b.price, 0);
    },
    CLEAR_CART(state) {
      if (window.confirm("Вы действительно хотите очистить корзину?")) {
        state.items = {};
        state.totalCount = 0;
        state.totalPrice = 0;
      }
    },
    DELETE_CART(state, action) {
      if (window.confirm("Вы действительно хотите очистить пиццы?")) {
        state.totalCount -= state.items[action.payload.id].length;
        delete state.items[action.payload.id];
        state.totalPrice = [].concat
          .apply([], Object.values(state.items))
          .reduce((a, b) => a + b.price, 0);
      }
    },
    MINUS_PIZZA(state, action) {
      state.items[action.payload.id] &&
      state.items[action.payload.id].length !== 1
        ? state.items[action.payload.id].pop()
        : (state.items[action.payload.id] = state.items[action.payload.id]);

      state.totalCount = [].concat.apply([], Object.values(state.items)).length;

      state.totalPrice = [].concat
        .apply([], Object.values(state.items))
        .reduce((a, b) => a + b.price, 0);
    },
    PLUS_PIZZA(state, action) {
      state.items[action.payload.id].push(state.items[action.payload.id][0]);
      state.totalCount = state.totalCount = [].concat.apply(
        [],
        Object.values(state.items)
      ).length;
      state.totalPrice = [].concat
        .apply([], Object.values(state.items))
        .reduce((a, b) => a + b.price, 0);
    },
  },
});

export const {
  ADD_PIZZA_CART,
  CLEAR_CART,
  MINUS_PIZZA,
  PLUS_PIZZA,
  DELETE_CART,
} = cart.actions;
export default cart.reducer;

//сделать чтобы при нажатии на минус количество уменьшалось только на конкретной пицце
