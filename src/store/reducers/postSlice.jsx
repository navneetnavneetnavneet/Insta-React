import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    allPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { allPosts } = postSlice.actions;
export default postSlice.reducer;
