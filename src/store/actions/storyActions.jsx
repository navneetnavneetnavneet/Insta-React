import { setStories } from "../reducers/storySlice";
import axios from "../../utils/axios";
import { asyncLoadUser } from "./userActions";

export const asyncFetchAllStories = () => async (dispatch, getState) => {
  try {
    const { data, status } = await axios.get("/stories");

    if (data && status === 200) {
      await dispatch(setStories(data.stories));
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncUploadStory = (media) => async (dispatch, getState) => {
  try {
    const { data, status } = await axios.post(
      "/stories/upload-story",
      { media },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (data && status === 201) {
      await dispatch(asyncFetchAllStories());
      await dispatch(asyncLoadUser());
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncLikeStory = (storyId) => async (dispatch, getState) => {
  try {
    const { data, status } = await axios.get(`/stories/like/${storyId}`);

    if (data && status === 200) {
      await dispatch(asyncFetchAllStories());
      await dispatch(asyncLoadUser());
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncDeleteStory = (storyId) => async (dispatch, getState) => {
  try {
    const { data, status } = await axios.get(`/stories/delete/${storyId}`);

    if (data && status === 200) {
      await dispatch(asyncFetchAllStories());
      await dispatch(asyncLoadUser());
    }
  } catch (error) {
    console.log(error.response.data);
  }
};
