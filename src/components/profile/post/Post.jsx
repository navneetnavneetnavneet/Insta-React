import React from "react";

const Post = ({ posts }) => {
  return (
    <div className="flex flex-wrap gap-1 mt-1">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div className="w-[32.2%] h-32 overflow-hidden flex-shrink-0">
            <img
              key={post._id}
              className="w-full h-full object-cover"
              src={post.image.url}
              alt=""
            />
          </div>
        ))
      ) : (
        <p className="text-sm text-center mt-10 text-zinc-600">no post yet.</p>
      )}
    </div>
  );
};

export default Post;
