import React from "react";
import { Link } from "react-router-dom";

const Story = ({ story }) => {
  return (
    story && (
      <div className="circle flex-shrink-0">
        <Link
          to={`/story/user/${story.user._id}`}
          className="gradient w-[18vw] h-[18vw] md:w-[5vw] md:h-[5vw] bg-sky-100 rounded-full bg-gradient-to-r from-purple-700 to-orange-500 flex items-center justify-center"
        >
          <div className="inner w-[92%] h-[92%] rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={story.user.profileImage.url}
              alt=""
            />
          </div>
        </Link>
      </div>
    )
  );
};

export default Story;
