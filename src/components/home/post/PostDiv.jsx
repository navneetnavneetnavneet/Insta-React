import React from "react";
import Post from "./Post";
import User from "./User";
import Icons from "./Icons";
import UserDetails from "./UserDetails";

const PostDiv = ({ post }) => {
  return (
    post && (
      <div className="w-full min-h-[50vh] mt-10 text-white">
        <User user={post.user} />
        <Post image={post.image} />
        <Icons likes={post.likes} postId={post._id} />
        <UserDetails
          likes={post.likes}
          username={post.user.username}
          caption={post.caption}
        />
      </div>
    )
  );
};

export default PostDiv;
