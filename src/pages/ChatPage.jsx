import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import {
  asyncAccessChat,
  asyncFectchAllChats,
} from "../store/actions/chatActions";
import { asyncSearchUser } from "../store/actions/userActions";
import { setChats, setSelectedChat } from "../store/reducers/chatSlice";

const ChatPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, onlineUsers } = useSelector((state) => state.userReducer);
  const { chats } = useSelector((state) => state.chatReducer);

  const isOnlineUser = (userId) => onlineUsers.includes(userId);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchSearchUserResults = async () => {
    if (search) {
      const data = await dispatch(asyncSearchUser(search));
      setSearchResults(data);
    }
  };

  useEffect(() => {
    fetchSearchUserResults();

    return () => {
      setSearchResults([]);
    };
  }, [search]);

  useEffect(() => {
    dispatch(asyncFectchAllChats());
    dispatch(setSelectedChat(null));
  }, []);

  return user ? (
    <div className="relative w-full h-screen px-2 md:px-4 overflow-x-hidden overflow-y-auto">
      <div className="w-full sticky top-0 bg-black z-[999] py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <i
            onClick={() => navigate("/")}
            className="ri-arrow-left-line text-[1.5rem] cursor-pointer"
          ></i>
          <h4 className="text-lg font-medium tracking-tighter">
            {user.username}
          </h4>
        </div>
        <div className="flex items-center gap-5">
          <i className="ri-apps-2-line text-[1.5rem] cursor-pointer"></i>
          <Link
            to="/create-group"
            className="ri-edit-box-line text-[1.5rem] cursor-pointer"
          ></Link>
        </div>
      </div>
      <div className="relative w-full px-4 py-1 rounded-full flex gap-1 items-center justify-between bg-white text-black">
        <i className="ri-search-line text-[1.5rem]"></i>
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search chats . . ."
          className="w-full px-2 py-1 text-base font-medium bg-transparent border-none outline-none"
        />
        {search ? (
          <i
            onClick={() => setSearch("")}
            className="ri-close-line text-[1.5rem] cursor-pointer"
          ></i>
        ) : (
          ""
        )}

        <div className="absolute w-full max-h-80 top-[105%] left-0 z-[999] bg-black text-white overflow-y-auto overflow-x-hidden">
          {searchResults.length > 0
            ? searchResults.map((u) => (
                <div
                  key={u._id}
                  onClick={async () => {
                    const chatId = await dispatch(asyncAccessChat(u._id));
                    navigate(`/chat/${chatId}`);
                  }}
                  className="w-full flex items-center gap-3 py-2"
                >
                  <div className="w-14 md:w-16 h-14 md:h-16 rounded-full border border-zinc-600 overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={u.profileImage.url}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col tracking-tighter">
                    <h2 className="text-lg font-medium leading-none">
                      {u.username}
                    </h2>
                    <p className="text-sm font-medium opacity-60">
                      {u.fullName}
                    </p>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
      <div className="w-full py-2">
        {chats.length > 0 ? (
          chats.map((chat) => {
            const chatUser = !chat.isGroupChat
              ? chat.users[0]._id === user._id
                ? chat.users[1]
                : chat.users[0]
              : null;

            const isOnline = chatUser ? isOnlineUser(chatUser._id) : false;

            return (
              <Link
                key={chat._id}
                to={`/chat/${chat._id}`}
                className="w-full flex items-center gap-3 py-2"
              >
                <div className="relative w-14 md:w-16 h-14 md:h-16">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={
                      !chat.isGroupChat
                        ? chatUser.profileImage.url
                        : chat.groupImage
                    }
                    alt=""
                  />
                  {isOnline && (
                    <div className="w-4 h-4 bottom-0 right-0 bg-green-600 border-2 border-white rounded-full absolute"></div>
                  )}
                </div>
                <div className="flex flex-col">
                  <h2 className="text-lg font-medium leading-none">
                    {!chat.isGroupChat ? chatUser.fullName : chat.chatName}
                  </h2>
                  {isOnline && (
                    <small className={`text-sm font-medium opacity-50`}>
                      Active now
                    </small>
                  )}
                </div>
              </Link>
            );
          })
        ) : (
          <p className="text-center mt-10 text-xs font-medium opacity-60">
            chats are not present.
          </p>
        )}
      </div>
    </div>
  ) : (
    <LoadingPage />
  );
};

export default ChatPage;
