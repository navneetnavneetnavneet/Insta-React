import React from "react";

const Post = () => {
  return (
    <div className="flex flex-wrap gap-1 mt-1">
      <div className="w-[32.2%] h-32 overflow-hidden flex-shrink-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1719430074740-a5ee49a67d45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default Post;
