import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { asyncSearchUser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";
import SearchInput from "../components/partials/SearchInput";
import { toast } from "react-toastify";
import { asyncCreateGroupChat } from "../store/actions/chatActions";

const CreateGroupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [chatName, setChatName] = useState("");
  const [username, setUsername] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

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

  const handleAddUser = (user) => {
    if (selectedUsers.includes(user)) {
      return toast.warning("User already added !");
    }

    setSelectedUsers([...selectedUsers, user]);
  };

  const handleRemoveUser = (user) => {
    setSelectedUsers(selectedUsers.filter((u) => u._id !== user._id));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!chatName) {
      return toast.warning("Please enter group name !");
    }

    if (selectedUsers.length < 2) {
      return toast.warning("More than two users are required in group !");
    }

    const groupDetails = {
      chatName: chatName,
      users: JSON.stringify(selectedUsers.map((u) => u._id)),
    };

    await dispatch(asyncCreateGroupChat(groupDetails));
    toast.success("Group is created");
    navigate("/chat");

    setChatName("");
  };

  return (
    <div className="w-full h-screen">
      <div className="w-full px-2 md:px-4 py-2 flex items-center justify-between border-b border-zinc-600">
        <i
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-[1.4rem] cursor-pointer"
        ></i>
        <h3 className="text-lg font-medium">New Group Chat</h3>
        <Link to="/profile" className="flex items-center gap-1 cursor-pointer">
          <i className="ri-user-line"></i>
          <h4 className="text-sm font-medium">Profile</h4>
        </Link>
      </div>
      <form
        onSubmit={submitHandler}
        className="w-full px-2 md:px-4 mt-5 flex flex-col gap-5 tracking-tighter"
      >
        <input
          onChange={(e) => setChatName(e.target.value)}
          value={chatName}
          type="text"
          placeholder="Group name"
          className="w-full px-2 py-2 rounded-md text-base font-medium outline-none bg-transparent border border-zinc-600"
        />
        <SearchInput username={username} setUsername={setUsername} />
        <div className="w-full py-2 flex gap-5 overflow-x-auto overflow-y-hidden">
          {selectedUsers.length > 0
            ? selectedUsers.map((u) => (
                <div key={u._id} className="flex flex-col items-center">
                  <div className="relative w-14 md:w-16 h-14 md:h-16 flex-shrink-0 rounded-full border border-zinc-400">
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src={u.profileImage.url}
                      alt=""
                    />
                    <div
                      onClick={() => handleRemoveUser(u)}
                      className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center text-white rounded-full cursor-pointer bg-zinc-700"
                    >
                      <i className="ri-close-line text-[1.2rem]"></i>
                    </div>
                  </div>
                  <h4 className="text-sm font-medium opacity-60">
                    {u.fullName.split(" ")[0]}
                  </h4>
                </div>
              ))
            : ""}
        </div>
        <div className="w-full max-h-60 bg-black z-[99] overflow-hidden overflow-y-auto">
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
                  <div className="absolute right-0 w-6 h-6 rounded-md flex items-center justify-center border-2 border-zinc-600 cursor-pointer">
                    {selectedUsers.includes(user) ? (
                      <i className="ri-check-fill text-[1.2rem]"></i>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ))
            : ""}
        </div>
        <button className="w-full px-2 py-2 rounded-md text-base font-medium border-none bg-sky-600 hover:bg-sky-700 duration-300">
          Create Group
        </button>
      </form>
    </div>
  );
};

export default CreateGroupPage;
