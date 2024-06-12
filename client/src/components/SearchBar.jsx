import React, { useState } from "react";

function SearchBar({ setSearchData}) {
    const [searchData, setSearch] = useState("");

    const handleInput = () => {
        const value = event.target.value;
        setSearch(value);
        setSearchData(value);
    };

  
    return (
        <div className="search-bar">
            <input
              type="text"
              placeholder="Search here"
              value={searchData}
              onChange={handleInput}
              />
        </div>
    );
}
export default SearchBar;