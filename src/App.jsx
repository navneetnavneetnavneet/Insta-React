import React from "react";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div className="w-full md:w-[50vw] lg:w-[40vw] mx-auto min-h-screen bg-black text-white">
      <MainRoutes />
    </div>
  );
};

export default App;
