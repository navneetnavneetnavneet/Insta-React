import React, { useState } from "react";

const Input = () => {
  const [username, setUsername] = useState("");

  return (
    <div className="border-2 border-zinc-700 flex items-center justify-between px-2 py-1 rounded-md">
      <i className="ri-search-line"></i>
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        className="ml-2 text-lg w-full bg-transparent outline-none text-zinc-400"
        type="text"
        placeholder="search username"
      />
    </div>
  );
};

export default Input;
