import React from "react";
import Story from "./Story";

const StoryDiv = () => {
  return (
    <div className="story px-4 mt-5 flex gap-2 whitespace-nowrap overflow-x-auto">
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  );
};

export default StoryDiv;
