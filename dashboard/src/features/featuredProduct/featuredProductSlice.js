

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  featuredProduct: {},
};

const featuredProductSlice = createSlice({
  name: "featuredProduct",
  initialState,
  reducers: {
    setFeaturedProduct: (state, action) => {
      state.featuredProduct = action.payload;
    },
  },
});

export const {  setFeaturedProduct } = featuredProductSlice.actions;
export default featuredProductSlice.reducer;
