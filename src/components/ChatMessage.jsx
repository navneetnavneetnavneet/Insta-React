import React from "react";

const ChatMessage = () => {
  return (
    <div className="w-full h-screen bg-white">
      <div className="w-full h-[10vh] px-4 py-2 border-b border-zinc-200 flex items-center justify-between">
        <div className="user flex items-center gap-2">
          <i className="ri-arrow-left-line text-xl font-semibold"></i>
          <div className="w-[10vw] h-[10vw] rounded-full overflow-hidden bg-red-300"></div>
          <div>
            <h4 className="text-xl font-semibold leading-none">FullName</h4>
            <h1 className="text-lg font-semibold text-zinc-400">username</h1>
          </div>
        </div>
        <div className="icons flex items-center gap-5 text-xl">
          <i className="ri-phone-line"></i>
          <i className="ri-vidicon-line"></i>
        </div>
      </div>
      <div className="conversationArea w-full h-[80vh] px-2 py-2 bg-emerald-200 overflow-y-auto overflow-x-hidden">
        <div className="incomingMessage px-4 py-2 mb-1 bg-red-300 w-fit rounded-md text-white text-lg font-semibold">hello incoming</div>
        <div className="outgoingMessage px-4 py-2 mb-1 ml-auto bg-blue-300 w-fit rounded-md text-white text-lg font-semibold">hello outgoing</div>
      </div>
    </div>
  );
};

export default ChatMessage;
