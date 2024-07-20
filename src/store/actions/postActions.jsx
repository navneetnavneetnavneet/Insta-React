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
  async () => {
    try {
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
      asyncGetAllPost();
      asyncLoadUser();
    } catch (error) {
      console.log(error.response.data);
    }
  };
