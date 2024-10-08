import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { asyncGetChatUser } from "../../store/actions/userActions";
import { setChatUser } from "../../store/reducers/userSlice";
import TopNav from "./TopNav";
import MessageContainer from "./MessageContainer";
import MessageInput from "./MessageInput";
import { asyncGetChatUserAllMessages } from "../../store/actions/messageActions";
import Loading from "../Loading";

const ChatMessage = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const { chatUser, onlineUsers } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(asyncGetChatUser(userId));
    dispatch(asyncGetChatUserAllMessages(userId));

    return () => dispatch(setChatUser(null));
  }, [userId, dispatch]);

  return chatUser ? (
    <div className="w-full md:w-1/3 md:mx-auto h-screen bg-zinc-900">
      <TopNav chatUser={chatUser} />
      <MessageContainer />
      <MessageInput />
    </div>
  ) : (
    <Loading />
  );
};

export default ChatMessage;
