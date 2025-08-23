import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
import SearchPage from "../pages/SearchPage";
import UploadPost from "../pages/UploadPost";
import ProfilePage from "../pages/ProfilePage";
import EditProfilePage from "../pages/EditProfilePage";
import {
  asyncFetchAllUsers,
  asyncLoadUser,
} from "../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/partials/Footer";
import { asyncFectchAllPosts } from "../store/actions/postActions";
import CommentPage from "../pages/CommentPage";
import ChatPage from "../pages/ChatPage";
import ChatMessagePage from "../pages/ChatMessagePage";
import CreateGroupPage from "../pages/CreateGroupPage";
import UpdateGroupChat from "../pages/UpdateGroupChat";
import ChatDetails from "../pages/ChatDetails";
import { setChats } from "../store/reducers/chatSlice";
import { setAllUser } from "../store/reducers/userSlice";
import { allPosts } from "../store/reducers/postSlice";
import UploadStory from "../pages/UploadStoryPage";
import StoryPage from "../pages/StoryPage";
import { asyncFetchAllStories } from "../store/actions/storyActions";
import { setStories } from "../store/reducers/storySlice";
import FindUserProfilePage from "../pages/FindUserProfilePage";
import FindUserPostPage from "../pages/FindUserPostPage";
import FindUserSavePostPage from "../pages/FindUserSavePostPage";
import ForgetPasswordPage from "../pages/ForgotPasswordPage";
import ChangePasswordPage from "../pages/ChangePasswordPage";
import PageNotFound from "../pages/PageNotFound";

const MainRoutes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const { user, isAuthenticated } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(asyncLoadUser());
    dispatch(asyncFectchAllPosts());
    dispatch(asyncFetchAllUsers());
    dispatch(asyncFetchAllStories());

    isAuthenticated && navigate("/");
    !isAuthenticated && navigate("/sign-in");

    return () => {
      dispatch(allPosts([]));
      dispatch(setChats([]));
      dispatch(setAllUser([]));
      dispatch(setStories([]));
    };
  }, [isAuthenticated]);

  const path = ["/", "/search", "/upload-post", "/profile"];

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/forgot-password" element={<ForgetPasswordPage />} />
        <Route
          path="/change-password/:userId"
          element={<ChangePasswordPage />}
        />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/:userId" element={<FindUserProfilePage />} />
        <Route path="/user/post/:userId" element={<FindUserPostPage />} />
        <Route
          path="/user/save-post/:userId"
          element={<FindUserSavePostPage />}
        />
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/upload-post" element={<UploadPost />} />
        <Route path="/comment-post/:postId" element={<CommentPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/chat/:chatId" element={<ChatMessagePage />} />
        <Route path="/create-group" element={<CreateGroupPage />} />
        <Route path="/update-group/:chatId" element={<UpdateGroupChat />} />
        <Route path="/chat-details/:chatId" element={<ChatDetails />} />
        <Route path="/upload-story" element={<UploadStory />} />
        <Route path="/story/:userId" element={<StoryPage />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {path.includes(pathname) && <Footer />}
    </>
  );
};

export default MainRoutes;
