import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncFindUserProfile } from "../store/actions/userActions";
import Nav from "./profile/Nav";
import Icons from "./profile/Icons";
import User from "./profile/user/User";
import Post from "./profile/post/Post";

const FindUserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username } = useParams();
  const { user } = useSelector((state) => state.userReducer);

  const [finduser, setFinduser] = useState(null);

  const getFindUserProfile = async () => {
    if (username != user.username) {
      try {
        const data = await dispatch(asyncFindUserProfile(username));
        setFinduser(data);
      } catch (error) {
        console.log("Error : ", error);
      }
    } else {
      navigate("/profile");
    }
  };

  useEffect(() => {
    getFindUserProfile();
  }, [username]);

  // console.log(finduser);

  return finduser ? (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Nav username={finduser.username} />
      <User user={finduser} />
      <Icons userId={finduser._id} />
      <Post posts={finduser.posts} />
    </div>
  ) : (
    <h1 className="text-center text-xl text-zinc-500 mt-20"></h1>
  );
};

export default FindUserProfile;
