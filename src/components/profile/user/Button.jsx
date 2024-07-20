import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  
  return (
    <div className="mt-5 px-4">
      <Link to="/edit" className="px-6 py-2 bg-zinc-700 text-xs rounded-md">
        Edit Profile
      </Link>
    </div>
  );
};

export default Button;
