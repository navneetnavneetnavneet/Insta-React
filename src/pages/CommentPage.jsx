import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingPage from "./LoadingPage";
import { useNavigate, useParams } from "react-router-dom";
import { asyncCommentPost } from "../store/actions/postActions";

const CommentPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { postId } = useParams();

  const { user } = useSelector((state) => state.userReducer);
  const { posts } = useSelector((state) => state.postReducer);

  const [comment, setComment] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!postId || !comment) {
      return;
    }
    await dispatch(asyncCommentPost(postId, comment));

    setComment("");
  };

  const post = posts && posts.find((p) => p._id === postId);

  return user ? (
    <div className="relative w-full h-screen overflow-x-hidden overflow-y-auto">
      <div className="w-full px-2 md:px-4 py-2 flex items-center justify-between border-b-2 border-zinc-600">
        <i
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-[1.5rem] cursor-pointer"
        ></i>
        <h1 className="text-xl font-medium tracking-tighter">Comment</h1>
        <i className="ri-more-2-fill text-[1.5rem] cursor-pointer"></i>
      </div>

      {post &&
        post.comments.map((c) => (
          <div
            key={c._id}
            className="px-2 md:px-4 py-2 border-b-2 border-zinc-600 flex items-start gap-2"
          >
            <div className="w-14 md:w-16 h-14 md:h-16 flex-shrink-0 rounded-full border border-zinc-600 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={c.users[0].profileImage.url}
                alt=""
              />
            </div>
            <div className="flex flex-col tracking-tighter">
              <h1 className="text-lg font-medium leading-none">
                {c.users[0].username}
              </h1>
              <p className="text-sm opacity-60 leading-none">
                {c.comment.slice(0, 100)}
              </p>
            </div>
          </div>
        ))}

      <div className="fixed bottom-0 left-0 md:left-1/2 md:-translate-x-1/2 z-[999] w-full md:w-[50vw] lg:w-[40vw] px-2 py-2">
        <form
          onSubmit={submitHandler}
          className="flex items-center gap-2 border-2 border-white rounded-full px-2 py-2 bg-white tracking-tighter"
        >
          <div className="w-10 h-10 flex-shrink-0 rounded-full border border-zinc-600 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={user.profileImage.url}
              alt=""
            />
          </div>
          <input
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            name="comment"
            type="text"
            placeholder="write comment . . ."
            className="w-full px-2 resize-none text-black text-lg font-medium bg-transparent outline-none "
          />
          <button className="px-5 py-1 rounded-3xl bg-blue-500 font-semibold text-white">
            <i className="ri-arrow-up-line text-[1.4rem]"></i>
          </button>
        </form>
      </div>
    </div>
  ) : (
    <LoadingPage />
  );
};

export default CommentPage;
