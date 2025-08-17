import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Story = ({ user }) => {
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.userReducer);

  return (
    loggedInUser && (
      <Link
        to={`/story/${user?._id}`}
        className="z-[99] flex flex-col items-center"
      >
        <div className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0 bg-sky-100 rounded-full bg-gradient-to-r from-purple-700 to-orange-500 flex items-center justify-center">
          <div className="inner w-[92%] h-[92%] rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={user?.profileImage.url}
              alt=""
            />
          </div>
          {loggedInUser.user?._id === user?._id ? (
            <div
              onClick={() => navigate("/upload-story")}
              className="absolute z-[999] bottom-0 right-0 w-6 h-6 rounded-full flex items-center justify-center bg-zinc-600 cursor-pointer"
            >
              <i className="ri-add-line text-[1.2rem]"></i>
            </div>
          ) : (
            ""
          )}
        </div>
        <h4 className="text-xs md:text-sm font-medium opacity-50">
          {user?.username.slice(0, 10)}
        </h4>
      </Link>
    )
  );
};

export default Story;
