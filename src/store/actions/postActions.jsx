import axios from "../../utils/axios";
import { allPosts } from "../reducers/postSlice";
import { asyncLoadUser } from "./userActions";

export const asyncGetAllPost = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/post");
    console.log(data);
    dispatch(allPosts(data.posts));
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncUploadPost =
  ({ image, caption }) =>
  async (dispatch, getState) => {
    try {
      const posts = getState().postReducer;
      console.log(posts);
      const { data } = await axios.post(
        "/post/upload",
        {
          image,
          caption,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch(asyncGetAllPost([...posts, data.post]));
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncLikePost = (postId) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/post/like/${postId}`);
    console.log(data);
    dispatch(asyncGetAllPost());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncSavePost = (postId) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/post/save/${postId}`);
    console.log(data);
    // dispatch(asyncGetAllPost());
    dispatch(asyncLoadUser());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncSendComment =
  (postId, comment) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post(`/post/comment/${postId}`, { comment });
      // console.log(data);
      dispatch(asyncGetAllPost());
    } catch (error) {
      console.log(error.response.data);
    }
  };
