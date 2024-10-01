import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Story = ({ user }) => {
  const loggedInUser = useSelector((state) => state.userReducer);

  return (
    user && (
      <div className="circle flex-shrink-0 relative">
        <Link
          to={`/story/user/${user._id}`}
          className="gradient w-[18vw] h-[18vw] md:w-[5vw] md:h-[5vw] bg-sky-100 rounded-full bg-gradient-to-r from-purple-700 to-orange-500 flex items-center justify-center"
        >
          <div className="inner w-[92%] h-[92%] rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={user.profileImage.url}
              alt=""
            />
          </div>
        </Link>
        {loggedInUser.user._id === user._id ? (
          <Link
            to="/story/upload"
            className="w-[6vw] md:w-[2vw] md:h-[2vw] h-[6vw] flex items-center justify-center absolute z-[100] bottom-[3vw] right-[3vw] md:bottom-[1vw] md:right-[1vw] translate-x-1/2 translate-y-1/2 rounded-full bg-zinc-200"
          >
            <i className="ri-add-line text-[1.4rem] font-semibold"></i>
          </Link>
        ) : (
          ""
        )}
      </div>
    )
  );
};

export default Story;
