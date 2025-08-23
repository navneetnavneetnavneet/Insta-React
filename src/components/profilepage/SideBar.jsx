import React from "react";
import { Link } from "react-router-dom";
import { asyncSignOutUser } from "../../store/actions/userActions";
import { useDispatch } from "react-redux";

const SideBar = ({ userId, setWidth, width }) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{ width: `${width}%` }}
      className="absolute top-0 right-0 z-[999] duration-500 h-screen bg-black overflow-hidden"
    >
      <div className="flex items-center justify-between px-2 md:px-4 py-4 border-b border-zinc-200">
        <i
          onClick={() => setWidth(0)}
          className="text-[1.5rem] ri-close-fill cursor-pointer"
        ></i>
        <i className="text-[1.5rem] ri-menu-line cursor-pointer"></i>
      </div>
      <div className="w-full text-xl">
        <Link
          to="/"
          className="flex items-center gap-3 px-2 md:px-4 py-4 border-b border-zinc-200 hover:bg-zinc-950 duration-300"
        >
          <i className="ri-home-line"></i>
          <h5>Home</h5>
        </Link>
        <Link
          to={`/profile/${userId}`}
          className="flex items-center gap-3 px-2 md:px-4 py-4 border-b border-zinc-200 hover:bg-zinc-950 duration-300"
        >
          <i className="ri-user-line"></i>
          <h5>Profile</h5>
        </Link>
        <Link
          to="/edit-profile"
          className="flex items-center gap-3 px-2 md:px-4 py-4 border-b border-zinc-200 hover:bg-zinc-950 duration-300"
        >
          <i className="ri-pencil-line"></i>
          <h5>Edit</h5>
        </Link>
        <Link
          to="/upload-story"
          className="flex items-center gap-3 px-2 md:px-4 py-4 border-b border-zinc-200 hover:bg-zinc-950 duration-300"
        >
          <i className="ri-movie-2-line"></i>
          <h5>Story</h5>
        </Link>
        <Link
          to="/upload-post"
          className="flex items-center gap-3 px-2 md:px-4 py-4 border-b border-zinc-200 hover:bg-zinc-950 duration-300"
        >
          <i className="ri-add-box-line text-[1.5rem]"></i>
          <h5>Post</h5>
        </Link>
        <Link
          to={`/user/save-post/${userId}`}
          className="flex items-center gap-3 px-2 md:px-4 py-4 border-b border-zinc-200 hover:bg-zinc-950 duration-300"
        >
          <i className="ri-bookmark-line"></i>
          <h5>Save</h5>
        </Link>
        <Link
          to="#"
          className="flex items-center gap-3 px-2 md:px-4 py-4 border-b border-zinc-200 hover:bg-zinc-950 duration-300"
        >
          <i className="ri-qr-code-line"></i>
          <h5>QR-code</h5>
        </Link>
        <Link
          to="#"
          className="flex items-center gap-3 px-2 md:px-4 py-4 border-b border-zinc-200 hover:bg-zinc-950 duration-300"
        >
          <i className="ri-settings-5-line"></i>
          <h5>Setting</h5>
        </Link>
        <div
          onClick={() => dispatch(asyncSignOutUser())}
          className="flex items-center gap-3 px-2 md:px-4 py-4 border-b border-zinc-200 hover:bg-zinc-950 duration-300"
        >
          <i className="ri-logout-box-line"></i>
          <h5>Logout</h5>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
