import { setChats, setSelectedChat } from "../reducers/chatSlice";
import axios from "../../utils/axios";

export const asyncFectchAllChats = () => async (dispatch, getState) => {
  try {
    const { data, status } = await axios.get("/chats");

    if (data && status === 200) {
      await dispatch(setChats(data));
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncAccessChat = (userId) => async (dispatch, getState) => {
  try {
    const { data, status } = await axios.post("/chats/access-chat", { userId });

    if ((data && status === 200) || (data && status === 201)) {
      await dispatch(asyncFectchAllChats());
      return data._id;
    }
  } catch (error) {
    console.log(error.response?.data);
  }
};

export const asyncCreateGroupChat =
  ({ chatName, users }) =>
  async (dispatch, getState) => {
    try {
      const { data, status } = await axios.post("/chats/create-group", {
        chatName,
        users,
      });

      if (data && status === 201) {
        await dispatch(asyncFectchAllChats());
      }
    } catch (error) {
      console.log(error.response?.data);
    }
  };

export const asyncRenameGroupChat =
  ({ chatId, chatName }) =>
  async (dispatch, getState) => {
    try {
      const { data, status } = await axios.post("/chats/rename-group", {
        chatId,
        chatName,
      });

      if (data && status === 200) {
        await dispatch(asyncFectchAllChats());
      }
    } catch (error) {
      console.log(error.response?.data);
    }
  };

export const asyncAddUserToGroupChat =
  (chatId, userId) => async (dispatch, getState) => {
    try {
      const { data, status } = await axios.post("/chats/add-user-group", {
        chatId,
        userId,
      });

      if (data && status === 200) {
        await dispatch(setSelectedChat(data));
        await dispatch(asyncFectchAllChats());
      }
    } catch (error) {
      console.log(error.response?.data);
    }
  };

export const asyncRemoveUserFromGroupChat =
  (chatId, userId) => async (dispatch, getState) => {
    try {
      const { data, status } = await axios.post("/chats/remove-user-group", {
        chatId,
        userId,
      });

      if (data && status === 200) {
        await dispatch(setSelectedChat(data));
        await dispatch(asyncFectchAllChats());
      }
    } catch (error) {
      console.log(error.response?.data);
    }
  };

export const asyncExitUserFromGroupChat =
  (chatId) => async (dispatch, getState) => {
    try {
      const { data, status } = await axios.post("/chats/exit-user-group", {
        chatId,
      });

      if (data && status === 200) {
        await dispatch(asyncFectchAllChats());
        await dispatch(setSelectedChat(null));
      }
    } catch (error) {
      console.log(error.response?.data);
    }
  };
