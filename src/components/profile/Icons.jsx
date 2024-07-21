import React from "react";
import { Link } from "react-router-dom";

const Icons = ({userId}) => {
  return (
    <div className="icons w-full border-t border-b border-zinc-500 mt-5 px-8 py-4 flex items-center justify-between">
      <Link to="/profile">
        <i className="text-[1.6rem] ri-layout-grid-line"></i>
      </Link>
      <Link to={`/user/post/${userId}`}>
        <i className="text-[1.6rem] ri-hard-drive-2-line"></i>
      </Link>
      <Link to={`/user/save_post/${userId}`}>
        <i className="text-[1.6rem] ri-bookmark-line"></i>
      </Link>
      <Link>
        <i className="text-[1.6rem] ri-account-pin-box-line"></i>
      </Link>
    </div>
  );
};

export default Icons;
