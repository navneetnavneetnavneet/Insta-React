import React from "react";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="footer text-white flex justify-between items-center w-full fixed bottom-0 z-[10] bg-zinc-900 px-10 py-3">
      <Link to="/">
        <i class="text-[1.4rem] ri-home-line"></i>
      </Link>
      <Link to="/search">
        <i class="text-[1.4rem] ri-search-line"></i>
      </Link>
      <Link to="/upload">
        <i class="text-[1.4rem] ri-add-box-line"></i>
      </Link>
      <Link to="/profile">
        <div className="w-6 h-6 bg-zinc-300 rounded-full"></div>
      </Link>
    </div>
  );
};

export default BottomNav;
