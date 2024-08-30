import React from "react";
import Message from "./Message";
import { useSelector } from "react-redux";

const MessageContainer = () => {
  const { messages } = useSelector((state) => state.messageReducer);
  console.log(messages);

  return (
    <div className="conversationArea w-full h-[78vh] px-2 py-2 bg-emerald-200  overflow-y-auto overflow-x-hidden">
      {messages &&
        messages.map((message) => (
          <Message key={message._id} message={message} />
        ))}

      {/* <div className="outgoingMessage px-4 py-2 mb-1 ml-auto bg-blue-300 w-fit rounded-md text-white text-lg font-semibold">
        hello outgoing
      </div> */}
    </div>
  );
};

export default MessageContainer;
