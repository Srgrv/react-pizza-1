import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const HomePageSlice = createSlice({
  name: "home",
  initialState: {
    pizzas: [],
    isLoaded: false,
    availableTypes: ["тонкое", "традиционное"],
    availableSizes: [26, 30, 40],
  },
  reducers: {
    setPizzas: (state, action) => {
      state.pizzas = action.payload;
      state.isLoaded = true;
    },
    // setLoaded: (state, action) => {
    //   state.isLoaded = action.payload;
    // },
  },
  extraReducers: (build) => {
    build.addCase(getPizzas.pending, (state) => {
      state.isLoaded = true;
    });
    build.addCase(getPizzas.fulfilled, (state) => {
      state.isLoaded = false;
    });
  },
});

export const getPizzas = createAsyncThunk(
  "pizzas/getPizzas",
  async ({ category, sortBy }, { dispatch }) => {
    console.log(category, sortBy);
    const response = await axios.get(
      `http://localhost:3001/pizzas?${
        category !== null ? `category=${category}` : ""
      }&_sort=${sortBy}&_order=asc`
    );
    // dispatch(setLoaded(is));
    dispatch(setPizzas(response.data));
    // dispatch(setLoaded(false));
  }
);

const { setPizzas } = HomePageSlice.actions;
export default HomePageSlice.reducer;
