import React from "react";
import Nav from "./nav/Nav";
import StoryDiv from "./story/StoryDiv";
import PostDiv from "./post/PostDiv";
import { useSelector } from "react-redux";
import Loading from "../Loading";

const Home = () => {
  const { posts } = useSelector((state) => state.postReducer);
  // console.log(posts);

  return posts ? (
    <div className="w-full min-h-screen pb-20 bg-zinc-900">
      <Nav />
      <StoryDiv />
      {posts.map((post) => (
        <PostDiv key={post._id} post={post} />
      ))}
    </div>
  ) : (
    <Loading />
  );
};

export default Home;
