import React, { useContext, useEffect } from "react";
import TopNav from "../components/chatmessage/TopNav";
import MessageInput from "../components/chatmessage/MessageInput";
import Message from "../components/chatmessage/Message";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedChat } from "../store/reducers/chatSlice";
import LoadingPage from "./LoadingPage";
import { setMessages } from "../store/reducers/messageSlice";
import { asyncFetchAllMessages } from "../store/actions/messageActions";
import { socketContext } from "../context/SocketContext";

const ChatMessagePage = () => {
  const dispatch = useDispatch();

  const { chatId } = useParams();

  const { socket } = useContext(socketContext);

  const { chats, selectedChat } = useSelector((state) => state.chatReducer);
  const { messages } = useSelector((state) => state.messageReducer);

  useEffect(() => {
    if (!socket || !chatId) return;

    socket.emit("join-room", chatId);

    dispatch(
      setSelectedChat(chats && chats.find((chat) => chat._id === chatId))
    );
    dispatch(asyncFetchAllMessages(chatId));

    return () => {
      dispatch(setMessages([]));
    };
  }, [chatId, dispatch, socket, chats]);

  useEffect(() => {
    if (!socket) return;

    socket.on("message-received", (msg) => {
      dispatch(setMessages([...messages, msg]));
    });
  }, [messages, dispatch]);

  return selectedChat ? (
    <div className="w-full h-screen relative">
      <TopNav selectedChat={selectedChat} />
      <div className="w-full h-[80vh] py-2 px-2 md:px-4 flex flex-col gap-6 overflow-x-hidden overflow-y-auto">
        {messages.length > 0
          ? messages.map((message) => (
              <Message key={message._id} message={message} />
            ))
          : ""}
      </div>
      <MessageInput />
    </div>
  ) : (
    <LoadingPage />
  );
};

export default ChatMessagePage;
