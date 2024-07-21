import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <Link to={`/user/profile/${user.username}`} className="text-white flex items-center gap-2 mt-5">
      <div className="image w-[11vw] h-[11vw] rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={user.profileImage.url}
          alt=""
        />
      </div>
      <div className="text">
        <h3>{user.username}</h3>
        <h4 className="text-xs opacity-30 leading-none">{user.fullName}</h4>
      </div>
    </Link>
  );
};

export default User;
