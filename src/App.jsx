import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import BottomNav from "./components/partials/BottomNav";
import Search from "./components/search/Search";
import Upload from "./components/upload/Upload";
import Profile from "./components/profile/Profile";
import Edit from "./components/edit/Edit";
import Register from "./components/partials/Register";
import Login from "./components/partials/Login";

const App = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-full min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>

      <BottomNav />
    </div>
  );
};

export default App;
