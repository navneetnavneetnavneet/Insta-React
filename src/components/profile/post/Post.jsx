import React from "react";

const Post = ({ posts }) => {
  return (
    <div className="flex flex-wrap gap-1 mt-1">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post._id}
            className="w-[32.2%] md:w-[32.8%] h-32 md:h-40 overflow-hidden flex-shrink-0"
          >
            {post.image.fileType === "image" && (
              <img
                className="w-full h-full object-cover"
                src={post.image.url}
                alt=""
              />
            )}
            {post.image.fileType === "video" && (
              <video
                loop={true}
                muted={true}
                autoPlay={true}
                className="w-full h-full object-cover"
                src={post.image.url}
              ></video>
            )}
          </div>
        ))
      ) : (
        <p className="w-full text-sm text-center mt-20 text-zinc-400">
          no post yet.
        </p>
      )}
    </div>
  );
};

export default Post;
