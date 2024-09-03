import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncUploadStory } from "../../store/actions/storyActions";

const Details = () => {
  const imageRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [storyUrl, setStoryUrl] = useState("");

  const imageHandler = () => {
    imageRef.current.click();
  };

  const handleImageChange = (e) => {
    // if (e.target.files && e.target.files[0]) {
    //   const selectedImage = URL.createObjectURL(e.target.files[0]);
    //   setStoryUrl(selectedImage);
    // }

    setStoryUrl(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const uploadStory = {
      storyUrl,
    };
    await dispatch(asyncUploadStory(uploadStory));
    navigate("/");
  };

  return (
    <div className="mt-20">
      <div className="flex flex-col items-center gap-2">
        <div className="image w-[25vw] h-[25vw] rounded-full border-2 border-zinc-800 flex items-center justify-center">
          <i className="text-5xl font-light ri-image-line"></i>
        </div>
        <button onClick={imageHandler} className="text-blue-500 capitalize">
          select picture
        </button>
      </div>
      <form onSubmit={submitHandler} className="w-full px-6 py-3 mt-10">
        <input
          hidden
          onChange={handleImageChange}
          ref={imageRef}
          type="file"
          placeholder="Image"
        />
        <button
          disabled={storyUrl == "" ? true : false}
          className={`w-full text-lg mt-2 px-4 py-2 border boder-zinc-800 rounded-md ${
            storyUrl != "" ? "bg-blue-600" : "bg-blue-600 opacity-30"
          }`}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Details;
