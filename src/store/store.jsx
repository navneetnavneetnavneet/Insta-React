import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import postSlice from "./reducers/postSlice";
import chatSlice from "./reducers/chatSlice";
import messageSlice from "./reducers/messageSlice";
import storySlice from "./reducers/storySlice";

export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    postReducer: postSlice,
    chatReducer: chatSlice,
    messageReducer: messageSlice,
    storyReducer: storySlice,
  },
});
