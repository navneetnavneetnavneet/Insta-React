import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncFollowAndFollowing } from "../../store/actions/userActions";
import { asyncAccessChat } from "../../store/actions/chatActions";

const Buttons = ({ userId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);

  return (
    user && (
      <div className="flex gap-2 md:gap-5 tracking-tighter">
        {user._id === userId ? (
          <Link
            to="/edit-profile"
            className="w-1/2 py-1 rounded-md flex items-center justify-center text-base font-medium border-none bg-sky-600 hover:bg-sky-700 duration-300 cursor-pointer"
          >
            Edit Profile
          </Link>
        ) : (
          <button
            onClick={async () =>
              await dispatch(asyncFollowAndFollowing(userId))
            }
            className="w-1/2 py-1 rounded-md text-base font-medium border-none bg-sky-600 hover:bg-sky-700 duration-300 cursor-pointer"
          >
            {user.followings.indexOf(userId) === -1 ? "Follow" : "Following"}
          </button>
        )}
        {user._id === userId ? (
          <button className="w-1/2 py-1 rounded-md flex items-center justify-center text-base font-medium border-none bg-sky-600 hover:bg-sky-700 duration-300 cursor-pointer">
            Share Profile
          </button>
        ) : (
          <button
            onClick={async () => {
              const chatId = await dispatch(asyncAccessChat(userId));
              navigate(`/chat/${chatId}`);
            }}
            className="w-1/2 py-1 rounded-md flex items-center justify-center text-base font-medium border-none bg-sky-600 hover:bg-sky-700 duration-300 cursor-pointer"
          >
            Message
          </button>
        )}
      </div>
    )
  );
};

export default Buttons;
