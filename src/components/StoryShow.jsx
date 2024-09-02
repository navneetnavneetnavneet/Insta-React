import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const StoryShow = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { stories } = useSelector((state) => state.storyReducer);
  const storyUser = stories && stories.find((s) => s.user._id === userId);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (storyUser) {
      interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 30);

      if (progress >= 100) {
        setProgress(0);
        if (currentIndex < storyUser.user.stories.length - 1) {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          navigate("/");
        }
      }
      return () => clearInterval(interval);
    }
  }, [currentIndex, progress, storyUser]);

  const handlePreviousStroy = () => {
    setProgress(0);
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextStroy = () => {
    if (currentIndex < storyUser.user.stories.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      navigate("/");
    }
  };

  return (
    storyUser && (
      <div className="w-full h-screen relative">
        <div
          style={{
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9))`,
          }}
          className="w-full absolute z-[5] top-0 left-0 py-4 border-b border-zinc-200"
        >
          <div className="px-4 flex items-center gap-2">
            <div className="w-[10vw] h-[10vw] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={storyUser.user?.profileImage?.url}
                alt=""
              />
            </div>
            <div className="user">
              <h4 className="text-xl font-semibold leading-none text-white">
                {storyUser.user.username}
              </h4>
            </div>
          </div>
          <div className="w-full h-[4px] bg-zinc-600 absolute bottom-0 overflow-hidden">
            <div
              style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
              className="h-full bg-white rounded-lg"
            ></div>
          </div>
        </div>
        <div className="w-full h-screen overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={storyUser.user?.stories[currentIndex]?.storyUrl.url}
            alt=""
          />
        </div>
        <div
          onClick={handlePreviousStroy}
          className="w-1/2 h-full absolute top-0 left-0"
        ></div>
        <div
          onClick={handleNextStroy}
          className="w-1/2 h-full opacity-30 absolute top-0 right-0"
        ></div>
        <div className="flex gap-2 absolute  bottom-16 w-full px-4">
          <div className="w-full rounded-full bg-green border-2">
            <input
              type="text"
              placeholder="message . . ."
              className="w-full bg-transparent px-4 py-2 text-lg outline-none text-white"
            />
          </div>
          <div className="text-white flex gap-1 items-center">
            <i className="ri-heart-line text-3xl"></i>
            <i className="ri-send-plane-fill text-3xl"></i>
          </div>
        </div>
      </div>
    )
  );
};

export default StoryShow;
