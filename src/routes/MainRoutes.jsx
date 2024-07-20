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

const MainRoutes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(asyncLoadUser());

    isAuthenticated && navigate("/");
    !isAuthenticated && navigate("/login");
  }, [isAuthenticated]);

  useEffect(() => {
    dispatch(asyncGetAllPost());
  }, [asyncGetAllPost]);

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
      </Routes>

      <BottomNav />
    </div>
  );
};

export default MainRoutes;
