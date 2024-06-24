import React from "react";
import "./Customers.scss";
import ima from "../../../assets/more.png";
const Search = ({ onSearch, searchTerm }) => {
  return (
    <div className="header">
      <h1>Customers</h1>
      <div>
        <p>12 / 54500</p>
      </div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={onSearch}
      />
      <img src={ima} alt="vb" />
    </div>
  );
};

export default Search;
