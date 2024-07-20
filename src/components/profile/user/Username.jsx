import React from "react";

const Username = ({ fullName, bio }) => {
  return (
    <div className="mt-5 px-4">
      <h3 className="text-lg">{fullName}</h3>
      <p className="text-sm tracking-tight opacity-70">
        {bio ?? "[please edit in your profile]"}
      </p>
    </div>
  );
};

export default Username;
