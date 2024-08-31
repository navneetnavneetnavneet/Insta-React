import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import postSlice from "./reducers/postSlice";
import messageSlice from "./reducers/messageSlice";
import socketSlice from "./reducers/socketSlice";

export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    postReducer: postSlice,
    messageReducer: messageSlice,
    socketReducer: socketSlice,
  },
});
