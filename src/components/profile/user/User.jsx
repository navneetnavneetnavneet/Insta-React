import React from "react";
import UserDets from "./UserDets";
import Button from "./Button";
import Username from "./Username";

const User = ({ user }) => {
  return (
    <div>
      <UserDets user={user} />
      <Username fullName={user.fullName} bio={user.bio} />
      <Button userId={user._id} />
    </div>
  );
};

export default User;
