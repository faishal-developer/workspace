import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  const [searchData, setSearchData] = useState({
    origin: "",
    destination: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData({ ...searchData, [name]: value });
  };

  const handleSearch = () => {
    console.log("Search initiated with data:", searchData);
    // Add search logic or redirection here
  };

  return (
    <div className="search-bar container-xxl">
      <input
        type="text"
        name="origin"
        value={searchData.origin}
        onChange={handleChange}
        placeholder="Origin"
        className="search-bar__input"
      />
      <input
        type="text"
        name="destination"
        value={searchData.destination}
        onChange={handleChange}
        placeholder="Destination"
        className="search-bar__input"
      />
      <input
        type="date"
        name="date"
        value={searchData.date}
        onChange={handleChange}
        className="search-bar__input"
      />
      <button className="search-bar__button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
