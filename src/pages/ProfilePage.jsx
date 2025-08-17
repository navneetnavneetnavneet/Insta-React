import React, { useState } from "react";
import { useSelector } from "react-redux";
import LoadingPage from "./LoadingPage";
import TopNav from "../components/profilepage/TopNav";
import UserDetails from "../components/profilepage/UserDetails";
import Buttons from "../components/profilepage/Buttons";
import Icons from "../components/profilepage/Icons";
import Post from "../components/profilepage/Post";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.userReducer);

  return user ? (
    <div className="relative w-full h-screen overflow-y-auto overflow-x-hidden">
      <TopNav username={user.username} userId={user._id} />
      <UserDetails user={user} />

      <div className="w-full flex flex-col gap-3 px-2 md:px-4 mt-5">
        <p className="w-1/2 text-sm md:text-base opacity-60 leading-none tracking-tighter">
          {user.bio ? `${user.bio}` : "[ write in your bio ]"}
        </p>
        <Buttons userId={user._id} />
      </div>

      <Icons userId={user._id} />

      <div className="w-full flex flex-wrap justify-start items-start gap-1">
        {user.posts.length > 0
          ? user.posts.map((post) => <Post key={post._id} post={post} />)
          : ""}
      </div>
    </div>
  ) : (
    <LoadingPage />
  );
};

export default ProfilePage;
