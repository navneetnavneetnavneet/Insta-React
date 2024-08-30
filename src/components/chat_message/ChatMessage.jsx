import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { asyncGetChatUser } from "../../store/actions/userActions";
import { setChatUser } from "../../store/reducers/userSlice";
import TopNav from "./TopNav";
import MessageContainer from "./MessageContainer";
import MessageInput from "./MessageInput";
import { asyncGetChatUserAllMessages } from "../../store/actions/messageActions";

const ChatMessage = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const { chatUser } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(asyncGetChatUser(userId));
    dispatch(asyncGetChatUserAllMessages(chatUser?._id));

    return () => dispatch(setChatUser(null));
  }, [userId]);

  return (
    chatUser && (
      <div className="w-full h-screen bg-white">
        <TopNav chatUser={chatUser} />
        <MessageContainer />
        <MessageInput />
      </div>
    )
  );
};

export default ChatMessage;
