import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BottomNav = () => {
  const { user } = useSelector((state) => state.userReducer);
  return (
    user && (
      <div className="footer text-white flex justify-between items-center w-full md:w-1/3 md:left-1/2 md:-translate-x-1/2 fixed bottom-0 left-0 z-[10] bg-zinc-900 md:px-4 px-10 py-3">
        <Link to="/">
          <i className="text-[1.4rem] ri-home-line"></i>
        </Link>
        <Link to="/search">
          <i className="text-[1.4rem] ri-search-line"></i>
        </Link>
        <Link to="/upload">
          <i className="text-[1.4rem] ri-add-box-line"></i>
        </Link>
        <Link to="/profile">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={user.profileImage.url}
              alt=""
            />
          </div>
        </Link>
      </div>
    )
  );
};

export default BottomNav;
