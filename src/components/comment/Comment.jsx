import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { asyncSendComment } from "../../store/actions/postActions";

const Comment = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const sendComment = () => {
    dispatch(asyncSendComment(postId, comment));
    setComment("");
  };

  const { user } = useSelector((state) => state.userReducer);

  const { posts } = useSelector((state) => state.postReducer);
  const post = posts && posts.find((p) => p._id === postId);

  return (
    post &&
    user && (
      <div className="w-full h-screen text-white bg-zinc-900">
        <div className="w-full h-[85vh] overflow-y-auto">
          <h1 className="text-xl font-bold text-center border-b py-2">
            Comments
          </h1>
          {post.comments.map((c, idx) => (
            <Link
              to={`/user/profile/${c.users[0].username}`}
              key={idx}
              className="w-full px-2 py-2 border-b border-zinc-300"
            >
              <div className="user flex gap-x-2 items-center">
                <div className="w-[12vw] h-[12vw] rounded-full overflow-hidden flex-shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    src={c.users[0].profileImage.url}
                    alt=""
                  />
                </div>
                <div className="">
                  <h4 className="text-xl font-semibold leading-none">
                    {c.users[0].username}
                  </h4>
                  <p className="text-zinc-400">{c.comment.slice(0, 40)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="w-full h-[7.5vh] px-2 z-[200] bg-zinc-900 border-2 border-zinc-700 rounded-full flex items-center">
          <div className="w-[12vw] h-[12vw] rounded-full overflow-hidden flex-shrink-0">
            <img
              className="w-full h-full object-cover"
              src={user.profileImage.url}
              alt=""
            />
          </div>
          <input
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            placeholder="Add a comment..."
            className="w-full py-4 px-4 resize-none bg-transparent border-none outline-none text-xl font-semibold"
          />
          <button
            onClick={sendComment}
            className="py-2 px-8 rounded-3xl bg-blue-500 text-2xl font-semibold text-white"
          >
            <i className="ri-arrow-up-line"></i>
          </button>
        </div>
      </div>
    )
  );
};

export default Comment;

/*
          <form
            onSubmit={submitCommentHandler}
            className="w-full h-[90%] px-2 flex items-center text-xl font-semibold border-2 rounded-full overflow-hidden text-zinc-100"
            >
            <textarea
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              placeholder="Enter Your Comment . . ."
              className="px-4 w-full bg-transparent outline-none resize-none"
            ></textarea>
            <button className="px-6 py-4 rounded-full bg-zinc-600">Send</button>
          </form>
*/
