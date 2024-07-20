import axios from "../../utils/axios";
import { allPosts } from "../reducers/postSlice";

export const asyncGetAllPost = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/post");
    console.log(data);
    dispatch(allPosts(data.posts));
  } catch (error) {
    console.log(error.response.data);
  }
};
