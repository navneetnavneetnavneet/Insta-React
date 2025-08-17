const SearchInput = ({ username, setUsername }) => {
  return (
    <div className="w-full px-2 py-1 flex items-center gap-2 rounded-md border border-zinc-600">
      <i className="ri-search-line text-[1.5rem] cursor-pointer"></i>
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        type="text"
        placeholder="Search"
        className="w-full bg-transparent border-none outline-none text-base font-normal"
      />
      {username ? (
        <i
          onClick={() => setUsername("")}
          className="ri-close-line text-[1.5rem] cursor-pointer"
        ></i>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchInput;
