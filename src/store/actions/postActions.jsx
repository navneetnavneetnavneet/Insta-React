import { allPosts } from "../reducers/postSlice";
import { asyncLoadUser } from "../actions/userActions";
import axios from "../../utils/axios";

export const asyncFectchAllPosts = () => async (dispatch, getState) => {
  try {
    const { data, status } = await axios.get("/posts");

    if (data && status === 200) {
      await dispatch(allPosts(data));
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncUploadPost =
  ({ caption, media }) =>
  async (dispatch, getState) => {
    try {
      const { data, status } = await axios.post(
        "/posts/upload-post",
        {
          caption,
          media,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (data && status === 201) {
        await dispatch(asyncFectchAllPosts());
        await dispatch(asyncLoadUser());
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncLikePost = (postId) => async (dispatch, getState) => {
  try {
    const { data, status } = await axios.get(`/posts/like-post/${postId}`);

    if (data && status === 200) {
      await dispatch(asyncFectchAllPosts());
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncSavePost = (postId) => async (dispatch, getState) => {
  try {
    const { data, status } = await axios.get(`/posts/save-post/${postId}`);

    if (data && status === 200) {
      await dispatch(asyncFectchAllPosts());
      await dispatch(asyncLoadUser());
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncDeletePost = (postId) => async (dispatch, getState) => {
  try {
    const { data, status } = await axios.get(`/posts/delete-post/${postId}`);

    if (data && status === 200) {
      await dispatch(asyncFectchAllPosts());
      await dispatch(asyncLoadUser());
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncCommentPost =
  (postId, comment) => async (dispatch, getState) => {
    try {
      const { data, status } = await axios.post(
        `/posts/comment-post/${postId}`,
        {
          comment,
        }
      );

      if (data && status === 200) {
        await dispatch(asyncFectchAllPosts());
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
