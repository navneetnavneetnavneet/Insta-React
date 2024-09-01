import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  users: null,
  chatUser: null,
  onlineUsers: null,
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
      state.chatUser = null;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setChatUser: (state, action) => {
      state.chatUser = action.payload;
    },
    setOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },
  },
});

export const { load, remove, setUsers, setChatUser, setOnlineUsers } =
  userSlice.actions;
export default userSlice.reducer;
