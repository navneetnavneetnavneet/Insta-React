import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../components/home/Home";
import Register from "../components/partials/Register";
import Login from "../components/partials/Login";
import ForgetPassword from "../components/forget-password/ForgetPassword";
import ChangePassword from "../components/forget-password/ChangePassword";
import Search from "../components/search/Search";
import Upload from "../components/upload/Upload";
import Profile from "../components/profile/Profile";
import Edit from "../components/edit/Edit";
import BottomNav from "../components/partials/BottomNav";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { asyncGetAllUser, asyncLoadUser } from "../store/actions/userActions";
import { asyncGetAllPost } from "../store/actions/postActions";
import FindUserProfile from "../components/FindUserProfile";
import FindUserPost from "../components/FindUserPost";
import FindUserSavePost from "../components/FindUserSavePost";
import Comment from "../components/comment/Comment";
import ChatPage from "../components/ChatPage";
import ChatMessage from "../components/chat_message/ChatMessage";
import { asyncGetAllStories } from "../store/actions/storyActions";
import StoryShow from "../components/StoryShow";
import UploadStory from "../components/upload_story/UploadStory";
import { setStories } from "../store/reducers/storySlice";
import { allPosts } from "../store/reducers/postSlice";
import { setUsers } from "../store/reducers/userSlice";

const MainRoutes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(asyncLoadUser());
    dispatch(asyncGetAllPost());
    dispatch(asyncGetAllUser());
    dispatch(asyncGetAllStories());

    if (isAuthenticated) {
      navigate("/");
    } else {
      navigate("/login");
    }

    return () => {
      dispatch(setStories([]));
      dispatch(allPosts([]));
      dispatch(setUsers([]));
    };
  }, [isAuthenticated, dispatch]);

  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/change-password/:userId" element={<ChangePassword />} />
        <Route path="/search" element={<Search />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit" element={<Edit />} />

        <Route path="/user/profile/:username" element={<FindUserProfile />} />
        <Route path="/user/post/:userId" element={<FindUserPost />} />
        <Route path="/user/save_post/:userId" element={<FindUserSavePost />} />

        <Route path="/post/comment/:postId" element={<Comment />} />

        <Route path="/chat" element={<ChatPage />} />
        <Route path="/chat/:userId" element={<ChatMessage />} />

        <Route path="/story/user/:userId" element={<StoryShow />} />
        <Route path="/story/upload" element={<UploadStory />} />
      </Routes>

      <BottomNav />
    </div>
  );
};

export default MainRoutes;
