import React from "react";
import { useNavigate } from "react-router-dom";

const TopNav = ({ chatUser }) => {
  const navigate = useNavigate();

  return (
    chatUser && (
      <div className="w-full px-4 py-2 border-b border-zinc-600 flex items-center justify-between">
        <div className="user flex items-center gap-2">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-xl font-semibold"
          ></i>
          <div className="w-[10vw] h-[10vw] rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={chatUser.profileImage.url}
              alt=""
            />
          </div>
          <div>
            <h4 className="text-xl font-semibold leading-none">
              {chatUser.fullName}
            </h4>
            <h1 className="text-lg font-semibold text-zinc-400">
              {chatUser.username}
            </h1>
          </div>
        </div>
        <div className="icons flex items-center gap-5 text-xl">
          <i className="ri-phone-line"></i>
          <i className="ri-vidicon-line"></i>
        </div>
      </div>
    )
  );
};

export default TopNav;
