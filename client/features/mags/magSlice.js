

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  magazines: [],
  magazine: {},
};

const magazineSlice = createSlice({
  name: "magazine",
  initialState,
  reducers: {
    setMagazines: (state, action) => {
      state.magazines = action.payload;
    },
    setMagazine: (state, action) => {
      state.magazine = action.payload;
    },
  },
});

export const { setMagazines, setMagazine } = magazineSlice.actions;
export default magazineSlice.reducer;
