import { loadUser, removeUser, setAllUser } from "../reducers/userSlice";
import axios from "../../utils/axios";

export const asyncLoadUser = () => async (dispatch, getState) => {
  try {
    const { data, status } = await axios.get("/users/current-user");
    // console.log(data);

    if (data && status === 200) {
      await dispatch(loadUser(data));
    }
  } catch (error) {
    console.log(error.response?.data);
  }
};

export const asyncGoogleAuth = (token) => async (dispatch, getState) => {
  try {
    const { data, status } = await axios.post("/users/auth/google", { token });

    if (data && (status === 200 || status === 201)) {
      await dispatch(loadUser(data));
    }
  } catch (error) {
    console.log(error?.response?.data);
  }
};

export const asyncSignUpUser =
  ({ username, email, fullName, password }) =>
  async (dispatch, getState) => {
    try {
      const { data, status } = await axios.post("/users/signup", {
        username,
        email,
        fullName,
        password,
      });

      if (data && status === 201) {
        await dispatch(asyncLoadUser());
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncSignInUser =
  ({ username, password }) =>
  async (dispatch, getState) => {
    try {
      const { data, status } = await axios.post("/users/signin", {
        username,
        password,
      });

      if (data && status === 200) {
        await dispatch(asyncLoadUser());
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncSignOutUser = () => async (dispatch, getState) => {
  try {
    const { data, status } = await axios.get("/users/signout");

    if (data && status === 200) {
      await dispatch(removeUser());
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncForgotPassword = (email) => async (dispatch, getState) => {
  try {
    const { data, status } = await axios.post("/users/send-email", {
      email,
    });

    if (data && status === 200) {
      return data;
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncChangePassword =
  (userId, password) => async (dispatch, getState) => {
    try {
      const { data, status } = await axios.post(
        `/users/forget-password-link/${userId}`,
        { password }
      );
      if (data && status === 200) {
        return data;
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncEditUserProfile =
  ({ fullName, email, bio, profileImage }) =>
  async (dispatch, getState) => {
    try {
      const { data, status } = await axios.post(
        "/users/edit",
        {
          fullName,
          email,
          bio,
          profileImage,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (data && status === 200) {
        await dispatch(asyncLoadUser());
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncSearchUser = (username) => async (dispatch, getState) => {
  try {
    const { data, status } = await axios.get(`/users/search/${username}`);

    if (data && status === 200) {
      await dispatch(asyncLoadUser());
      return data;
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncFetchAllUsers = () => async (dispatch, getState) => {
  try {
    const { data, status } = await axios.get("/users");

    if (data && status === 200) {
      await dispatch(setAllUser(data));
    }
  } catch (error) {
    console.log(error.response?.data);
  }
};

export const asyncFollowAndFollowing =
  (userId) => async (dispatch, getState) => {
    try {
      const { data, status } = await axios.get(`/users/follow/${userId}`);

      if (data && status === 200) {
        await dispatch(asyncLoadUser());
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncFindUserProfile = (userId) => async (dispatch, getState) => {
  try {
    const { data, status } = await axios.get(`/users/profile/${userId}`);

    if (data && status === 200) {
      await dispatch(asyncLoadUser());
      return data;
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncFindUserPost = (userId) => async (dispatch, getState) => {
  try {
    const { data, status } = await axios.get(`/users/post/${userId}`);

    if (data && status === 200) {
      await dispatch(asyncLoadUser());
      return data;
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncFindUserSavePost = (userId) => async (dispatch, getState) => {
  try {
    const { data, status } = await axios.get(`/users/savepost/${userId}`);

    if (data && status === 200) {
      await dispatch(asyncLoadUser());
      return data;
    }
  } catch (error) {
    console.log(error.response.data);
  }
};
