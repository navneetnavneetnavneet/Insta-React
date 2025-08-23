import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TopNav = ({ selectedChat }) => {
  const navigate = useNavigate();

  const { user, onlineUsers } = useSelector((state) => state.userReducer);

  const oppositeChatUser =
    !selectedChat.isGroupChat &&
    selectedChat.users.find((u) => u._id !== user._id);

  const isOnline =
    oppositeChatUser && onlineUsers.includes(oppositeChatUser._id);

  return (
    selectedChat && (
      <div className="w-full bg-black px-2 md:px-4 py-2 border-b border-zinc-600 gap-2 flex items-center justify-between">
        <i
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line z-[999] text-[1.5rem] cursor-pointer"
        ></i>
        <div className="w-full flex items-center gap-3 cursor-pointer">
          <div className="relative w-14 md:w-16 h-14 md:h-16">
            <img
              className="w-full h-full object-cover rounded-full"
              src={
                !selectedChat.isGroupChat
                  ? oppositeChatUser.profileImage.url
                  : selectedChat.groupImage
              }
              alt=""
            />
            {isOnline && (
              <div className="w-4 h-4 bottom-0 right-0 bg-green-600 border-2 border-white rounded-full absolute"></div>
            )}
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-medium leading-none">
              {!selectedChat.isGroupChat
                ? oppositeChatUser.fullName.slice(0, 14)
                : selectedChat.chatName.slice(0, 14)}
            </h2>

            <small className="text-sm font-medium opacity-50">
              {isOnline
                ? "Active now"
                : !selectedChat.isGroupChat && oppositeChatUser.username}
            </small>
          </div>
        </div>
        <div className="flex items-center gap-5">
          {selectedChat.isGroupChat ? (
            <i
              onClick={() => navigate(`/update-group/${selectedChat._id}`)}
              className="ri-edit-box-line text-[1.5rem] cursor-pointer"
            ></i>
          ) : (
            ""
          )}
          <i className="ri-phone-line text-[1.5rem] cursor-pointer"></i>
          <i className="ri-vidicon-line text-[1.5rem] cursor-pointer"></i>
          <i
            onClick={() => navigate(`/chat-details/${selectedChat._id}`)}
            className="ri-information-line text-[1.5rem] cursor-pointer"
          ></i>
        </div>
      </div>
    )
  );
};

export default TopNav;
