import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { asyncSearchUser } from "../store/actions/userActions";
import SearchInput from "../components/partials/SearchInput";
import User from "../components/partials/User";

const SearchPage = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchSearchUserResults = async () => {
    if (username) {
      const data = await dispatch(asyncSearchUser(username));
      setSearchResults(data);
    }
  };

  useEffect(() => {
    fetchSearchUserResults();

    return () => {
      setSearchResults([]);
    };
  }, [username]);

  return (
    <section className="w-full h-screen px-2 md:px-4 py-4">
      <SearchInput username={username} setUsername={setUsername} />
      <div className="w-full max-h-80 overflow-x-hidden overflow-y-auto mt-2">
        {searchResults.length > 0
          ? searchResults.map((user) => <User key={user._id} user={user} />)
          : ""}
      </div>
    </section>
  );
};

export default SearchPage;
