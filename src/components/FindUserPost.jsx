import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { asyncFindUserPost } from "../store/actions/userActions";
import { useParams } from "react-router-dom";
import Nav from "./profile/Nav";
import User from "./profile/user/User";
import Icons from "./profile/Icons";
import PostDiv from "./home/post/PostDiv";
import Loading from "./Loading";

const FindUserPost = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const [finduser, setFinduser] = useState(null);

  const getFindUserPost = async () => {
    try {
      const data = await dispatch(asyncFindUserPost(userId));
      // console.log(data);
      setFinduser(data);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    getFindUserPost();
  }, [userId]);

  return finduser ? (
    <div className="w-full md:w-1/3 md:mx-auto min-h-screen bg-zinc-900 text-white pb-20 relative overflow-x-hidden">
      <Nav username={finduser.username} />
      <User user={finduser} />
      <Icons userId={finduser._id} />
      {finduser.posts.map((post) => (
        <PostDiv key={post._id} post={post} />
      ))}
    </div>
  ) : (
    <Loading />
  );
};

export default FindUserPost;
