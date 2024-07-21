import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Nav from "./profile/Nav";
import User from "./profile/user/User";
import Icons from "./profile/Icons";
import Post from "./profile/post/Post";
import { asyncFindUserSavePost } from "../store/actions/userActions";

const FindUserSavePost = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const [finduser, setFinduser] = useState(null);

  const getFindUserPost = async () => {
    try {
      const data = await dispatch(asyncFindUserSavePost(userId));
      setFinduser(data);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    getFindUserPost();
  }, [userId]);

  // console.log(finduser);
  return (
    finduser && (
      <div className="w-full min-h-screen bg-zinc-900 text-white pb-20">
        <Nav username={finduser.username} />
        <User user={finduser} />
        <Icons userId={finduser._id} />
        <Post posts={finduser.savePosts} />
      </div>
    )
  );
};

export default FindUserSavePost;
