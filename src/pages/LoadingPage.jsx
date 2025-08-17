import React from "react";
import loading from "../assets/instagram.webp";

const LoadingPage = () => {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <img className="w-20 h-20 object-cover" src={loading} alt="" />
    </div>
  );
};

export default LoadingPage;
