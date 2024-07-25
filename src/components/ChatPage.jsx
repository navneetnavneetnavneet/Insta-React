import React from "react";

const ChatPage = () => {
  return (
    <div className="w-full min-h-screen bg-white overflow-y-auto">
      <div className="w-full px-4 py-4 flex items-center gap-2 border-b border-zinc-200">
        <div className="w-[10vw] h-[10vw] rounded-full overflow-hidden bg-red-300">
          {/* <img className="w-full h-full object-cover" src="" alt="" /> */}
        </div>
        <div className="">
          <h4 className="text-xl font-semibold leading-none">username</h4>
          <p className="text-sm font-semibold text-zinc-600">Active</p>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
