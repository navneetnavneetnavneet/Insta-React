import React from "react";

const UserDetails = ({ likes, username, caption }) => {
  return (
    <div className="text-white px-4">
      <h3 className="mt-2 text-sm leading-none tracking-tight">
        {likes.length} likes
      </h3>
      <h2 className="text-white font-light text-sm mt-2">
        <span className="font-semibold pr-2 text-lg">{username}</span>
        {caption}.
      </h2>
    </div>
  );
};

export default UserDetails;
