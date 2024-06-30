import React from "react";

const ProfileImage = () => {
  return (
    <div className="w-[20vw] h-[20vw] rounded-full bg-sky-100 overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1678314664229-bdb0ba7c0092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
  );
};

export default ProfileImage;
