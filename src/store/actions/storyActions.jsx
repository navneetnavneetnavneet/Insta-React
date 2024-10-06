import axios from "../../utils/axios";
import { setStories } from "../reducers/storySlice";
import { asyncLoadUser } from "./userActions";

export const asyncGetAllStories = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/story");
    console.log(data);
    dispatch(setStories(data.stories));
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncUploadStory =
  ({ storyUrl }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post(
        "/story/upload-story",
        { storyUrl },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch(asyncGetAllStories());
      dispatch(asyncLoadUser());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncLikeStory = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/story/like/${id}`);
    dispatch(asyncGetAllStories());
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncDeleteStory = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/story/delete/${id}`);
    dispatch(asyncGetAllStories());
    dispatch(asyncLoadUser());
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }
};
