import React from "react";

const Post = ({ image }) => {
  return (
    image && (
      <div className="w-full h-96 md:h-[75vh] mt-4 overflow-hidden">
        {image?.fileType === "image" && (
          <img className="w-full h-full object-cover" src={image.url} alt="" />
        )}
        {image?.fileType === "video" && (
          <video
            autoPlay={true}
            muted={true}
            loop={true}
            className="w-full h-full object-cover"
            src={image.url}
          ></video>
        )}
      </div>
    )
  );
};

export default Post;
