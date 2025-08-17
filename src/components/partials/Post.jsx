import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  asyncDeletePost,
  asyncLikePost,
  asyncSavePost,
} from "../../store/actions/postActions";

const Post = ({ post }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);

  // console.log(post);

  return (
    <div className="w-full pb-4">
      <div className="px-2 md:px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={post.user.profileImage.url}
              alt=""
            />
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <h4 className="text-base md:text-lg ">{post.user.username}</h4>
            <small className="text-sm md:text-base opacity-50">1d</small>
          </div>
        </div>
        {post.user._id === user._id ? (
          <i
            onClick={() => dispatch(asyncDeletePost(post._id))}
            className="ri-delete-bin-line text-[1.5rem] cursor-pointer"
          ></i>
        ) : (
          <i className="ri-more-2-fill text-[1.5rem] cursor-pointer"></i>
        )}
      </div>
      <div className="w-full h-96 md:h-[50vh] lg:h-[60vh] overflow-hidden">
        {post.media.fileType === "image" && (
          <img
            className="w-full h-full object-cover"
            src={post.media.url}
            alt=""
          />
        )}
        {post.media.fileType === "video" && (
          <video
            autoPlay={true}
            muted={true}
            loop={true}
            className="w-full h-full object-cover"
            src={post.media.url}
          ></video>
        )}
      </div>
      <div className="w-full px-2 md:px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <i
              onClick={() => dispatch(asyncLikePost(post._id))}
              className={`${
                post.likes.includes(user._id)
                  ? "ri-heart-3-fill text-red-600"
                  : "ri-heart-3-line"
              } text-[1.5rem] duration-300 cursor-pointer`}
            ></i>
            <Link
              to={`/comment-post/${post._id}`}
              className="ri-chat-3-line text-[1.5rem] cursor-pointer"
            ></Link>
            <i className="ri-share-circle-line text-[1.5rem] cursor-pointer"></i>
          </div>
          <i
            onClick={() => dispatch(asyncSavePost(post._id))}
            className={`${
              user.savePosts.includes(post._id)
                ? "ri-bookmark-fill text-white"
                : "ri-bookmark-line"
            }  text-[1.5rem] duration-300 cursor-pointer`}
          ></i>
        </div>
        <h4 className="text-sm md:text-base tracking-tighter py-1">
          {post.likes.length} Likes
        </h4>
        <p className="text-sm font-thin leading-none">
          <span className="text-base md:text-lg tracking-tighter font-normal mr-2">
            {post.user.username}
          </span>
          {post.caption}
        </p>
      </div>
    </div>
  );
};

export default Post;
