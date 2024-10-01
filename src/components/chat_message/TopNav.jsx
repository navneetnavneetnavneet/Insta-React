import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TopNav = ({ chatUser }) => {
  const navigate = useNavigate();

  const { onlineUsers } = useSelector((state) => state.userReducer);

  return (
    chatUser && (
      <div className="w-full px-4 py-2 md:py-4 border-b text-white border-zinc-600 flex items-center justify-between">
        <div className="user flex items-center gap-2">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-xl font-semibold cursor-pointer"
          ></i>
          <div className="relative">
            <div className="w-[10vw] h-[10vw] md:w-[3vw] md:h-[3vw] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={chatUser.profileImage.url}
                alt=""
              />
            </div>
            <span
              className={`absolute w-[3vw] h-[3vw] md:w-[1vw] md:h-[1vw] bottom-0 right-0 rounded-full z-[10] ${
                onlineUsers.includes(chatUser?._id) ? "bg-emerald-500" : ""
              } `}
            ></span>
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
