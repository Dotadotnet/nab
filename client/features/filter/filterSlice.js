import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: null,
  store: null,
  priceRange: { min: 500, max: 50000 },
  dateRange: { startDate: null, endDate: null },
  dynamicFilters: {}
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },

    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },

    setDateRange: (state, action) => {
      state.dateRange = action.payload;
    },

    setDynamicFilter: (state, action) => {
      const { key, value } = action.payload;

      if (
        value === null ||
        value === undefined ||
        value === "" ||
        (Array.isArray(value) && value.length === 0)
      ) {
        delete state.dynamicFilters[key];
        return;
      }

      state.dynamicFilters[key] = value;
    },

    clearFilter: (state) => {
      state.category = null;
      state.priceRange = { min: 50, max: 50000 };
      state.dateRange = { startDate: null, endDate: null };
      state.dynamicFilters = {};
    }
  }
});

export const { clearFilter, setCategory, setDateRange, setDynamicFilter, setPriceRange } =
  filterSlice.actions;
export default filterSlice.reducer;
