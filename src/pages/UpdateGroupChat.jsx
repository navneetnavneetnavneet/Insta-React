import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingPage from "./LoadingPage";
import { Link, useNavigate } from "react-router-dom";
import SearchInput from "../components/partials/SearchInput";
import { asyncSearchUser } from "../store/actions/userActions";
import { toast } from "react-toastify";
import {
  asyncAddUserToGroupChat,
  asyncExitUserFromGroupChat,
  asyncRemoveUserFromGroupChat,
  asyncRenameGroupChat,
} from "../store/actions/chatActions";

const UpdateGroupChat = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);
  const { selectedChat } = useSelector((state) => state.chatReducer);

  const [chatName, setChatName] = useState(
    selectedChat ? selectedChat.chatName : ""
  );
  const [username, setUsername] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchSearchUserResults = async () => {
    if (username) {
      const data = await dispatch(asyncSearchUser(username));
      setSearchResults(data);
    }
  };

  useEffect(() => {
    fetchSearchUserResults();

    return () => {
      setSearchResults([]);
    };
  }, [username]);

  const handleAddUser = async (u) => {
    if (selectedChat.groupAdmin._id !== user._id) {
      return toast.warning("Only admin can add users !");
    }

    if (u) {
      if (selectedChat.users.find((su) => su._id === u._id)) {
        return toast.warning("User already existed in group !");
      }

      await dispatch(asyncAddUserToGroupChat(selectedChat._id, u._id));
      toast.success(`User added in ${selectedChat.chatName} group`);
    }
  };

  const handleRemoveUser = async (u) => {
    if (selectedChat.groupAdmin._id !== user._id) {
      return toast.warning("Only admin can remove users !");
    }

    await dispatch(asyncRemoveUserFromGroupChat(selectedChat._id, u._id));
    toast.success(`User removed from ${selectedChat.chatName} group`);
  };

  const handleExitUser = async () => {
    if (user) {
      await dispatch(asyncExitUserFromGroupChat(selectedChat._id));
      toast.success(`User exit from ${selectedChat.chatName} group`);
      navigate("/");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!chatName) {
      return toast.warning("Group name is required !");
    }

    await dispatch(
      asyncRenameGroupChat({ chatId: selectedChat._id, chatName })
    );
    toast.success("Update group name");
    navigate("/chat");
  };

  return selectedChat ? (
    <div className="w-full h-screen">
      <div className="w-full px-2 md:px-4 py-2 flex items-center justify-between border-b border-zinc-600">
        <i
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-[1.5rem] cursor-pointer"
        ></i>
        <h3 className="text-lg font-medium tracking-tighter">
          Update Group Chat
        </h3>
        <Link to="/profile" className="flex items-center gap-1 cursor-pointer">
          <i className="ri-user-line text-[1.2rem]"></i>
          <h4 className="text-sm font-medium tracking-tighter">Profile</h4>
        </Link>
      </div>
      <div className="w-full px-2 py-4 flex flex-col gap-5">
        <h1 className="text-center text-2xl font-bold px-2 py-2 md:py-1 bg-orange-400 rounded-md">
          {selectedChat.chatName}
        </h1>

        <div className="status w-full flex gap-5 overflow-x-auto overflow-y-hidden">
          {selectedChat.users.length > 0 ? (
            selectedChat.users.map((u) => (
              <div
                key={u._id}
                className={`${
                  u._id === selectedChat.groupAdmin._id
                    ? "bg-green-400"
                    : "bg-blue-400"
                } w-20 py-2 flex-shrink-0 flex flex-col items-center justify-center gap-1 rounded-md`}
              >
                <div className="relative w-14 h-14 md:w-16 md:h-16 border-2 border-zinc-400 rounded-full p-[2px]">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={u.profileImage?.url}
                      alt=""
                    />
                  </div>
                  <div
                    onClick={() => handleRemoveUser(u)}
                    className="absolute top-0 -right-2 w-[1.5rem] h-[1.5rem] cursor-pointer text-white rounded-full flex items-center justify-center bg-orange-500"
                  >
                    <i className="ri-close-line cursor-pointer text-[1.2rem]"></i>
                  </div>
                </div>
                <p className="text-[1rem] md:text-base leading-none md:leading-3">
                  {u.fullName?.split(" ")[0]}
                </p>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>

        <form
          onSubmit={submitHandler}
          className="w-full flex items-center gap-2"
        >
          <input
            onChange={(e) => setChatName(e.target.value)}
            value={chatName}
            type="text"
            placeholder="Group name"
            className="w-full px-2 py-2 rounded-md text-base font-medium outline-none bg-transparent border border-zinc-600"
          />
          <button className="w-fit px-2 py-2 rounded-md text-base font-medium border-none bg-sky-600">
            Update
          </button>
        </form>
        <SearchInput username={username} setUsername={setUsername} />

        <div className="w-full max-h-40 overflow-hidden overflow-y-auto">
          {searchResults.length > 0
            ? searchResults.map((user) => (
                <div
                  onClick={() => handleAddUser(user)}
                  key={user._id}
                  className="relative w-full py-2 flex items-center gap-2"
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
                </div>
              ))
            : ""}
        </div>
        <button
          onClick={handleExitUser}
          className="px-2 py-2 rounded-md outline-none text-white text-base font-medium bg-red-500 hover:bg-red-600"
        >
          Exit group
        </button>
      </div>
    </div>
  ) : (
    <LoadingPage />
  );
};

export default UpdateGroupChat;
