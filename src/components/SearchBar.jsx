import React, { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (input) => {
    setQuery(input);
  };
  return (
    <div className="App">
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search..."
          className="searchinput"
        />
        <button className="searchbtn">
          <img src="search.svg" alt="Search" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
