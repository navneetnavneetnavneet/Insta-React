import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { asyncLogoutUser } from "../../store/actions/userActions";

const Nav = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(asyncLogoutUser());
  };

  return (
    <div>
      <div className="w-full px-4 py-4 flex items-center justify-between">
        <h4 className="text-lg">username</h4>
        <div className="flex items-center gap-5">
          <i onClick={logoutHandler} className="ri-logout-box-line"></i>
          <Link to="/upload">
            <i className="text-[1.4rem] ri-add-box-line"></i>
          </Link>
          <Link to="/menu">
            <i className="text-[1.4rem] ri-menu-line"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
