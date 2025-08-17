import React from "react";

const UserDetails = ({ user }) => {
  return (
    user && (
      <div className="px-2 md:px-4 flex items-center justify-between">
        <div className="w-24 md:w-28 h-24 md:h-28 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={user.profileImage.url}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-medium tracking-tighter">
            {user.fullName}
          </h1>
          <div className="flex items-center gap-5 md:gap-10">
            <div className="flex flex-col items-center tracking-tighter">
              <h2 className="text-base leading-none font-medium">
                {user.posts.length}
              </h2>
              <h4 className="text-base">posts</h4>
            </div>
            <div className="flex flex-col items-center tracking-tighter">
              <h2 className="text-base leading-none font-medium">
                {user.followers.length}
              </h2>
              <h4 className="text-base">followers</h4>
            </div>
            <div className="flex flex-col items-center tracking-tighter">
              <h2 className="text-base leading-none font-medium">
                {user.followings.length}
              </h2>
              <h4 className="text-base">followings</h4>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default UserDetails;
