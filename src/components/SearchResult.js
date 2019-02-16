import React from 'react';

const SearchResult = ({ name, temp, addToList }) => {

    return (
        name && temp ?
            <div className="searchResult">
                <p>The temperature in {name} is currently {temp}&#8451;  <button onClick={addToList}>Save</button></p>
            </div> : null
    )
}

export default SearchResult;

