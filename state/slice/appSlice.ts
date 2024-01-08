import { anime } from "./../../types/animeTypes";
import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  animes: anime[];
}

const initialState: AppState = {
  animes: [],
};

const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAnimes(state, action) {
      state.animes = action.payload;
    },
  },
});

export const { setAnimes } = AppSlice.actions;
export default AppSlice.reducer;
