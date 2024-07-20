import React from "react";
import { useSelector } from "react-redux";

const Icons = ({ likes, postId }) => {
  const { user } = useSelector((state) => state.userReducer);

  return (
    <div className="options w-full px-4 flex justify-between items-center text-[1.4rem] text-white">
      <div className="flex gap-3 mt-2">
        {likes.indexOf(user._id) === -1 ? (
          <i className="ri-heart-3-line"></i>
        ) : (
          <i className="ri-heart-3-fill text-red-600"></i>
        )}
        <i className="ri-chat-3-line"></i>
        <i className="ri-share-circle-line"></i>
      </div>
      {user.savePosts.indexOf(postId) === -1 ? (
        <i className="ri-bookmark-line"></i>
      ) : (
        <i className="ri-bookmark-fill"></i>
      )}
    </div>
  );
};

export default Icons;
