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

export const asyncLogoutUser = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/user/logout");
    console.log(data);
    dispatch(remove());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncForgetPassword = (email) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/user/send-mail", { email });
    dispatch({
      type: "URL_SEND_SUCCESS",
      payload: data,
    });
    return data;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncChangePassword =
  (userId, password) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post(
        `/user/forget-password-link/${userId}`,
        { password }
      );
      console.log(data);
      dispatch();
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncEditUser =
  ({ profileImage, username, fullName, bio }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post(
        "/user/edit",
        {
          profileImage,
          username,
          fullName,
          bio,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      
      dispatch(asyncLoadUser());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncSearchUser = (username) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post(`/user/search/${username}`);
    dispatch({
      type: "SEARCH_USER",
      payload: data.users,
    });
    return data.users;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncFindUserProfile =
  (username) => async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`/user/profile/${username}`);
      // console.log(data);
      dispatch({
        type: "Find_User_Profile",
        payload: data.finduser,
      });
      return data.finduser;
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncFindUserPost = (userId) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/user/post/${userId}`);
    // console.log(data);
    dispatch({
      type: "Find_User_Post",
      payload: data.finduser,
    });
    return data.finduser;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncFindUserSavePost = (userId) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/user/savepost/${userId}`);
    // console.log(data);
    dispatch({
      type: "Find_User_Save_Post",
      payload: data.finduser,
    });
    return data.finduser;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncFollowAndFollowing =
  (userId) => async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`/user/follow/${userId}`);
      dispatch(asyncLoadUser());
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncGetAllUser = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/user/chat/allusers");
    dispatch(asyncLoadUser());
    return data;
  } catch (error) {
    console.log(error.response.data);
  }
};
