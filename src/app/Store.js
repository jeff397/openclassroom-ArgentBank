import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../slices/loginSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
