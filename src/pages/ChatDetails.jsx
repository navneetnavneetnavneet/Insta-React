import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import { asyncAccessChat } from "../store/actions/chatActions";

const ChatDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);
  const { selectedChat } = useSelector((state) => state.chatReducer);

  const oppsiteChatUser =
    selectedChat && !selectedChat.isGroupChat
      ? selectedChat.users.find((u) => u._id !== user?._id)
      : null;

  return selectedChat ? (
    <div className="w-full">
      <div className="w-full px-2 md:px-4 py-2 flex items-center justify-between border-b border-zinc-600">
        <i
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-[1.5rem] cursor-pointer"
        ></i>
        <h3 className="text-xl font-medium tracking-tighter">Details</h3>
        <Link to="/" className="flex items-center gap-1 cursor-pointer">
          <i className="ri-home-line text-[1.2rem]"></i>
          <h4 className="text-sm font-medium tracking-tighter">Home</h4>
        </Link>
      </div>
      <div className="pt-10 flex flex-col items-center gap-5">
        <div className="w-24 md:w-28 h-24 md:h-28 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={
              !selectedChat.isGroupChat
                ? oppsiteChatUser.profileImage.url
                : selectedChat.groupImage
            }
            alt=""
          />
        </div>
        <div className="flex flex-col items-center tracking-tighter">
          <h2 className="text-2xl font-medium ">
            {!selectedChat.isGroupChat
              ? oppsiteChatUser.fullName
              : selectedChat.chatName}
          </h2>
          {!selectedChat.isGroupChat ? (
            <h4 className="text-lg font-medium opacity-50">
              {oppsiteChatUser.username}
            </h4>
          ) : (
            <h4 className="px-4 py-2 text-sm font-semibold opacity-60">
              {selectedChat.users.length} members
            </h4>
          )}
        </div>
      </div>
      <div className="mt-5 px-2 md:px-4 py-2 flex items-center justify-between tracking-tighter">
        {!selectedChat.isGroupChat ? (
          <Link
            to={`/profile/${oppsiteChatUser._id}`}
            className="flex flex-col items-center"
          >
            <i className="ri-user-line text-[1.5rem] cursor-pointer"></i>
            <small className="text-sm">Profile</small>
          </Link>
        ) : (
          <Link to="/" className="flex flex-col items-center">
            <i className="ri-home-line text-[1.5rem] cursor-pointer"></i>
            <small className="text-sm">Home</small>
          </Link>
        )}
        <Link to="/search" className="flex flex-col items-center">
          <i className="ri-search-line text-[1.5rem] cursor-pointer"></i>
          <small className="text-sm">Search</small>
        </Link>
        <div className="flex flex-col items-center">
          <i className="ri-notification-line text-[1.5rem] cursor-pointer"></i>
          <small className="text-sm">Notification</small>
        </div>
        <div className="flex flex-col items-center">
          <i className="ri-more-2-fill text-[1.5rem] cursor-pointer"></i>
          <small className="text-sm">Options</small>
        </div>
      </div>
      <div className="px-2 md:px-4 py-4 flex flex-col gap-5 border-b border-zinc-600">
        <div className=" flex items-center gap-3">
          <div
            style={{ background: `linear-gradient(to left bottom, red, blue)` }}
            className="w-6 h-6 rounded-full"
          ></div>
          <h4 className="text-base font-normal">Theme</h4>
        </div>
        <div className=" flex items-center gap-3">
          <i className="ri-message-line text-[1.2rem]"></i>
          <h4 className="text-base font-normal">Disappearing messages</h4>
        </div>
        <div className=" flex items-center gap-3">
          <i className="ri-lock-line text-[1.2rem]"></i>
          <h4 className="text-base font-normal">Privacy and safety</h4>
        </div>
        <Link to="/create-group" className=" flex items-center gap-3">
          <i className="ri-group-line text-[1.2rem]"></i>
          <h4 className="text-base font-normal">Create a group chat</h4>
        </Link>
      </div>

      {selectedChat.isGroupChat && (
        <div className="w-full pb-10">
          <h4 className="px-2 md:px-4 py-2 text-sm font-semibold opacity-50">
            {selectedChat.users.length} members
          </h4>

          {selectedChat.users.map((user) => (
            <div
              key={user._id}
              onClick={async () => {
                const chatId = await dispatch(asyncAccessChat(user._id));
                navigate(`/chat/${chatId}`);
              }}
              className="relative w-full px-2 md:px-4 py-2 flex items-center gap-2 cursor-pointer"
            >
              <div className="w-14 md:w-16 h-14 md:h-16 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={user.profileImage.url}
                  alt=""
                />
              </div>
              <div className="flex flex-col tracking-tighter">
                <h1 className="text-xl font-medium leading-none">
                  {user.fullName}
                </h1>
                <h3 className="text-base font-normal opacity-60 leading-none">
                  {user.username}
                </h3>
              </div>

              {selectedChat.groupAdmin._id === user._id ? (
                <div className="absolute right-4 px-2 py-1 rounded-md bg-zinc-600 text-xs">
                  Admin
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  ) : (
    <LoadingPage />
  );
};

export default ChatDetails;
