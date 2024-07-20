import React from "react";
import Nav from "./nav/Nav";
import StoryDiv from "./story/StoryDiv";
import PostDiv from "./post/PostDiv";
import { useSelector } from "react-redux";

const Home = () => {
  const { posts } = useSelector((state) => state.postReducer);
  console.log(posts);

  return (
    <div className="w-full min-h-screen pb-20 bg-zinc-900">
      <Nav />
      <StoryDiv />
      {posts.map((post) => (
        <PostDiv key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Home;
