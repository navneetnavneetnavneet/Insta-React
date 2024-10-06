import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Message = ({ message }) => {
  const { user } = useSelector((state) => state.userReducer);
  const scroll = useRef();

  useEffect(() => {
    scroll.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [message]);

  return (
    message && (
      <div
        style={
          message.senderId === user._id
            ? {
                background: `linear-gradient(to right, red, blue)`,
                marginLeft: "auto",
              }
            : {
                background: `linear-gradient(to right, blue, red)`,
                marginRight: "auto",
              }
        }
        ref={scroll}
        className={`message px-4 py-2 md:px-2 md:py-1 mb-2 w-fit rounded-md text-white text-lg font-semibold`}
      >
        {message.message}
      </div>
    )
  );
};

export default Message;
