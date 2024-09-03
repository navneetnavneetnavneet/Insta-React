import React from "react";
import Story from "./Story";
import { useSelector } from "react-redux";

const StoryDiv = () => {
  const { stories } = useSelector((state) => state.storyReducer);

  return (
    <div className="story px-4 mt-5 flex gap-2 whitespace-nowrap overflow-x-auto">
      {stories &&
        stories.map((story) => <Story key={story._id} user={story.user} />)}
    </div>
  );
};

export default StoryDiv;
