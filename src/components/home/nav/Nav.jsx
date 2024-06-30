import React from "react";

const Nav = () => {
  return (
    <div className="w-full px-4 py-4 flex items-center justify-between">
      <img className="w-1/3" src="logo.png" alt="" />
      <div className="flex items-center gap-5 text-white">
        <i className="text-[1.4rem] ri-heart-3-line"></i>
        <i className="text-[1.4rem] ri-messenger-line"></i>
      </div>
    </div>
  );
};

export default Nav;
