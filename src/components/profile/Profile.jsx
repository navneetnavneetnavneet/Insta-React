import React from "react";
import Nav from "./Nav";
import User from "./user/User";
import Post from "./post/Post";
import Icons from "./Icons";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.userReducer);

  return (
    user && (
      <div className="w-full md:w-1/3 md:mx-auto min-h-screen bg-zinc-900 text-white relative overflow-x-hidden">
        <Nav username={user.username} userId={user._id} />
        <User user={user} />
        <Icons userId={user._id} />
        <Post posts={user.posts} />
      </div>
    )
  );
};

export default Profile;
