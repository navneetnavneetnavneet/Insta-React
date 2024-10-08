import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncSendMessage } from "../../store/actions/messageActions";
import { setMessages } from "../../store/reducers/messageSlice";
import { SocketContext } from "../../context/SocketContext";

const MessageInput = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const { chatUser, user } = useSelector((state) => state.userReducer);
  const { messages } = useSelector((state) => state.messageReducer);

  const { socket } = useContext(SocketContext);

  const sendMessageHandler = (e) => {
    e.preventDefault();
    if (message.trim() !== "" && chatUser?._id) {
      dispatch(asyncSendMessage(chatUser._id, message));
      setMessage("");
    }
  };

  useEffect(() => {
    if (socket) {
      const handleNewMessage = (newMessage) => {
        const updatedMessages = [...messages, newMessage];
        dispatch(setMessages(updatedMessages));
      };

      socket.on("newMessage", handleNewMessage);

      return () => {
        socket.off("newMessage", handleNewMessage);
      };
    }
  }, [messages, socket, dispatch]);

  return (
    <div className="w-full mt-2 flex text-white items-center justify-between">
      <form
        onSubmit={sendMessageHandler}
        className="w-full rounded-full px-2 flex items-center justify-between border-2 border-zinc-600"
      >
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="message . . ."
          className="w-full py-4 px-2 resize-none bg-transparent border-none outline-none text-xl font-semibold"
        />
        <button className="py-2 px-8 rounded-3xl bg-blue-500 text-2xl font-semibold text-white">
          <i className="ri-arrow-up-line"></i>
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
