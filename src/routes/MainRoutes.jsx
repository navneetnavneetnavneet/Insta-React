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
import { asyncLoadUser } from "../store/actions/userActions";
import { asyncGetAllPost } from "../store/actions/postActions";
import FindUserProfile from "../components/FindUserProfile";
import FindUserPost from "../components/FindUserPost";
import FindUserSavePost from "../components/FindUserSavePost";
import Comment from "../components/comment/Comment";
import ChatPage from "../components/ChatPage";
import ChatMessage from "../components/chat_message/ChatMessage";
import io from "socket.io-client";
import { setSocket } from "../store/reducers/socketSlice";
import { setOnlineUsers } from "../store/reducers/userSlice";

const MainRoutes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.userReducer);
  const { socket } = useSelector((state) => state.socketReducer);

  useEffect(() => {
    dispatch(asyncLoadUser());
    dispatch(asyncGetAllPost());

    if (isAuthenticated) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isAuthenticated, dispatch]);

  // socket.io
  useEffect(() => {
    if (user) {
      const socket = io("http://localhost:8080", {
        query: {
          userId: user._id,
        },
      });
      dispatch(setSocket(socket));

      socket.on("getOnlineUsers", (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers));
      });
    }
  }, [user]);

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
      </Routes>

      <BottomNav />
    </div>
  );
};

export default MainRoutes;
