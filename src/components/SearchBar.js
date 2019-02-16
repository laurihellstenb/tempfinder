import React from 'react';

const SearchBar = ({ handleChange, fetchData, searchterm }) => {

    return (
        <div className="searchBar">
            <input type="text" placeholder="Search for a city..." onChange={handleChange} />
            <button onClick={fetchData} value={searchterm}>Search</button>
        </div>
    )
}

export default SearchBar;

