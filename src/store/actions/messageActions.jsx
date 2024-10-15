import axios from "../../utils/axios";
import { setMessages } from "../reducers/messageSlice";

export const asyncGetChatUserAllMessages =
  (id) => async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`/chat/${id}`);
      dispatch(setMessages(data && data ? data : []));
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncSendMessage =
  (id, { message, media }) =>
  async (dispatch, getState) => {
    try {
      const { messages } = getState().messageReducer;
      const { data } = await axios.post(
        `/chat/sendmessage/${id}`,
        { message, media },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(data);
      
      // console.log([...messages, data.newMessage]);
      dispatch(setMessages([...messages, data.newMessage]));
    } catch (error) {
      console.log(error.response.data);
    }
  };
