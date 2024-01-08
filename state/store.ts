import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slice/appSlice";
import appApi from "./slice/apiSlice";
import userSlice from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    [appApi.reducerPath]: appApi.reducer,
    user: userSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([appApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
