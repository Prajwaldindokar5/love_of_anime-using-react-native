import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../types/response";

const initialState: UserState = {
  user: null,
  token: null,
  isLogin: false,
  updateUser: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    clearUserState(state) {
      state.user = null;
      state.token = null;
      state.isLogin = false;
      state.updateUser = false;
    },
    setLoginStatus(state, action) {
      state.isLogin = true;
    },
    setUpdateUser(state, action) {
      state.updateUser = action.payload;
    },
  },
});

export const {
  setUser,
  setToken,
  clearUserState,
  setLoginStatus,
  setUpdateUser,
} = userSlice.actions;

export default userSlice.reducer;
