import React from "react";

const UserDets = ({ user }) => {
  return (
    user && (
      <div className="w-full px-4 flex items-center justify-between text-white">
        <div className="w-[20vw] h-[20vw] md:w-[5vw] md:h-[5vw] rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={user.profileImage.url}
            alt=""
          />
        </div>
        <div className="flex items-center justify-center gap-10 md:gap-16">
          <div className="flex flex-col items-center">
            <h3>{user.posts.length}</h3>
            <h3>Post</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3>{user.followers.length}</h3>
            <h3>Follower</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3>{user.followings.length}</h3>
            <h3>Following</h3>
          </div>
        </div>
      </div>
    )
  );
};

export default UserDets;
