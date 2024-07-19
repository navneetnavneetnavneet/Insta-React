import axios from "../../utils/axios";
import { load, remove } from "../reducers/userSlice";

export const asyncLoadUser = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/user");
    dispatch(load(data));
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncRegisterUser =
  ({ username, fullName, email, password }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/user/register", {
        username,
        fullName,
        email,
        password,
      });
      // console.log(data);
      dispatch(asyncLoadUser());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncLoginUser =
  ({ username, password }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/user/login", {
        username,
        password,
      });
      // console.log(data);
      dispatch(asyncLoadUser());
    } catch (error) {
      console.log(error.response.data);
    }
  };

