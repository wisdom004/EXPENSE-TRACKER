// components/SearchBar.jsx
import React from "react";
import "../App.css";

function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search expenses..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search"
    />
  );
}

export default SearchBar;
