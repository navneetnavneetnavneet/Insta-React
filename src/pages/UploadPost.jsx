import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { asyncUploadPost } from "../store/actions/postActions";

const UploadPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [caption, setCaption] = useState("");
  const [media, setMedia] = useState("");

  const mediaRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!caption || !media) {
      return toast.warning("All fileds are required !");
    }

    await dispatch(asyncUploadPost({ caption, media }));
    toast.success("Post is uploaded");
    navigate("/");
  };

  return (
    <section className="w-full h-screen">
      <div className="w-full px-2 md:px-4 py-2 flex items-center justify-between border-b border-zinc-600">
        <i
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-[1.5rem] cursor-pointer"
        ></i>
        <h3 className="text-xl font-medium tracking-tighter">Upload Post</h3>
        <Link to="/profile" className="flex items-center gap-1 cursor-pointer">
          <i className="ri-user-line text-[1.2rem]"></i>
          <h4 className="text-sm font-medium tracking-tighter">Profile</h4>
        </Link>
      </div>
      <div className="pt-10 px-2 md:px-4 flex flex-col items-center gap-10">
        <div className="flex flex-col gap-2">
          <div className="w-24 md:w-28 h-24 md:h-28 flex items-center justify-center rounded-full border border-zinc-600">
            <i className="text-5xl font-thin ri-image-line"></i>
          </div>
          <button
            onClick={() => mediaRef.current.click()}
            className="text-base tracking-tighter font-normal cursor-pointer text-sky-600"
          >
            Select Picture
          </button>
        </div>
        <form onSubmit={submitHandler} className="w-full flex flex-col gap-3">
          <input
            onChange={(e) => setMedia(e.target.files[0])}
            ref={mediaRef}
            hidden={true}
            type="file"
          />
          <textarea
            onChange={(e) => setCaption(e.target.value)}
            value={caption}
            name="caption"
            placeholder="Write a caption . . ."
            className="w-full resize-none px-2 py-1 h-20 rounded-md text-base font-normal outline-none bg-transparent border border-zinc-600"
          ></textarea>
          <button className="w-full px-2 py-2 rounded-md border-none text-base font-medium tracking-tighter bg-sky-600 hover:bg-sky-700 text-white">
            Post
          </button>
        </form>
      </div>
    </section>
  );
};

export default UploadPost;
