import React from "react";
import TopNav from "../components/homepage/TopNav";
import Post from "../components/partials/Post";
import Story from "../components/homepage/Story";
import { useSelector } from "react-redux";
import LoadingPage from "./LoadingPage";

const HomePage = () => {
  const { user } = useSelector((state) => state.userReducer);
  const { posts } = useSelector((state) => state.postReducer);
  const { stories } = useSelector((state) => state.storyReducer);

  return user ? (
    <section className="w-full">
      <TopNav />
      <div className="story w-full px-2 md:px-4 flex gap-5 overflow-x-auto overflow-y-hidden">
        {user?.stories?.length === 0 && <Story user={user} />}
        {stories.length > 0 &&
          stories.map((story) => <Story key={story._id} user={story.user} />)}
      </div>
      <div className="w-full pb-20">
        {posts.length > 0
          ? [...posts]
              ?.reverse()
              .map((post) => <Post key={post._id} post={post} />)
          : ""}
      </div>
    </section>
  ) : (
    <LoadingPage />
  );
};

export default HomePage;
