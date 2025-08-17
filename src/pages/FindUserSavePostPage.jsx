import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import TopNav from "../components/profilepage/TopNav";
import UserDetails from "../components/profilepage/UserDetails";
import Buttons from "../components/profilepage/Buttons";
import Icons from "../components/profilepage/Icons";
import Post from "../components/profilepage/Post";
import { asyncFindUserSavePost } from "../store/actions/userActions";

const FindUserSavePostPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useParams();

  const { user } = useSelector((state) => state.userReducer);

  const [findUser, setFindUser] = useState(null);

  const getFindUser = async () => {
    const data = await dispatch(asyncFindUserSavePost(userId));
    setFindUser(data);
  };

  useEffect(() => {
    getFindUser();
  }, [userId]);

  return findUser ? (
    <div className="w-full min-h-screen bg-black overflow-y-auto overflow-x-hidden">
      <TopNav username={findUser.username} userId={findUser._id} />
      <UserDetails user={findUser} />

      <div className="w-full flex flex-col gap-3 px-2 md:px-4 mt-5">
        <p className="w-1/2 text-sm opacity-60 leading-none tracking-tighter">
          {findUser.bio ? `${findUser.bio}` : "[ write in your bio ]"}
        </p>
        <Buttons userId={findUser._id} />
      </div>

      <Icons userId={findUser._id} />

      <div className="w-full flex flex-wrap justify-start items-start gap-1">
        {findUser.savePosts.length > 0
          ? findUser.savePosts.map((post) => (
              <Post key={post._id} post={post} />
            ))
          : ""}
      </div>
    </div>
  ) : (
    <LoadingPage />
  );
};

export default FindUserSavePostPage;
