import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="w-full px-2 md:px-4 py-4 flex items-center justify-between">
      <img className="w-1/3" src={logo} alt="" />
      <div className="flex items-center gap-5">
        <i className="ri-heart-3-line text-[1.5rem]"></i>
        <Link to="/chat" className="ri-messenger-line text-[1.5rem] cursor-pointer"></Link>
      </div>
    </div>
  );
};

export default TopNav;
