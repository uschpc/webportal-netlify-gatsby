import React from 'react';

const SearchBar = (props) => {
    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="Search" style={{ paddingRight: "10px", color: '#fff' }}>
                
            </label>
            <input
                id="Search"
                onChange={(e) => props.searchData(e)}
                placeholder="Search"
            />
            <button className="arrow-search">Search</button>
      </form>
    )
}

export default SearchBar;