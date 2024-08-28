import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { asyncLogoutUser } from "../../store/actions/userActions";

const Sidebar = ({ userId, width, setWidth }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`absolute top-0 -right-0 duration-700 w-[${width}] h-screen z-[100] bg-zinc-800 text-white`}
    >
      <div className="flex items-center justify-between px-4 py-4 border-b border-zinc-200">
        <i
          onClick={() => setWidth("0%")}
          className="text-[1.4rem] ri-close-fill"
        ></i>
        <i className="text-[1.4rem] ri-menu-line"></i>
      </div>
      <div className="w-full text-2xl">
        <Link to="/">
          <div className="flex items-center gap-5 px-4 py-4 border-b border-zinc-200">
            <i className="ri-home-line"></i>
            <h5>Home</h5>
          </div>
        </Link>
        <Link to="/profile">
          <div className="flex items-center gap-5 px-4 py-4 border-b border-zinc-200">
            <i className="ri-user-line"></i>
            <h5>Profile</h5>
          </div>
        </Link>
        <Link to="/edit">
          <div className="flex items-center gap-5 px-4 py-4 border-b border-zinc-200">
            <i className="ri-pencil-line"></i>
            <h5>Edit</h5>
          </div>
        </Link>
        <Link to={`/user/save_post/${userId}`}>
          <div className="flex items-center gap-5 px-4 py-4 border-b border-zinc-200">
            <i className="ri-bookmark-line"></i>
            <h5>Save</h5>
          </div>
        </Link>
        <Link to="#">
          <div className="flex items-center gap-5 px-4 py-4 border-b border-zinc-200">
            <i className="ri-qr-code-line"></i>
            <h5>QR-code</h5>
          </div>
        </Link>
        <Link to="#">
          <div className="flex items-center gap-5 px-4 py-4 border-b border-zinc-200">
            <i className="ri-settings-5-line"></i>
            <h5>Setting</h5>
          </div>
        </Link>
        <Link onClick={() => dispatch(asyncLogoutUser())}>
          <div className="flex items-center gap-5 px-4 py-4 border-b border-zinc-200">
            <i className="ri-logout-box-line"></i>
            <h5>Logout</h5>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
