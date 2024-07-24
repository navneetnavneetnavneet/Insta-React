import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncLikePost,
  asyncSavePost,
} from "../../../store/actions/postActions";
import { useNavigate } from "react-router-dom";

const Icons = ({ likes, postId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);

  return (
    <div className="options w-full px-4 flex justify-between items-center text-[1.4rem] text-white">
      <div className="flex gap-3 mt-2">
        <i
          onClick={() => dispatch(asyncLikePost(postId))}
          className={`${
            likes.indexOf(user._id) === -1
              ? "ri-heart-3-line"
              : "ri-heart-3-fill text-red-600"
          }`}
        ></i>
        <i onClick={() => navigate(`/post/comment/${postId}`)} className="ri-chat-3-line"></i>
        <i className="ri-share-circle-line"></i>
      </div>
      <i
        onClick={() => dispatch(asyncSavePost(postId))}
        className={`${
          user.savePosts.indexOf(postId) === -1
            ? "ri-bookmark-line"
            : "ri-bookmark-fill text-white"
        }`}
      ></i>
    </div>
  );
};

export default Icons;
