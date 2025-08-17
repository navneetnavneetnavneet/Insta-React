const Post = ({ post }) => {
  return (
    post && (
      <>
        <div className="w-[32.6%] h-28 md:h-40 overflow-hidden">
          {post.media.fileType === "image" && (
            <img
              className="w-full h-full object-cover"
              src={post.media.url}
              alt=""
            />
          )}
          {post.media.fileType === "video" && (
            <video
              autoPlay={true}
              muted={true}
              loop={true}
              className="w-full h-full object-cover"
              src={post.media.url}
            ></video>
          )}
        </div>
      </>
    )
  );
};

export default Post;
