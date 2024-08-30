import React from "react";
import Message from "./Message";
import { useSelector } from "react-redux";

const MessageContainer = () => {
  const { messages } = useSelector((state) => state.messageReducer);

  return (
    <div className="conversationArea w-full h-[78vh] px-2 py-2 bg-sky-100  overflow-y-auto overflow-x-hidden">
      {messages &&
        messages.map((message) => (
          <Message key={message._id} message={message} />
        ))}
    </div>
  );
};

export default MessageContainer;
