import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  email: null,
  firstName: null,
  lastName: null,
  userName: null,
  id: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogout: (state) => {
      state.email = null;
      state.firstName = null;
      state.lastName = null;
      state.id = null;
      state.error = null;
    },

    userSuccess: (state, action) => {
      state.profile = action.payload;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.id = action.payload.id;
      state.error = null;
    },

    updateUserProfile: (state, action) => {
      state.profile = action.payload;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
    },

    userFail: (state) => {
      state.email = null;
      state.firstName = null;
      state.lastName = null;
      state.id = null;
    },
  },
});

export const { userLogout, userSuccess, userFail, updateUserProfile } =
  userSlice.actions;
export const userReducer = userSlice.reducer;

export default userSlice.reducer;
