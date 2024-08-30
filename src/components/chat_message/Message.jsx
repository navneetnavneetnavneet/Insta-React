import React from "react";
import { useSelector } from "react-redux";

const Message = ({ message }) => {
  const { user } = useSelector((state) => state.userReducer);

  return (
    message && (
      <div
        className={`${
          message.senderId === user._id
            ? "ml-auto bg-red-400"
            : "mr-auto bg-emerald-400"
        } message px-4 py-2 mb-1 w-fit rounded-md text-white text-lg font-semibold`}
      >
        {message.message}
      </div>
    )
  );
};

export default Message;
