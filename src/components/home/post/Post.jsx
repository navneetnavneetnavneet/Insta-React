import React from "react";

const Post = ({image}) => {
  return (
    <div className="w-full h-96 md:h-[75vh] mt-4 overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src={image.url}
        alt=""
      />
    </div>
  );
};

export default Post;
