import React from "react";
import Nav from "./Nav";
import Details from "./Details";

const UploadStory = () => {
  return (
    <div className="w-full md:w-1/3 md:mx-auto min-h-screen bg-zinc-900 text-white">
      <Nav />
      <Details />
    </div>
  );
};

export default UploadStory;
