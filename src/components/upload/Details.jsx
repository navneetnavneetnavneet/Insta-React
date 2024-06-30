import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const imageRef = useRef();
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");

  const imageHandler = () => {
    imageRef.current.click();
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedImage = URL.createObjectURL(e.target.files[0]);
      setImage(selectedImage);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const uploadPost = {
      image,
      caption,
    };
    console.log(uploadPost);

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
      <form onSubmit={submitHandler} class="w-full px-6 py-3 mt-10">
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
        <button className="w-full text-lg mt-2 px-4 py-2 border boder-zinc-800 rounded-md bg-blue-600">
          Post
        </button>
      </form>
    </div>
  );
};

export default Details;
