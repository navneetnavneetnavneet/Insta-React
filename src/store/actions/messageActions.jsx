import axios from "../../utils/axios";
import { setMessages } from "../reducers/messageSlice";

export const asyncGetChatUserAllMessages =
  (id) => async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`/chat/${id}`);
      //   console.log(data);
      dispatch(setMessages(data ? data : []));
    } catch (error) {
      console.log(error.response.data);
    }
  };


