import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { asyncGetAllUser } from "../store/actions/userActions";
import { Link } from "react-router-dom";

const ChatPage = () => {
  const dispatch = useDispatch();
  const [users, setusers] = useState([]);

  const getAllUser = async () => {
    const data = await dispatch(asyncGetAllUser());
    setusers(data);
  };

  useEffect(() => {
    getAllUser();
  }, []);

  console.log(users);

  return (
    users && (
      <div className="w-full min-h-screen bg-white overflow-y-auto">
        {users.map((user) => (
          <Link
            to={`/chat/${user._id}`}
            key={user._id}
            className="w-full px-4 py-4 flex items-center gap-2 border-b border-zinc-200"
          >
            <div className="w-[10vw] h-[10vw] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={user.profileImage.url}
                alt=""
              />
            </div>
            <div className="user">
              <h4 className="text-xl font-semibold leading-none">
                {user.username}
              </h4>
              <p className="text-sm font-semibold text-zinc-400">Active</p>
            </div>
          </Link>
        ))}
      </div>
    )
  );
};

export default ChatPage;
