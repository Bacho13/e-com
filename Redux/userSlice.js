import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfos: {},
  logIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.userInfos = action.payload;
      state.logIn = true;
      console.log(action.payload);
    },
    logOut: (state) => {
      state.userInfos = {};
      state.logIn = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
