import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Message = ({ message }) => {
  const { user } = useSelector((state) => state.userReducer);

  const scrollRef = useRef();

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    user && (
      <div
        ref={scrollRef}
        className={`${
          message.senderId._id === user._id ? "ml-auto" : "mr-auto"
        } w-fit flex items-start gap-2`}
      >
        <div
          className={`${
            message.senderId._id === user._id ? "hidden" : "flex"
          } w-10 h-10 flex-shrink-0 rounded-full overflow-hidden`}
        >
          <img
            className="w-full h-full object-cover"
            src={message.senderId.profileImage?.url}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-1">
          {message.media && message.media.url !== "" && (
            <div className="rounded-md overflow-hidden">
              {message.media.fileType === "image" && (
                <img
                  className="w-60 h-40 object-cover"
                  src={message.media.url}
                  alt=""
                />
              )}
              {message.media.fileType === "video" && (
                <video
                  autoPlay={false}
                  loop={false}
                  controls={true}
                  muted={true}
                  className="w-60 h-40 object-cover"
                  src={message.media.url}
                ></video>
              )}
              {message.media.fileType === "text" && (
                <Link
                  target="_blank"
                  to={message.media?.url}
                  className="w-full bg-zinc-700 flex items-center gap-2 px-2 py-2"
                >
                  <i className="ri-file-text-line text-2xl font-normal text-white"></i>
                  <span className="text-blue-600 text-lg">
                    {message.media?.url.slice(0, 30)}
                  </span>
                </Link>
              )}
            </div>
          )}

          {message.content?.trim() !== "" && (
            <p
              style={{ background: `linear-gradient(to right, red, blue)` }}
              className="px-4 py-2 rounded-md text-lg font-medium leading-none"
            >
              {message.content}
            </p>
          )}
        </div>
      </div>
    )
  );
};

export default Message;
