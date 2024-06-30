import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full flex items-center justify-between px-4 py-4">
      <Link to="/profile" className="flex items-center">
        <i className="ri-arrow-left-s-line"></i>
        <h4>Profile</h4>
      </Link>
      <h3>Upload Post</h3>
      <Link to="/" className="flex items-center gap-1">
        <i className="ri-home-line"></i>
        <h3>Home</h3>
      </Link>
    </div>
  );
};

export default Nav;
