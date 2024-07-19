import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    load: (state, actions) => {
      state.user = actions.payload;
      state.isAuthenticated = true;
    },
    remove: (state, actions) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { load, remove } = userSlice.actions;
export default userSlice.reducer;
