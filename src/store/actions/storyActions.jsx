import axios from "../../utils/axios";
import { setStories } from "../reducers/storySlice";

export const asyncGetAllStories = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/story");
    console.log(data);
    dispatch(setStories(data.stories));
  } catch (error) {
    console.log(error.response.data);
  }
};
