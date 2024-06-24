import React from "react";
import ima from "../../../assets/more.png";
const Search = ({ onSearch, searchTerm }) => {
  return (
    <div className="search">
      <h1>Data</h1>
      <div>
        <p>13GB / 20GB</p>
      </div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={onSearch}
      />
      <img src={ima} alt="edfgv" />
    </div>
  );
};

export default Search;
