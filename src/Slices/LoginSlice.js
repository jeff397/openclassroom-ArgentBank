import { createSlice } from "@reduxjs/toolkit";

const loginState = {
  token: localStorage.getItem("token"),
  isAuth: !!localStorage.getItem("token"),
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState: loginState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.body.token;
      state.isAuth = true;
      state.error = null;
      localStorage.setItem("token", state.token);
    },
    loginFail: (state, action) => {
      state.token = null;
      state.isAuth = false;
      state.error = action.payload;
      localStorage.removeItem("token");
    },
    logoutSuccess: (state) => {
      state.isAuth = false;
      state.error = null;
      localStorage.removeItem("token");
    },
    resetError: (state) => {
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFail, logoutSuccess, resetError } =
  loginSlice.actions;

export const loginReducer = loginSlice.reducer;
