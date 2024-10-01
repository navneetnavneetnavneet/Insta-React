import React, { useEffect, useState } from "react";
import User from "./User";
import { asyncSearchUser } from "../../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../store/reducers/userSlice";

const Search = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const { users } = useSelector((state) => state.userReducer);

  const getUsers = async () => {
    if (username.trim() !== "") {
      dispatch(asyncSearchUser(username));
    } else {
      dispatch(setUsers(null));
    }
  };

  useEffect(() => {
    getUsers();
  }, [username]);

  return (
    <div className="w-full md:w-1/3 md:mx-auto min-h-screen bg-zinc-900 px-4 py-4 text-white">
      <div className="border-2 border-zinc-700 flex items-center justify-between px-2 py-1 rounded-md">
        <i className="ri-search-line"></i>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="ml-2 text-lg w-full bg-transparent outline-none text-zinc-400"
          type="text"
          placeholder="search username"
        />
      </div>
      {users && users.map((user) => <User key={user._id} user={user} />)}
    </div>
  );
};

export default Search;
