import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";

const TopNav = ({ username, userId }) => {
  const navigate = useNavigate();

  const [width, setWidth] = useState(0);

  const { user } = useSelector((state) => state.userReducer);

  return (
    <>
      <div className="w-full px-2 md:px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-[1.5rem] cursor-pointer"
          ></i>
          <h3 className="text-lg font-medium tracking-tighter">{username}</h3>
        </div>

        {user?.username === username && (
          <div className="flex items-center gap-5">
            <Link
              to="/upload-post"
              className="ri-add-box-line text-[1.5rem] cursor-pointer"
            ></Link>
            <i
              onClick={() => setWidth(100)}
              className="ri-menu-line text-[1.5rem] cursor-pointer"
            ></i>
          </div>
        )}
      </div>
      <SideBar userId={userId} width={width} setWidth={setWidth} />
    </>
  );
};

export default TopNav;
