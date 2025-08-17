import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    user && (
      <Link
        to={`/profile/${user._id}`}
        className="w-full py-2 flex items-center gap-2"
      >
        <div className="w-14 md:w-16 h-14 md:h-16 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={user.profileImage.url}
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-medium leading-none tracking-tighter">
            {user.fullName}
          </h1>
          <h3 className="text-base font-normal opacity-60 leading-none tracking-tighter">
            {user.username}
          </h3>
        </div>
      </Link>
    )
  );
};

export default User;
