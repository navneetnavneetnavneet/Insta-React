import React, { useEffect, useState } from "react";
import Nav from "./nav/Nav";
import StoryDiv from "./story/StoryDiv";
import PostDiv from "./post/PostDiv";
import { useSelector } from "react-redux";
import Loading from "../Loading";

const Home = () => {
  const [reversePosts, setReversePosts] = useState([]);
  
  const { posts } = useSelector((state) => state.postReducer);

  useEffect(() => {
    setReversePosts([...posts].reverse());
  }, [posts]);

  return reversePosts ? (
    <div className="w-full md:w-1/3 md:mx-auto min-h-screen pb-20 bg-zinc-900">
      <Nav />
      <StoryDiv />
      {reversePosts.map((post) => (
        <PostDiv key={post._id} post={post} />
      ))}
    </div>
  ) : (
    <Loading />
  );
};

export default Home;
