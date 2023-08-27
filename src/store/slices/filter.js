import { createSlice } from "@reduxjs/toolkit";

const filter = createSlice({
  name: "filter",
  initialState: {
    sortBy: "rating",
    category: null,
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
      console.log(action.payload);
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
  },
});

export const { setCategory, setSortBy } = filter.actions;
export default filter.reducer;

//сделал сортировку
