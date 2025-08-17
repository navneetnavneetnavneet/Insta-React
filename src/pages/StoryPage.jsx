import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import {
  asyncDeleteStory,
  asyncLikeStory,
} from "../store/actions/storyActions";

const StoryPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useParams();

  const { user } = useSelector((state) => state.userReducer);
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
    } else {
      navigate("/");
    }
  }, [currentIndex, progress, storyUser]);

  const handlePreviousStory = () => {
    setProgress(0);
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      navigate("/");
    }
  };

  const handleNextStory = () => {
    if (currentIndex < storyUser.user.stories.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      navigate("/");
    }
  };

  let story = storyUser && storyUser.user.stories[currentIndex];

  return storyUser ? (
    <div className="w-full h-screen">
      <div
        style={{
          background: `linear-gradient(to bottom, rgba(0, 0, .06, 0.9), rgba(0, 0, .03, 0.5))`,
        }}
        className="fixed top-0 z-[999] w-full px-2 md:px-4 py-2 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="relative w-14 md:w-16 h-14 md:h-16">
            <img
              className="w-full h-full object-cover rounded-full overflow-hidden"
              src={storyUser.user.profileImage.url}
              alt=""
            />
            {storyUser.user._id === user._id ? (
              <Link
                to="/upload-story"
                className="absolute z-[999] bottom-0 -right-2 w-6 h-6 rounded-full flex items-center justify-center bg-zinc-600"
              >
                <i className="ri-add-line text-[1.2rem]"></i>
              </Link>
            ) : (
              ""
            )}
          </div>
          <h3 className="text-xl font-medium tracking-tighter">{storyUser.user.username}</h3>
        </div>
        {storyUser.user._id === user?._id ? (
          <i
            // onClick={async () => await dispatch(asyncDeleteStory(story._id))}
            className="ri-delete-bin-line text-[1.25rem] cursor-pointer"
          ></i>
        ) : (
          <i className="ri-more-2-fill text-[1.2rem] cursor-pointer"></i>
        )}
        <div className="absolute left-0 top-[100%] w-full h-[2px] bg-zinc-600 overflow-hidden">
          <div
            style={{ width: `${progress}%` }}
            className="h-full bg-white rounded-e-full"
          ></div>
        </div>
      </div>

      {story.media && story.media.fileType === "image" && (
        <img
          className="w-full h-full object-cover"
          src={story.media.url}
          alt=""
        />
      )}

      {story.media && story.media.fileType === "video" && (
        <video
          muted={true}
          loop={true}
          autoPlay={true}
          className="w-full h-full object-cover"
          src={story.media.url}
        ></video>
      )}

      <div
        onClick={handlePreviousStory}
        className="absolute top-0 left-0  w-1/2 h-full"
      ></div>
      <div
        onClick={handleNextStory}
        className="absolute top-0 right-0 w-1/2 h-full"
      ></div>

      <div className="fixed bottom-0 z-[999] w-full px-2 md:px-4 py-2 flex items-center justify-between gap-2">
        <i className="ri-chat-3-line text-[1.5rem] cursor-pointer"></i>
        <input
          type="text"
          placeholder="message . . ."
          className="w-full px-4 py-2 rounded-full text-lg font-medium bg-transparent outline-none border border-zinc-600"
        />
        <i
          onClick={async () => await dispatch(asyncLikeStory(story._id))}
          className={`${
            story?.likes.indexOf(user?._id) === -1
              ? "ri-heart-3-line"
              : "ri-heart-3-fill text-red-600"
          } text-[1.5rem] cursor-pointer`}
        ></i>
        <i className="ri-send-plane-fill text-[1.5rem] cursor-pointer"></i>
      </div>
    </div>
  ) : (
    <LoadingPage />
  );
};

export default StoryPage;
