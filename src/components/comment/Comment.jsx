import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { asyncSendComment } from "../../store/actions/postActions";

const Comment = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const submitCommentHandler = (e) => {
    e.preventDefault();
    dispatch(asyncSendComment(postId, comment));

    setComment("");
  };

  const { posts } = useSelector((state) => state.postReducer);
  const post = posts && posts.find((p) => p._id === postId);

  return (
    post && (
      <div className="w-full h-screen bg-zinc-800">
        <div className="w-full h-[85vh] overflow-y-auto text-white">
          {post.comments.map((c, idx) => (
            <div key={idx} className="w-full px-4 py-2 border-b">
              <div className="user flex gap-2 items-center">
                <div className="w-[12vw] h-[12vw] rounded-full overflow-hidden flex-shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    src={c.users[0].profileImage.url}
                    alt=""
                  />
                </div>
                <div className="mt-5">
                  <h4 className="text-xl font-semibold leading-none">
                    {c.users[0].username}
                  </h4>
                  <p className="text-zinc-300">{c.comment.slice(0, 40)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-[9vh] z-[200]">
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
        </div>
      </div>
    )
  );
};

export default Comment;
