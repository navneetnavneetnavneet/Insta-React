import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncFollowAndFollowing } from "../../../store/actions/userActions";

const Button = ({ userId }) => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.userReducer.user);

  return loggedInUser._id == userId ? (
    <div className="mt-5 px-4">
      <Link to="/edit" className="px-6 py-2 bg-zinc-700 text-xs rounded-md">
        Edit Profile
      </Link>
    </div>
  ) : (
    <div className="mt-5 px-4 flex gap-2">
      <Link
        onClick={() => dispatch(asyncFollowAndFollowing(userId))}
        className="px-4 py-2 bg-blue-600 text-xs rounded-md"
      >
        {loggedInUser.followings.indexOf(userId) === -1
          ? "Follow"
          : "Following"}
      </Link>
      <Link
        to={`/chat/${userId}`}
        className="px-6 py-2 bg-blue-600 text-xs rounded-md"
      >
        Message
      </Link>
      <Link className="px-6 py-2 bg-blue-600 text-xs rounded-md">Contact</Link>
    </div>
  );
};

export default Button;
