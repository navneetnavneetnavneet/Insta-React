import { NavLink, useLocation } from "react-router-dom";

const Icons = ({ userId }) => {
  const { pathname } = useLocation();

  const isProfileActive =
    pathname === "/profile" || pathname === `/profile/${userId}`;

  return (
    userId && (
      <div className="w-full px-4 py-2 border-y-2 border-zinc-600 flex items-center justify-around mt-5">
        <NavLink
          to={`/profile/${userId}`}
          className={`ri-layout-grid-line text-[1.5rem] cursor-pointer ${
            isProfileActive ? "opacity-100" : "opacity-20"
          }`}
        ></NavLink>
        <NavLink
          to={`/user/post/${userId}`}
          className={({ isActive }) =>
            `ri-macbook-line text-[1.5rem] cursor-pointer ${
              isActive ? "opacity-100" : "opacity-20"
            }`
          }
        ></NavLink>
        <NavLink
          to={`/user/save-post/${userId}`}
          className={({ isActive }) =>
            `ri-bookmark-line text-[1.5rem] cursor-pointer ${
              isActive ? "opacity-100" : "opacity-20"
            }`
          }
        ></NavLink>
      </div>
    )
  );
};

export default Icons;
