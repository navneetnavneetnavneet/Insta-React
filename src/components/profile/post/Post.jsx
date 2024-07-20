import React from "react";

const Post = ({ posts }) => {
  return (
    <div className="flex flex-wrap gap-1 mt-1">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="w-[32.2%] h-32 overflow-hidden flex-shrink-0">
            <img
              className="w-full h-full object-cover"
              src={post.image.url}
              alt=""
            />
          </div>
        ))
      ) : (
        <p className="w-full text-sm text-center mt-20 text-zinc-400">no post yet.</p>
      )}
    </div>
  );
};

export default Post;
