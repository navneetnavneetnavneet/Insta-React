import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
    user &&
    message && (
      <div
        ref={scroll}
        className={`${
          user?._id === message.senderId ? "ml-auto" : "mr-auto"
        } w-fit text-xl md:text-base text-white font-normal flex flex-col items-end mb-4`}
      >
        {message.message && (
          <div
            style={
              user?._id === message.senderId
                ? {
                    background: `linear-gradient(to right, red, blue)`,
                  }
                : {
                    background: `linear-gradient(to right, blue, red)`,
                  }
            }
            className="px-4 py-2 max-w-[85%] rounded-md"
          >
            {message?.message}
          </div>
        )}
        {message.media?.fileType === "image" && (
          <div className="w-80 h-60 rounded-md overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={message.media.url}
              alt=""
            />
          </div>
        )}
        {message.media?.fileType === "video" && (
          <div className="w-80 h-60 rounded-md overflow-hidden">
            <video
              className="w-full h-full object-cover"
              autoPlay={true}
              controls={true}
              src={message.media.url}
            ></video>
          </div>
        )}
        {message.media?.fileType === "text" && (
          <Link
            target="_blank"
            to={message.media?.url}
            className="w-80 bg-zinc-700 flex items-center rounded-md gap-2 px-2 py-4"
          >
            <i className="ri-file-text-line text-[2rem] font-normal"></i>
            <span className="text-blue-600 text-lg">
              {message.media?.url.slice(0, 30)}
            </span>
          </Link>
        )}
        <span className="text-sm md:text-xs">
          {new Date(message.createdAt).toLocaleTimeString("en-IN", {
            hour: "numeric",
            minute: "numeric",
          })}
        </span>
      </div>
    )
  );
};

export default Message;
