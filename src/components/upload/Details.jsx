import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncUploadPost } from "../../store/actions/postActions";

const Details = () => {
  const imageRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");

  const imageHandler = () => {
    imageRef.current.click();
  };

  const handleImageChange = (e) => {
    // if (e.target.files && e.target.files[0]) {
    //   const selectedImage = URL.createObjectURL(e.target.files[0]);
    //   setImage(selectedImage);
    // }

    setImage(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const uploadPost = {
      image,
      caption,
    };
    await dispatch(asyncUploadPost(uploadPost));
    navigate("/");
  };

  return (
    <div className="mt-20">
      <div className="flex flex-col items-center gap-2">
        <div className="image w-[25vw] h-[25vw] md:w-[6vw] md:h-[6vw] rounded-full border-2 border-zinc-800 flex items-center justify-center">
          <i className="text-5xl font-light ri-image-line"></i>
        </div>
        <button onClick={imageHandler} className="text-blue-500 capitalize">
          select picture
        </button>
      </div>
      <form onSubmit={submitHandler} className="w-full px-6 py-3 mt-5">
        <input
          hidden
          onChange={handleImageChange}
          ref={imageRef}
          type="file"
          placeholder="Image"
        />
        <textarea
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Write a caption..."
          className="w-full text-lg mt-2 px-4 py-2 resize-none border boder-zinc-800 rounded-md bg-transparent"
        ></textarea>
        <button
          disabled={image == "" ? true : false}
          className={`w-full text-lg mt-2 px-4 py-2 border boder-zinc-800 rounded-md ${
            image != "" ? "bg-blue-600" : "bg-blue-600 opacity-30"
          }`}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Details;
