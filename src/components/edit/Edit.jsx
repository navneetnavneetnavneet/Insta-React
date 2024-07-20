import React from "react";
import Nav from "./Nav";
import EditDetails from "./EditDetails";
import { useSelector } from "react-redux";

const Edit = () => {
  const { user } = useSelector((state) => state.userReducer);

  return (
    user && (
      <div className="w-full min-h-screen bg-zinc-900 text-white">
        <Nav />
        <EditDetails user={user} />
      </div>
    )
  );
};

export default Edit;
