import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const { user } = useSelector((state) => state.userReducer);

  return (
    user && (
      <div className="w-full md:w-[50vw] lg:w-[40vw] mx-auto px-2 md:px-4 py-2 border-t bg-black border-zinc-600 z-[99] fixed bottom-0 left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-between">
        <Link to="/" className="text-[1.5rem] ri-home-line"></Link>
        <Link to="/search" className="text-[1.5rem] ri-search-line"></Link>
        <Link
          to="/upload-post"
          className="text-[1.5rem] ri-add-box-line"
        ></Link>
        <Link
          to="/profile"
          className="w-6 md:w-8 h-6 md:h-8 border border-zinc-600 rounded-full cursor-pointer overflow-hidden"
        >
          <img
            className="w-full h-full object-cover"
            src={user.profileImage.url}
            alt=""
          />
        </Link>
      </div>
    )
  );
};

export default Footer;
