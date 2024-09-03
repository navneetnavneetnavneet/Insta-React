import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full px-4 py-4 flex items-center justify-between">
      <img className="w-1/3" src="logo.png" alt="" />
      <div className="flex items-center gap-5 text-white">
        <Link to="/story/upload" className="text-[1.4rem] ri-heart-3-line"></Link>
        <Link to="/chat" className="text-[1.4rem] ri-messenger-line"></Link>
      </div>
    </div>
  );
};

export default Nav;
