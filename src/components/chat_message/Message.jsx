import React from "react";

const Message = ({ message }) => {
  return (
    message && (
      <div className="message px-4 py-2 mb-1 bg-red-300 ml-auto w-fit rounded-md text-white text-lg font-semibold">
        {message.message}
      </div>
    )
  );
};

export default Message;
