import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div className="mt-5 px-4">
      <Link className="px-6 py-2 bg-zinc-700 text-xs rounded-md" to="/edit">
        Edit Profile
      </Link>
    </div>
  );
};

export default Button;
