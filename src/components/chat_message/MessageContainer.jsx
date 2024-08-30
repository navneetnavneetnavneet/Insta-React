import React from "react";
import Message from "./Message";

const MessageContainer = () => {
  return (
    <div className="conversationArea w-full h-[78vh] px-2 py-2 bg-emerald-200  overflow-y-auto overflow-x-hidden">
      <Message />
      {/* <div className="outgoingMessage px-4 py-2 mb-1 ml-auto bg-blue-300 w-fit rounded-md text-white text-lg font-semibold">
        hello outgoing
      </div> */}
    </div>
  );
};

export default MessageContainer;
