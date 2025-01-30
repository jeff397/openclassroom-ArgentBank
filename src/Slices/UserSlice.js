import { createSlice } from "@reduxjs/toolkit";

const userState = {
  email: null,
  firstName: null,
  lastName: null,
  id: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    userLogout: (state) => {
      state.email = null;
      state.firstName = null;
      state.lastName = null;
      state.id = null;
      state.error = null;
    },
  },
});

export const { userLogout } = userSlice.actions;

export const userReducer = userSlice.reducer;
