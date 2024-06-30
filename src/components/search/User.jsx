import React from "react";

const User = () => {
  return (
    <div className="text-white flex items-center gap-2 mt-5">
      <div className="image w-[11vw] h-[11vw] rounded-full bg-sky-100 overflow-hidden">
        <img
          className="w-full h-full bg-sky-100 object-cover"
          src="https://images.unsplash.com/photo-1719357101152-32d926e518d4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="text">
        <h3>username</h3>
        <h4 className="text-xs opacity-30 leading-none">Name</h4>
      </div>
    </div>
  );
};

export default User;
