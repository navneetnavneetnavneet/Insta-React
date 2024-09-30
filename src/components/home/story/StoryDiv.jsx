import React from "react";
import Story from "./Story";
import { useSelector } from "react-redux";

const StoryDiv = () => {
  const { stories } = useSelector((state) => state.storyReducer);
  const { user } = useSelector((state) => state.userReducer);

  return (
    user && (
      <div className="story px-4 mt-5 flex gap-2 whitespace-nowrap overflow-x-auto">
        {user.stories.length === 0 ? <Story user={user} /> : ""}
        {stories &&
          stories.map((story) => <Story key={story._id} user={story.user} />)}
      </div>
    )
  );
};

export default StoryDiv;
