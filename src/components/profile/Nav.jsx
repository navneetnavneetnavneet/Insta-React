import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { asyncLogoutUser } from "../../store/actions/userActions";
import Sidebar from "./Sidebar";

const Nav = ({username, userId}) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(asyncLogoutUser());
  };

  const [width, setWidth] = useState("0%");

  const menuIconHandler = () => {
    setWidth("100%");
  };

  return (
    <>
      <div className="w-full px-4 py-4 flex items-center justify-between">
        <h4 className="text-lg">{username}</h4>
        <div className="flex items-center gap-5">
          <i onClick={logoutHandler} className="ri-logout-box-line"></i>
          <Link to="/upload">
            <i className="text-[1.4rem] ri-add-box-line"></i>
          </Link>
          <i
            onClick={menuIconHandler}
            className="text-[1.4rem] ri-menu-line"
          ></i>
        </div>
      </div>
      <Sidebar userId={userId} width={width} setWidth={setWidth} />
    </>
  );
};

export default Nav;
